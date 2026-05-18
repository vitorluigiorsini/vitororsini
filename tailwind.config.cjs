/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0A0F1C', // Deep Navy - Background/main color
        secondary: '#6366F1', // Indigo - Accent/interactive elements
        success: '#10B981', // Emerald - Success states
        warning: '#F59E0B', // Amber - Warning states
        'text-primary': '#F8FAFC', // Slate 50 - Primary text
        'text-secondary': '#94A3B8', // Slate 400 - Secondary text
        // Gray scale
        'gray-50': '#F8FAFC',
        'gray-100': '#F1F5F9',
        'gray-200': '#E2E8F0',
        'gray-300': '#CBD5E1',
        'gray-400': '#94A3B8',
        'gray-500': '#64748B',
        'gray-600': '#475569',
        'gray-700': '#334155',
        'gray-800': '#1E293B',
        'gray-900': '#0F172A',
      },
      boxShadow: {
        subtle: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        medium: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
        elevated: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
      },
      screens: {
        xs: '450px',
        // Keeping default breakpoints but adding custom ones
        // sm: '640px', // default
        // md: '768px', // default
        // lg: '1024px', // default
        // xl: '1280px', // default
        // '2xl': '1536px', // default
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
