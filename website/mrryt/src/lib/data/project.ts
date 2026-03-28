export interface Project {
	title: string;
	description: string;
	tags: string[];
	thumbnail: string;
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
		thumbnail: 'src/lib/assets/thumbnails/sc-thumbnail.webp',
		figcaption: 'The front page of Shopping Cart App',
		keyFeatures: ['Discount calculator', 'Data persistence'],
		results:
			'A simple persistent shopping cart app that keeps track of your keyed in shopping lists.',
		reflections: '',
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
		thumbnail: 'src/lib/assets/thumbnails/notes-thumbnail.webp',
		figcaption: 'The front page of Notes App',
		keyFeatures: [''],
		results: '',
		reflections: '',
		urls: {
			live: 'https://mrryt247.github.io/notes-app/',
			repo: 'https://github.com/MrRyt247/notes-app'
		},
		date: new Date('2023-08')
	},
	{
		title: 'Rock Paper Scissors Game',
		description:
			'A Rock Paper Scissors game built with Angular and TypeScript. This game allows users to play against the computer, with a simple and intuitive interface. The game keeps track of the score and provides feedback on the outcome of each round.',
		tags: ['HTML', 'CSS', 'TS', 'Angular'],
		thumbnail: 'src/lib/assets/thumbnails/rps-thumbnail.webp',
		figcaption: 'The front page of Rock Paper Scissors Game',
		keyFeatures: [''],
		results: '',
		reflections: '',
		urls: {
			live: 'https://mrryt247.github.io/rock-paper-scissors-game/',
			repo: 'https://github.com/MrRyt247/rock-paper-scissors-game'
		},
		date: new Date('2025-07')
	},
	{
		title: 'Space Tourism Website',
		description: 'A Frontend Mentor Practice Challenge.',
		tags: ['HTML', 'CSS', 'JS'],
		thumbnail: 'src/lib/assets/thumbnails/st-thumbnail.webp',
		figcaption: 'The front page of Space Tourism Website',
		keyFeatures: [''],
		results: '',
		reflections: '',
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
		thumbnail: 'src/lib/assets/thumbnails/proofmint/landing_home-dark.webp',
		figcaption: 'The Landing page of ProofMint dapp',
		keyFeatures: [
			'Soulbound NFTs: Non-transferable certificates that stay with the recipient',
			'Issuer Management: Organizations can register as credential issuers',
			'Certificate Types: Flexible template system for different credential types',
			'On-chain Verification: Instant verification of credentials without revealing personal information',
			'Revocation Support: Issuers can revoke credentials when necessary',
			'Metadata Storage: IPFS integration for rich certificate metadata'
		],
		results: '',
		reflections:
			'This project boosted my teamwork skills, collaborating with my patner on the backend design. It also emphasizes on time management - I had to work strictly within the allocated time.',
		urls: {
			live: null,
			repo: 'https://github.com/MrRyt247/space-tourism-website'
		},
		date: new Date('2025-07')
	}
];
