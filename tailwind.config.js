/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'white' : 'white',
      'black' : 'black',
      'gray' : '#808080',
      'light-gray' : '#F5F5F5',
      'dark-gray' : '#333333',
      'red' : '#FF0000',
    },
    fontFamily: {
      'Lora': ['Lora', 'serif'],
      'dancingScript': ['Dancing Script', 'cursive'],
      'mountain': ['Mountains of Christmas', 'serif'],
      'nautigal': ['The Nautigal', 'cursive'],
      "pt-serif": ['PT Serif', 'serif'],
      "eb-garamond": ['EB Garamond', 'serif'],
    }
  },
  plugins: [],
}

