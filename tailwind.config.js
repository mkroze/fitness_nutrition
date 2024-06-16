/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        title: ["Monstserrat Alternates", "cursive"],
        subtitle: ["Josefin Slab", "serif"],
        libre: ["Nova Round", "serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        luxeraz: {
          primary:    "#0F2026",
          secondary:  "#466E73",
          accent:     "#BFBAA8",
          neutral:    "#A68C5D",
          "base-100": "#F2E0C9",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
