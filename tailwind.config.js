/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roborto: ["Roboto"],
      },
      backgroundColor: {
        'bgJournal': '#BDBDBD', // Use your desired color and name
        'secondary': '#ffed4a',
      },
    },
    
  },
  plugins: [],
};
