/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './app/***/**/*.{ts,tsx}',
    './components/***/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          '3xl': '1630px',
        },
      },
      colors: {
        primary: '#131313',
        secondary: '#0FC1A7',
        secondaryLight: '#F9FEFD',
        secondaryLgLight: '#0FC1A726',
        darkgray: '#3D3D3D',
        lightgray: '#D8D8D9',
        semilightgray: '#C1C1C1',
        extralightgray: '#FCFCFC',
        xlextralightgray: '#FBFBFB',
        smextralightgray: '#E6E6E8',
        xsextralightgray: '#EEF8F8',
        midlightgray: '#D2DADA',
        midextralightgray: '#B7B7B745',
        midlglightgray: '#e6e6e6',
        midnight: '#1D2A3A',
        'midnight-hover': '#4a5461',
        'dark-midnight': '#17202a',
        'header-gray': '#9EABB5',
        'light-gray': '#F2F5F5',
        'dark-gray': '#87929D',
        'light-blue': '#10B7FF',
        'white-hover': '#D1D3D5',
        violet: '#373593',
        header: '#101821',
        gray: '#6a737c',
        input: '#8EA3B8',
        divider: 'rgb(106, 115, 124)',
        success: '#17E299',
        lightsuccess: '#5BCC622E',
        mdsuccess: '#5DD959',
        warning: '#F7931A',
        lightwarning: '#EF01011F',
        mdwarning: '#F34D4D',
      },
      // fontFamily: {
      //   sans: ['var(--font-inter)', 'sans-serif'],
      //   serif: ['var(--font-playfair-display)', 'serif'],
      // },
      backgroundImage: {
        'banner-pattern': 'conic-gradient(var(--tw-gradient-stops))',
        'checkbox': "url('/assets/images/check.svg')",
      },
      gridTemplateColumns: {
        'auto-fill-5': 'repeat(auto-fill, 20px)',
      },
      width: {
        '30/12': '30%',
        '14/12': '14%',
        '78'   : '300px',
        '500'   : '500px',
      },
      height: {
        '51': '51px',
      },
      minHeight: {
        '1/2': '60vh',
        '12': '3rem',
      },
      minWidth: {
        '4': '16px',
        '28': '7rem'
      },
      maxWidth: {
        '190': '190px',
      },
      boxShadow: {
        '3xl': '0 0 40px 0px #0000000F',
        'green-boxShadow': '0px 0px 60px #0FC1A766;',
        '4xl': '6px 6px 10px #00000005;',
        '6xl': '0px 0px 10px #0000000D;;',
      },
      lineHeight: {
        'medium-loose': '1.2',
      },
      borderRadius: {
        '4xl': '40px',
        '10': '10px',
      },
      fontSize: {
        '4xl-md': ['40px', {
          lineHeight: '1.4',
        }],
        '8xs': '8px',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}