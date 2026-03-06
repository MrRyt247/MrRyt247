export interface Project {
	title: string;
	description: string;
    tags: string[];
    thumbnail: string;
    urls: string[];
	date: Date;
}

export const projects: Project[] = [
	{
		title: 'Shopping Cart App',
		description:
			'A lightweight, responsive shopping cart web application built with HTML, CSS, and jQuery. This application allows users to create and manage shopping sessions, track purchases, and view shopping history instead of relying on mobile calculators with support for discounts and persistent data storage.',
		tags: ['HTML', 'CSS', 'JS', 'jQuery'],
		thumbnail: 'src/lib/assets/thumbnails/sc-thumbnail.png',
		urls: [
			'https://mrryt247.github.io/shopping-cart/',
			'https://github.com/MrRyt247/shopping-cart'
		],
		date: new Date('2024-12')
	},
	{
		title: 'Notes App',
		description:
			'A Note-taking webapp created with Angular built in StackBlitz ⚡️. This application allows users to create, edit, and delete notes with a simple and intuitive interface. It also features a search function to quickly find specific notes and a responsive design for optimal use on both desktop and mobile devices.',
		tags: ['HTML', 'CSS', 'TS', 'Angular'],
		thumbnail: 'src/lib/assets/notes-thumbnail.jpeg',
		urls: ['https://mrryt247.github.io/notes-app/', 'https://github.com/MrRyt247/notes-app'],
		date: new Date('2023-08')
	},
	{
		title: 'Rock Paper Scissors Game',
		description:
			'A Rock Paper Scissors game built with Angular and TypeScript. This game allows users to play against the computer, with a simple and intuitive interface. The game keeps track of the score and provides feedback on the outcome of each round.',
		tags: ['HTML', 'CSS', 'TS', 'Angular'],
		thumbnail: 'src/lib/assets/thumbnails/rps-thumbnail.png',
		urls: [
			'https://mrryt247.github.io/rock-paper-scissors-game/',
			'https://github.com/MrRyt247/rock-paper-scissors-game'
		],
		date: new Date('2025-07')
	}
];
