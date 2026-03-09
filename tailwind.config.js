/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPurple: "#7A00FF",
        neonPink: "#FF00C8",
        darkAccent: "#111111",
        lightGray: "#F4F4F4",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'neon-gradient': "linear-gradient(90deg, #7A00FF, #FF00C8)",
      },
    },
  },
  plugins: [],
}

