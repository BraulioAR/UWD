/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	
	 ],
	theme: {
		extend: {
			 backgroundImage: {
        'lexus1': 'url(\'/lexus/lexus1.webp\')',
        'perryhotel1': 'url(\'/perryhotel/hero.webp\')',
        'olasmarinas1': 'url(\'/olasmarina/OlasMarinas.webp\')',
        'clearwater1': 'url(\'/clearwater/clearwater1.webp\')',
       'shalamar1': 'url(\'/shalamar/shalamar5.webp\')',
      },
		},
	},
	plugins: [
		 require('tailwindcss-animated')
	],
}
