module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        widest: '.3em'
      },
      screens: {
        'sm': '1px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px',
      },
      colors: {
          /* Light Theme */
          'gray-1': '#FAFAFA',
          'gray-blue-1': '#E4E5F1',
          'gray-blue-2': '#D2D3DB',
          'gray-blue-3': '#9394A5',
          'gray-blue-4': '#484B6A',

          /* Dark Theme */
          'dark-blue-1': '#161722',
          'dark-blue-2': '#24273C',
          'dark-blue-3': '#CACDE8',
          'dark-blue-4': '#E4E5F1',
          'dark-blue-5': '#777A92',
          'dark-blue-6': '#4D5066',
          'dark-blue-7': '#393A4C',

          'bright-blue': '#3A7BFD',
          'gradient-color-from': '#57DDFF',
          'gradient-color-to': '#C058F3',
      }  
    },    
  },
  plugins: [],
}
