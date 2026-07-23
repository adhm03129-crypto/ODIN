/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        odin: {
          bg: "#0B1220",
          sidebar: "#111827",
          card: "#1F2937",
          border: "#374151",
          primary: {
            DEFAULT: "#3B82F6",
            hover: "#2563EB",
            glow: "rgba(59, 130, 246, 0.15)",
          },
          accent: {
            DEFAULT: "#06B6D4",
            hover: "#0891B2",
            glow: "rgba(6, 182, 212, 0.15)",
          },
          success: "#10B981",
          warning: "#F97316",
          danger: "#EF4444",
          text: {
            main: "#F9FAFB",
            muted: "#9CA3AF",
            subtle: "#6B7280",
          },
        },
      },
      borderRadius: {
        odin: "16px",
      },
      boxShadow: {
        odin: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        "odin-glow": "0 0 20px -5px rgba(59, 130, 246, 0.3)",
        "odin-accent": "0 0 20px -5px rgba(6, 182, 212, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
