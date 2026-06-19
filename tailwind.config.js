/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lani: {
          primary: "#9B5B2E",
          green: "#087443",
          emerald: "#10a768",
          blue: "#0b66c3",
          navy: "#0f2442",
          gold: "#c9972b",
          coral: "#d95845",
          ink: "#182233",
          mist: "#eef6f2",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 36, 66, 0.08)",
        softHover: "0 22px 50px rgba(15, 36, 66, 0.15)",
        premium: "0 20px 40px rgba(155, 91, 46, 0.08)",
      },
    },
  },
  plugins: [],
}
