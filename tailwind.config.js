/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        oceanBlue: "#2292EA",
        wildSand: "#F6F6F6",
        dustyGray: "#959595",
        lightgray: "#f8f8f8",
        turquoise: "#35d0ba",
        gray: {
          100: "#1e1e1e",
          200: "#000022",
          300: "#858585",
          400: "#C7C4C4",
          500: "#9a9a9a",
          600: "#6e7072",
          700: "#6c6c6c",
          750: "#9F9F9F",
          800: "#5A5A5A",
          900: "#374151",
          1000: "#F4F4F4",
          1020: "#E8E8E8",
          1050: "#E1E1E1",
        },
        lightsteelblue: "#aab2c8",
        fennelTea: "#d3f3f0",
        dangerred: "#FF647C",
        textzinc: "#3B3B3B",
        green: "#24D32B",
        fuchsia: {
          400: "#BD00FF",
          500: "#E674E1",
          600: "#EB00FF",
          300: "#C141FF",
          700: "#FF00F5",
        },
        yellow: {
          300: "#F9DE10",
        },
        amber: {
          500: "#FFA800",
          300: "#F26320",
          700: "#FEBB0E",
        },
        blue: {
          500: "#5226FF",
          300: "#5B6DCE",
          400: "#2292EA",
          700: "#069EE4",
        },
        cyan: {
          300: "#8CE4FF",
        },
        lime: {
          300: "#CBD927",
          400: "#E6EB0A",
          900: "#55BE40",
        },
        teal: {
          300: "#82E3E3",
          700: "#01B9CC",
          100: "#01C2AE",
        },
        red: {
          500: "#D92727",
          300: "#FF7E5A",
          700: "#FF32A2",
        },
        black: {
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
