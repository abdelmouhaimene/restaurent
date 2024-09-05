/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['var(--font-cu)', 'serif'],
        alt: ['var(--font-os)','sans-serif'],
      },
      colors: {
        "golden": "#DCCA87",
        "light_black": "#0C0C0C",
        "gray": "#545454",
        "crimson": "#F5EFDB",
        "grey": "#AAAAAA",
        "white": "#FFFFFF",
      },
      backgroundImage: {
        'bg_black': "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
};
