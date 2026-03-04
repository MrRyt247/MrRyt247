export interface Project {
    id: number;
	title: string;
	description: string;
    tags: string[];
    thumbnail: string;
    urls: string[];
	date: Date;
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Shopping Cart App',
		description:
			'A lightweight, responsive shopping cart web application built with HTML, CSS, and jQuery. This application allows users to create and manage shopping sessions, track purchases, and view shopping history instead of relying on mobile calculators with support for discounts and persistent data storage.',
		tags: ['HTML', 'CSS', 'JS', 'jQuery'],
		thumbnail: 'src/lib/assets/shopping-cart-thumbnail.jpeg',
		urls: [
			'https://mrryt247.github.io/shopping-cart-app/',
			'https://github.com/MrRyt247/shopping-cart-app'
		],
		date: new Date('2024-12')
	},
	{
		id: 2,
		title: 'Notes App',
		description:
			'A Note-taking webapp created with Angular built in StackBlitz ⚡️. This application allows users to create, edit, and delete notes with a simple and intuitive interface. It also features a search function to quickly find specific notes and a responsive design for optimal use on both desktop and mobile devices.',
		tags: ['HTML', 'CSS', 'TS', 'Angular'],
		thumbnail: 'src/lib/assets/notes-thumbnail.jpeg',
		urls: ['https://mrryt247.github.io/notes-app/', 'https://github.com/MrRyt247/notes-app'],
		date: new Date('2023-08')
	}
];
