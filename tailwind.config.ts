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
        linkedin: '#0072B1',
        github: '#111',
        instagram: '#bc2a8d',
        orange: 'rgba(250,82,82,1) 0%',
        pink: 'rgba(221,36,118,1)100%'
      }
    },
  },
  plugins: [],
}
export default config
