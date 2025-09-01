import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#10a37f',
          50: '#e6f6f2',
          100: '#cceee5',
          200: '#99dccb',
          300: '#66cbb1',
          400: '#33b997',
          500: '#10a37f',
          600: '#0b7a5f',
          700: '#075241',
          800: '#042a22',
          900: '#021511',
        },
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(800px 400px at 50% -20%, rgba(16,163,127,0.25), transparent)',
      },
    },
  },
  plugins: [],
};

export default config;

