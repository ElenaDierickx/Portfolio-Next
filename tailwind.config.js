/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        },
    },
    plugins: [],
};
