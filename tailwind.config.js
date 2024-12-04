// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          500: "#8b5cf6",
        },
        slate: {
          500: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--fira-sans)", "sans-serif"], // Use Fira Sans
        mono: ["var(--fira-mono)", "monospace"], // Use Fira Mono
      },
      backgroundColor: {
        "gray-900": "#1a202c",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode using class
};
