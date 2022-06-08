module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: {
        300: "#e82e43",
        400: "#b0191c",
        500: "#7f1617",

        A400: "#dd1424",
      },
    },
    extend: {
      gridTemplateRows: {
        // Simple 9 row grid
        9: "repeat(9, minmax(0, 1fr))",
      },
    },
    backgroundImage: {
      "header-hero": "url('/images/mockup/tailwind/assetHero.jpg')",
      "obzidian-pattern": "url('/images/mockup/tailwind/obzidianPattern.png')",
    },
  },
  plugins: [],
};
