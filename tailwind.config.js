/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pulled from the STEMspire logo
        navy: {
          DEFAULT: '#0c2d78',
          dark: '#082058',
          light: '#e8edf7',
        },
        leaf: '#1fcb6a',
        cream: '#faf6ee',
        ink: '#161b26',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
