/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b71c1c",       // FXT Brand Red
        "primary-dark": "#8a1616",
        "primary-light": "#d63c3c",
        secondary: "#111827",     // Slate/Black
        accent: "#facc15",        // Yellow accent
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
