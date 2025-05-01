/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: 'slide 30s linear infinite',
        'fade-up': 'fadeUp 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Adjust for loop
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    colors: {
      'white': 'white',
      'black': 'black',
      'gray': '#808080',
      'light-gray': '#F5F5F5',
      'dark-gray': '#333333',
      'red': '#FF0000',
      'green': '#008000',
      'blue': '#0000FF',
      'fbcolor': '#1877F2',
      'insta-color': '#E1306C',
      'whatsapp-color': '#25D366',
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

