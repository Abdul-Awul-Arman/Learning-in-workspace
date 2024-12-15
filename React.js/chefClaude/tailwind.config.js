/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,html,js}", // Corrected to use square brackets for file extensions
    "./components/**/*.{jsx,html,js}", // Corrected to use square brackets for file extensions
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"], // Font family "inter" is properly set up
      },
    },
  },
  plugins: [],
}
