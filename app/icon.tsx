import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const montserrat900 = await readFile(join(process.cwd(), "public/fonts/montserrat-900.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#003249",
          borderRadius: 14,
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
            fontSize: 46,
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
