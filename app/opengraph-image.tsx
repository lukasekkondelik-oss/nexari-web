import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 62,
                height: 12,
                borderRadius: 6,
                background: "linear-gradient(115deg,#1E96FC,#95F2D9)",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 62,
                height: 12,
                borderRadius: 6,
                background: "linear-gradient(115deg,#1E96FC,#95F2D9)",
                transform: "rotate(-45deg)",
              }}
            />
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
    { ...size }
  );
}
