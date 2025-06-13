/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'console-dark': '#0d1a26',
        'console-blue': '#1a344d',
        'console-cyan': '#66f4e1',
        'console-light-cyan': '#a2f5e8',
        'console-gray': '#8892b0',
        'console-light-gray': '#ccd6f6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      backgroundImage: {
        'dotted-matrix': 
          radial-gradient(circle at 1px 1px, rgba(136, 146, 176, 0.2) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(136, 146, 176, 0.2) 1px, transparent 0)
        `,
      },
      backgroundSize: {
        'dotted-matrix': '20px 20px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(110%)' },
        }
      }
    },
  },
  plugins: [],
};
