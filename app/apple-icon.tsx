import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const montserrat900 = await readFile(join(process.cwd(), "public/fonts/montserrat-900.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#003249",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Montserrat",
            fontWeight: 900,
            fontSize: 130,
            color: "#5FD9B8",
          }}
        >
          X
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Montserrat", data: montserrat900, weight: 900, style: "normal" }] }
  );
}
