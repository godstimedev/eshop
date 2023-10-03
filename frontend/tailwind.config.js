/** @type {import('tailwindcss').Config} */
module.exports = {
	tailwindConfig: './styles/tailwind.config.js',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
