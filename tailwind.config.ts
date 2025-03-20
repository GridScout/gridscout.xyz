import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        background: "#15151E",
        stroke: "#38383F",
        gradient: {
          red: "#FF2D2D",
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
