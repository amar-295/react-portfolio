/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        "light-bg": "#FFFFFF",
        "light-surface": "#F9FAFB",
        "light-text-primary": "#000000",
        "light-text-secondary": "#4B5563",
        "light-border": "#E5E7EB",
        "accent-dark": "#1a1a1a", // Dark charcoal accent for light mode
        "accent-light": "#F0FDFA", // Light teal background

        // Gray scale for light mode
        "gray-50": "#F9FAFB",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-600": "#4B5563",
        "gray-900": "#111827",
        "slate-700": "#334155",

        // Dark Mode Colors
        midnight: "#020617", // Slate-950
        navy: "#0f172a", // Slate-900
        lightNavy: "#1e293b", // Slate-800
        slate: "#64748b", // Slate-500
        lightSlate: "#94a3b8", // Slate-400
        white: "#f1f5f9", // Slate-100
        "accent-teal": "#3b82f6", // Replacing with Blue as requested
        "brand-bg": "#050505",
        "card-bg": "#13161c",
        "primary-blue": "#2563EB",
        "text-grey": "#94A3B8",
        "tag-bg": "#1E293B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "monospace"],
      },
      borderRadius: {
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
