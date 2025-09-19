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
        primary: '#ec4899', // Pink
        'primary-content': '#ffffff',
        secondary: '#6b7280', // Dark grey
        accent: '#7c3aed', // Dark purple
        'accent-content': '#ffffff',
        neutral: '#1f2937', // Dark grey
        'base-100': '#111827', // Very dark grey
        'base-200': '#1f2937', // Dark grey
        'base-300': '#374151', // Medium grey
      },
    },
  },
  plugins: [],
}
