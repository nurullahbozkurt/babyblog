module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
    },

    extend: {
      backgroundImage: {
        family: "url('/bg-baby.webp')",
      },
      colors: {
        newGray: "#f4f4f4",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
