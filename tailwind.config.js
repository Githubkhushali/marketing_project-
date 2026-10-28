/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Original warm editorial palette ──────────────────────
        ink: "#14181C",
        "ink-soft": "#4B4640",
        "ink-muted": "#7A736A",
        paper: "#EFE7D8",
        "paper-warm": "#F4EDDE",
        "paper-dark": "#E6DBC9",
        clay: "#C1502E",
        "clay-light": "#D4694A",
        moss: "#5B6B4F",
        line: "#D9CFBB",
        "line-soft": "#E8DECA",
        // ── New premium accent palette ────────────────────────────
        offwhite: "#F8F7F3",
        charcoal: "#171717",
        lime: "#D7FF64",
        cobalt: "#435BFF",
        lavender: "#DCD6FF",
        coral: "#FF8068",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "68ch",
        "measure-sm": "48ch",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
