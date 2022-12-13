/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pinkblue: "url('/img/background.jpg')",
        bluepink: "url('/img/background2.jpg')",
        guitars: "url('/img/guitars.jpg')",
        steps: "url('/img/steps.svg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "50%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in-out",
        fadeInRight: "fadeInRight 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
