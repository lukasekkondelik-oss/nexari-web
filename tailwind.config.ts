import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        prussian: {
          DEFAULT: "#003249",
          light: "#0A4A66",
          dark: "#001C29",
        },
        dodger: {
          DEFAULT: "#1E96FC",
          light: "#5CB3FD",
          dark: "#0F6FCC",
        },
        aqua: {
          DEFAULT: "#95F2D9",
          light: "#C3F9E9",
          dark: "#5FD9B8",
        },
        bg: {
          base: "#040F17",
          surface: "#071A26",
          elevated: "#0B2233",
          "elevated-2": "#0F2C40",
        },
        fg: {
          primary: "#F4F8FA",
          secondary: "#AEC1C9",
          muted: "#75868F",
          disabled: "#4B5960",
        },
        line: {
          subtle: "rgba(244,248,250,0.07)",
          DEFAULT: "rgba(244,248,250,0.12)",
          strong: "rgba(244,248,250,0.22)",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(3rem, 6vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        elevated: "0 20px 60px -20px rgba(0, 10, 20, 0.6)",
        glow: "0 0 0 1px rgba(30,150,252,0.25), 0 0 40px -8px rgba(30,150,252,0.35)",
        "glow-aqua": "0 0 0 1px rgba(149,242,217,0.25), 0 0 40px -8px rgba(149,242,217,0.3)",
      },
      backgroundImage: {
        "signature-ray": "linear-gradient(115deg, #1E96FC 0%, #5FD9B8 55%, #95F2D9 100%)",
        "signature-ray-soft": "linear-gradient(115deg, rgba(30,150,252,0.5) 0%, rgba(95,217,184,0.5) 55%, rgba(149,242,217,0.5) 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(30,150,252,0.16), transparent 60%)",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
