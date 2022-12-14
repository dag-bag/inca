/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#bd9575",

          secondary: "#CBCBCB",

          accent: "#8B5801",

          neutral: "#FFFFFF",

          "base-100": "#FFFFFF",

          info: "#26C9ED",

          success: "#1CE397",

          warning: "#CB8B15",

          error: "#F3535B",
        },
      },
    ],
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
