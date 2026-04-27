/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.6s ease-out forwards',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
        'scaleIn': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            'opacity': '0',
            'transform': 'translateY(20px)',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateY(0)',
          },
        },
        fadeIn: {
          'from': {
            'opacity': '0',
          },
          'to': {
            'opacity': '1',
          },
        },
        slideInLeft: {
          'from': {
            'opacity': '0',
            'transform': 'translateX(-30px)',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            'opacity': '0',
            'transform': 'translateX(30px)',
          },
          'to': {
            'opacity': '1',
            'transform': 'translateX(0)',
          },
        },
        scaleIn: {
          'from': {
            'opacity': '0',
            'transform': 'scale(0.95)',
          },
          'to': {
            'opacity': '1',
            'transform': 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
