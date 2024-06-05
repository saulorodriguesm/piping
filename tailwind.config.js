/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "piping-blue": "#18436e",
      },
      backgroundImage: {
        worker: "url('./src/assets/background.jpg')",
      },
      backgroundColor: {
        "off-white": "#f0f0f0",
        "piping-blue": "#18436e",
      },
      borderColor: {
        "piping-blue": "#18436e",
      },
    },
  },
  plugins: [],
};
