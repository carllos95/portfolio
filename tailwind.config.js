/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bgDefault: '#070707',
        textColor: '#607B96',
        borderBottom: '#1E2D3D',
        textMenu: '#607B9680',
        textActive: '#E5E9F0',
        textDeveloper: '#4D5BCE',
        textComment: '#607B96',
        githubLink: '#43D9AD',
        link: '#E99287',
        curriculum: '#3BBF98'
      }
    },
  },
  plugins: [],
}
