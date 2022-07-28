/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				titillium: ['Titillium Web', 'sans-serif'],
			},
			boxShadow: {
				'duro-coins': '0px 6px 18px rgba(0, 0, 0, 0.06)',
			},
		},
	},
	plugins: [],
};
