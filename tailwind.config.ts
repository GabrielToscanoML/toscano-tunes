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
        '250': '250px',
        '60': '60%',
        '1280': '1280px',
        '1024': '1024px',
        '768': '768px',
        '640': '640px',
      },
      colors: {
        'p-blue': '#666BF6',
      },
    },
  },
  plugins: [],
}
export default config
