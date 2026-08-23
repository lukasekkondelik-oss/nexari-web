import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const montserrat900 = await readFile(join(process.cwd(), "public/fonts/montserrat-900.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#040F17",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 0%, rgba(30,150,252,0.25), transparent 60%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", fontFamily: "Montserrat", fontWeight: 900, fontSize: 76, color: "#5FD9B8" }}>
              X
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#F4F8FA", letterSpacing: -2 }}>
            NEXARI
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#AEC1C9", fontWeight: 500 }}>
          Weby a webové aplikace, které mají důvod existovat.
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Montserrat", data: montserrat900, weight: 900, style: "normal" }] }
  );
}
