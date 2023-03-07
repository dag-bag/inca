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
    extend: {
      gridTemplateColumns: {
        custom: 'calc(100% - 400px) 400px'
      },
      gridTemplateRows: {
        'xs-size': '100px calc(100% - 100px)'
      }

    },
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
  variants: {
    extent: {
      lineClamp: ["hover"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      // strategy: 'class', // only generate classes
    }),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
