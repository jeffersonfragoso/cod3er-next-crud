/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safeList: [
    {
      pattern: /from-(green|blue|gray)-400/,
    },
    {
      pattern: /to-(green|blue|gray)-700/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
