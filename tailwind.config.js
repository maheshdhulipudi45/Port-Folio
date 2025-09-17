// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [  "./src/**/*.{js,jsx,ts,tsx}",
//     "./index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./index.html"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-heading': 'linear-gradient(to right, #6b43ff, #8a2be2)',
      },
    },
  },
  plugins: [],
}
