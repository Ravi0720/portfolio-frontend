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
        primary: '#3b82f6', // Blue
        secondary: '#8b5cf6', // Purple
        accent: '#f59e0b', // Amber
        dark: '#1f2937', // Gray-800
        darker: '#111827', // Gray-900
        light: '#f9fafb', // Gray-50
      },
    },
  },
  plugins: [],
}
