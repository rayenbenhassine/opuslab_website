/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        darkBlue: '#031136',
        lightBlue: '#53B9CD',
        lightGrey: '#F1F1F1',
        grey: '#909090',
        pink: '#D40776',
        turquoise: '#22ABB4',
        yellow: '#EEBD3E',
        cian: '#0090E1',
        purple: '#7B61FF',
        veryLightGrey: '#E5E5E5',
        darkPurple: '#5E309D',
        veryDarkBlue: '#010C27',
        mediumGrey: '#D9D9D9',
        green: '#32BA7C',
      },
      fontFamily: {
        louisGeorgeCafe: ['louis_george_cafe'],
        robotoLight: ['roboto_light'],
        roboto: ['roboto_regular'],
        robotoBold: ['roboto_bold'],
      },
      backgroundImage: {
        formation: 'url(/images/formationBackground.jpg)',
      },
      fontSize: {
        '6.5xl': '62px',
      },
      screens: {
        //sm: '640px',
        //md: '768px',
        lg: '992px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-180deg)' },
          '50%': { transform: 'rotate(-170deg)' },
        },
        leftRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        rightLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        leftRight: 'leftRight 0.5s ease-in-out ',
        rightLeft: 'rightLeft 0.5s ease-in-out ',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
}
