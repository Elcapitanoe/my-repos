/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        light: {
          bg: '#ffffff',
          surface: '#f3f4f6',
          border: '#e5e7eb',
          text: '#111827',
          muted: '#6b7280'
        },
        dark: {
          bg: '#09090b',
          surface: '#18181b',
          border: '#27272a',
          text: '#f4f4f5',
          muted: '#a1a1aa'
        },
        brand: {
          light: '#2563eb',
          dark: '#3b82f6',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}