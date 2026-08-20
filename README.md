# Nexari

Web studia Nexari — Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Vývoj

```bash
npm install
npm run dev
```

## Kontrola kódu

```bash
npm run typecheck
npm run lint
npm run build
```

## Konfigurace (nepovinné env proměnné)

- `NEXT_PUBLIC_BOOKING_URL` — URL embedovatelného kalendáře (např. Cal.com event link), zobrazí se v sekci Kontakt v záložce „Rezervovat schůzku". Bez nastavení se zobrazí fallback s odkazem na e-mail.
- `RESEND_API_KEY` a `CONTACT_INBOX_EMAIL` — napojení kontaktního formuláře (`/api/contact`) na odesílání e-mailů přes Resend. Bez nastavení formulář zobrazí uživateli fallback s přímým mailto odkazem.

## Přidání dalšího projektu do portfolia

Portfolio data jsou oddělená od prezentace v `lib/data/projects.ts` — nový projekt se přidá jako další objekt do pole `projects`. Case study stránka `/projekty/[slug]` se vygeneruje automaticky.

## Reference

`lib/data/testimonials.ts` — pole zůstává prázdné, dokud nejsou k dispozici reálné reference; sekce se na webu automaticky skryje, dokud pole neobsahuje alespoň jednu položku.
