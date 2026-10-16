import { NextResponse } from "next/server";
import { site } from "@/lib/data/site";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  need?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatná data." }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !isValidEmail(email)) {
    return NextResponse.json({ error: "Vyplňte prosím jméno, platný e-mail a zprávu." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactInbox = process.env.CONTACT_INBOX_EMAIL ?? site.email;

  if (!resendApiKey) {
    // No email provider configured yet — the client falls back to a mailto
    // link when this happens. Set RESEND_API_KEY (and optionally
    // CONTACT_INBOX_EMAIL to override the default inbox) to enable real
    // delivery.
    return NextResponse.json({ error: "Kontaktní formulář zatím není napojen na e-mail." }, { status: 501 });
  }

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Nexari web <noreply@nexari.cz>",
        to: contactInbox,
        reply_to: email,
        subject: `Nová poptávka — ${payload.name}`,
        text: [
          `Jméno: ${payload.name}`,
          `E-mail: ${payload.email}`,
          payload.company ? `Firma: ${payload.company}` : null,
          payload.need ? `Potřeba: ${payload.need}` : null,
          payload.budget ? `Rozpočet: ${payload.budget}` : null,
          "",
          payload.message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });
  } catch {
    return NextResponse.json({ error: "Odeslání se nezdařilo." }, { status: 502 });
  }

  if (!res.ok) {
    return NextResponse.json({ error: "Odeslání se nezdařilo." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
