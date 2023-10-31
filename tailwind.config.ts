import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray100: '#F2F2F2',
        gray200: '#D9D9D9',
        gray300: '#808080',
        gray400: '#333333',
        gray500: '#262626',
        gray600: '#1A1A1A',
        gray700: '#0D0D0D',
        purple: '#8284FA',
        purpleDark: '#5E60CE',
        blue: '#4EA8DE',
        blueDark: '#1E6F9F'
      }
    }
  },
  plugins: [],
}
export default config
