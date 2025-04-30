/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 30s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Adjust for loop
        },
      },
    },
    colors:{
      'white' : 'white',
      'black' : 'black',
      'gray' : '#808080',
      'light-gray' : '#F5F5F5',
      'dark-gray' : '#333333',
      'red' : '#FF0000',
      'green' : '#008000',
      'blue' : '#0000FF',
    },
    fontFamily: {
      'Lora': ['Lora', 'serif'],
      'dancingScript': ['Dancing Script', 'cursive'],
      'mountain': ['Mountains of Christmas', 'serif'],
      'nautigal': ['The Nautigal', 'cursive'],
      "pt-serif": ['PT Serif', 'serif'],
      "eb-garamond": ['EB Garamond', 'serif'],
    },
    
  },
  plugins: [],
}

