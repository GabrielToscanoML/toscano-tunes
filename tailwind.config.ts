import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '750': '750px',
        '450': '450px',
        '60': '60%',
      },
      colors: {
        'p-blue': '#666BF6',
      },
    },
  },
  plugins: [],
}
export default config
