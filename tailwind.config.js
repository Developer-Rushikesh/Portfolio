/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#1E293B',
        accent: '#FBBF24',
        background: '#0F172A',
        text: '#F1F5F9',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'Roboto', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

