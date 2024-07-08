// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   safelist: ['rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-full'],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           100: '#84c98c',
//           200: '#6ec079',
//           300: '#56b665',
//           400: '#39ad51',
//           500: '#00a33b',
//           600: '#008d32',
//           700: '#007829',
//           800: '#006321',
//           900: '#004f19',
//         },
//         secondary: {
//           100: '#90afda',
//           200: '#7ea2d3',
//           300: '#6c95cc',
//           400: '#5a88c5',
//           500: '#487bbe',
//           600: '#3d6aa5',
//           700: '#335a8c',
//           800: '#294a75',
//           900: '#1f3a5e',
//         },
//         success: '#4caf50',
//         warning: '#ff9800',
//         error: '#f44336',
//         info: '#2196f3',
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-full'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#84c98c',
          200: '#6ec079',
          300: '#56b665',
          400: '#39ad51',
          500: '#00a33b',
          600: '#008d32',
          700: '#007829',
          800: '#006321',
          900: '#004f19',
        },
        secondary: {
          100: '#90afda',
          200: '#7ea2d3',
          300: '#6c95cc',
          400: '#5a88c5',
          500: '#487bbe',
          600: '#3d6aa5',
          700: '#335a8c',
          800: '#294a75',
          900: '#1f3a5e',
        },
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
        info: '#2196f3',
      },
    },
  },
  plugins: [],
};
