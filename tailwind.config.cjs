/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	
	 ],
	theme: {
		extend: {
			 backgroundImage: {
        'lexus1': 'url(\'/lexus/lexus1.jpg\')',
        'perryhotel1': 'url(\'/perryhotel/hero.jpg\')',
        'olasmarinas1': 'url(\'/olasmarina/OlasMarinas.jpg\')',
        'clearwater1': 'url(\'/clearwater/clearwater1.jpg\')',
       'shalamar1': 'url(\'/shalamar/shalamar5.jpg\')',
      },
		},
	},
	plugins: [
		 require('tailwindcss-animated')
	],
}
