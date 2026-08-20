import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 128,
            height: 24,
            borderRadius: 12,
            background: "linear-gradient(115deg,#1E96FC,#95F2D9)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 128,
            height: 24,
            borderRadius: 12,
            background: "linear-gradient(115deg,#1E96FC,#95F2D9)",
            transform: "rotate(-45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
