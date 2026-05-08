export interface Project {
	title: string;
	description: string;
	tags: string[];
	thumbnail: string;
	images?: string[];
	figcaption: string;
	keyFeatures?: string[];
	results?: string;
	reflections?: string;
	urls: {
		live: string | null;
		repo: string;
	};
	date: Date;
}

export const projects: Project[] = [
	{
		title: 'Shopping Cart App',
		description:
			'A lightweight, responsive shopping cart web application built with HTML, CSS, and jQuery. This application allows users to create and manage shopping sessions, track purchases, and view shopping history instead of relying on mobile calculators with support for discounts and persistent data storage.',
		tags: ['HTML', 'CSS', 'JS', 'jQuery'],
		thumbnail: '/thumbnails/sc-thumbnail.webp',
		figcaption: 'The front page of Shopping Cart App',
		keyFeatures: ['Discount calculator', 'Data persistence'],
		results:
			'A simple persistent shopping cart app that keeps track of your keyed in shopping lists.',
		reflections: 'This project emphasized on building simple solutions that solves a goal.',
		urls: {
			live: 'https://mrryt247.github.io/shopping-cart/',
			repo: 'https://github.com/MrRyt247/shopping-cart'
		},
		date: new Date('2024-12')
	},
	{
		title: 'Notes App',
		description:
			'A Note-taking webapp created with Angular built in StackBlitz ⚡️. This application allows users to create, edit, and delete notes with a simple and intuitive interface. It also features a search function to quickly find specific notes and a responsive design for optimal use on both desktop and mobile devices.',
		tags: ['HTML', 'CSS', 'TS', 'Angular'],
		thumbnail: '/thumbnails/notes-thumbnail.webp',
		figcaption: 'The front page of Notes App',
		keyFeatures: ['Add notes', 'Edit notes', 'Delete notes', 'Search notes'],
		results: 'A simple note-taking app that allows users to manage their notes.',
		reflections:
			'This project helped me understand the basics of Angular and TypeScript. It was a great way to practice building a client-side application with a modern framework.',
		urls: {
			live: 'https://mrryt247.github.io/notes-app/',
			repo: 'https://github.com/MrRyt247/notes-app'
		},
		date: new Date('2023-08')
	},
	{
		title: 'Rock Paper Scissors Game',
		description:
			'A Rock Paper Scissors game built with Angular and TypeScript. This game allows users to play against the computer, with a simple and intuitive interface. The game keeps track of the score and provides feedback on the outcome of each round. It is a practice challenge by Frontend Mentor.',
		tags: ['HTML', 'CSS', 'TS', 'Angular'],
		thumbnail: '/thumbnails/rps-thumbnail.webp',
		figcaption: 'The front page of Rock Paper Scissors Game',
		keyFeatures: ['Play against computer', 'Track score', 'Persist score with localStorage'],
		results: 'A simple Rock Paper Scissors game that allows users to play against the computer.',
		reflections:
			'This project was a fun way to practice Angular and TypeScript, and it helped me understand how to manage state and component communication in a client-side application.',
		urls: {
			live: 'https://mrryt247.github.io/rock-paper-scissors-game/',
			repo: 'https://github.com/MrRyt247/rock-paper-scissors-game'
		},
		date: new Date('2025-07')
	},
	{
		title: 'Space Tourism Website',
		description:
			'A Frontend Mentor Practice Challenge where I cloned a responsive website for space tourism information.',
		tags: ['HTML', 'CSS', 'JS'],
		thumbnail: '/thumbnails/st-thumbnail.webp',
		figcaption: 'The front page of Space Tourism Website',
		keyFeatures: ['Responsive design', 'Interactive elements'],
		results: 'A responsive website for space tourism information.',
		reflections:
			'This project helped me understand the basics of responsive design and interactive elements.',
		urls: {
			live: 'https://mrryt247.github.io/space-tourism-website/',
			repo: 'https://github.com/MrRyt247/space-tourism-website'
		},
		date: new Date('2025-07')
	},
	{
		title: 'ProofMint',
		description:
			'A Decentralized Credentialing MVP. This project was a Web3 challenge at ACES 2025 CodeFest.',
		tags: ['Nextjs', 'Hardhat', 'Solidity', 'TS'],
		thumbnail: '/thumbnails/proofmint/landing_home-dark.webp',
		images: [
			'/thumbnails/proofmint/landing_home-dark.webp',
			'/thumbnails/proofmint/landing_hiw-dark.webp',
			'/thumbnails/proofmint/landing_features-dark.webp',
			'/thumbnails/proofmint/landing_cta-dark.webp',
			'/thumbnails/proofmint/signup-dark.webp',
			'/thumbnails/proofmint/dashboard-dark.webp',
			'/thumbnails/proofmint/dashboard-light.webp',
			'/thumbnails/proofmint/create_proof-dark.webp'
		],
		figcaption: 'The Landing page of ProofMint dapp',
		keyFeatures: [
			'Soulbound NFTs: Non-transferable certificates that stay with the recipient',
			'Issuer Management: Organizations can register as credential issuers',
			'Certificate Types: Flexible template system for different credential types',
			'On-chain Verification: Instant verification of credentials without revealing personal information',
			'Revocation Support: Issuers can revoke credentials when necessary',
			'Metadata Storage: IPFS integration for rich certificate metadata'
		],
		results:
			'A decentralized credentialing solution for issuing and verifying digital credentials.',
		reflections:
			'This project boosted my teamwork skills, collaborating with my patner on the backend design. It also emphasizes on time management - I had to work strictly within the allocated time.',
		urls: {
			live: null,
			repo: 'https://github.com/MrRyt247/space-tourism-website'
		},
		date: new Date('2025-07')
	}
];
