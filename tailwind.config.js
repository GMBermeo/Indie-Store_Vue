module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
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
      "header-hero": "url('images/assetHero.png')",
      "obzidian-pattern": "url('images/obzidianPattern.png')",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
