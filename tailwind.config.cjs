/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3'
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
        neon: '0px 0px 40px 0px #a78bfa'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        profile: "url('https://avatars.githubusercontent.com/u/104171028?v=4')"
      },
      keyframes: {
        lighten: {
          '50%': { filter: 'brightness(2)' }
        }
      },
      animation: {
        lighten: 'lighten 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
