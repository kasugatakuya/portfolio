import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        base: {
          DEFAULT: '#FFFAF5',
          secondary: '#FEF6EE',
          tertiary: '#FDF0E6',
        },
        // Text colors
        content: {
          DEFAULT: '#3A2A20',
          secondary: '#6B5244',
          muted: '#947D6E',
        },
        // Accent colors (Orange palette)
        accent: {
          DEFAULT: '#E8712F',
          light: '#F5A66A',
          lighter: '#FDDCBD',
          dark: '#C2541A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #E8712F, #C2541A)',
        'gradient-soft': 'linear-gradient(135deg, #F5A66A, #E8712F)',
      },
      boxShadow: {
        'glow': '0 0 24px rgba(232, 113, 47, 0.25)',
        'glow-soft': '0 0 20px rgba(245, 166, 106, 0.3)',
        'card': '0 2px 12px rgba(58, 42, 32, 0.06)',
        'card-hover': '0 12px 32px rgba(232, 113, 47, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 166, 106, 0.25)' },
          '50%': { boxShadow: '0 0 32px rgba(232, 113, 47, 0.35)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
