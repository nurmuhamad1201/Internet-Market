/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			'3xl': { max: '1920px' },
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			ld: { max : "890px" },
			md: { max: '767px' },
			pg: { max: '550px' },
			sm: { max: '639px' },
			xs: { max: '400px' },
		},
	},
	plugins: [],
}
