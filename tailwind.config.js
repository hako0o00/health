module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This will cover all JavaScript and TypeScript files in your src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] // Add this line
      }
    },
  },
  plugins: [],
}
