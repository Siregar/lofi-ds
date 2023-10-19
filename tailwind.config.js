/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      neutral: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      success: {
        100: '#DBEFDC',
        500: '#4CAF50',
      },
      warning: {
        100: '#FFF3CD',
        500: '#FFC107',
      },
      danger: {
        100: '#FBD2E0',
        500: '#E91E63',
      },
      info: {
        100: '#D3EAFD',
        500: '#2196F3',
      },
    },
    extend: {
      minHeight: {
        1: '4px',
        2: '8px',
        4: '16px',
        6: '24px',
      },
    },
  },
  plugins: [],
};
