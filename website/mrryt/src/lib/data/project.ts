export interface Project {
	title: string;
	type: 'frontend' | 'backend' | 'fullstack';
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
		type: 'frontend',
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
		type: 'frontend',
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
		type: 'frontend',
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
		type: 'frontend',
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
		type: 'frontend',
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
			repo: 'https://github.com/MrRyt247/proofmint-mvp'
		},
		date: new Date('2025-07')
	},
	{
		title: 'Budget Buddy',
		type: 'backend',
		description:
			'A simple personal finance mobile app that helps users track income, plan budgets, log expenses, and review their financial activity over time.',
		tags: ['TS', 'Hono', 'Drizzle', 'PostgreSQL'],
		thumbnail: '/thumbnails/bb-thumbnail.webp',
		figcaption: 'The front page of Budget Buddy',
		keyFeatures: [
			'RESTful backend API built with Hono',
			'PostgreSQL database modelled with Drizzle ORM',
			'User authentication and account management',
			'Income, budget, and expense tracking endpoints',
			'Date-ranged expenditure reviews and savings calculation'
		],
		results:
			'A functional TypeScript backend exposing endpoints for authentication, income and expense management, budget planning, and savings tracking — deployed live on Render and consumed by the mobile front-end.',
		reflections:
			'This was my first ever backend project, and I built it alongside a senior developer who taught me a lot about structuring an API, working with a real database through an ORM, working with new technology, and finding solutions rather than guesswork. Collaborating in a team pushed me to communicate clearly about what I had done, what I was stuck on, and what I planned next. Habits I have carried into every project since. I implemented the database schemas and queries with Drizzle ORM against PostgreSQL and built and tested API routes for authentication, income, expenses, and budgets using Hono',
		urls: {
			live: 'https://budgetbuddy-leza.onrender.com/',
			repo: 'https://github.com/jake0011/BudgetBuddy/'
		},
		date: new Date('2024-05')
	},
	{
		title: 'CloudForge',
		type: 'backend',
		description:
			'An Express.js REST API that wraps a Proxmox VE hypervisor, exposing virtual machine, node, and cluster operations to the CloudForge dashboard.',
		tags: ['NodeJs', 'Express', 'Proxmox'],
		thumbnail: '/thumbnails/cf-thumbnail.webp',
		figcaption: 'Proxmox Web UI',
		keyFeatures: [
			'VM lifecycle endpoints — create, start, stop, shutdown, reboot, and delete — backed by the Proxmox API',
			'Node inventory routes for storage pools, ISO images, disk volumes, and version/time info',
			'Cluster task listing and status endpoints',
			'Health check that verifies Proxmox connectivity',
			'Server-to-server auth via a scoped Proxmox API token'
		],
		results:
			'A working subset of the planned API: VM and node operations function against a live Proxmox instance, cluster task monitoring is in place, and the LXC routes are stubbed for future work. The backend is incomplete relative to what the full dashboard will eventually need.',
		reflections:
			'CloudForge was a team project where the React frontend was already well underway, and I took on the backend. Wiring a dashboard up to Proxmox meant reading the Proxmox VE API docs carefully, deciding what to expose versus abstract away, and learning to work with response shapes that were unlike any REST API I had touched before. Without another backend dev to bounce ideas off, I had to be more deliberate about decisions I would otherwise have made by reflex. I did not finish everything I scoped — the LXC routes are still stubbed and the API surface is narrower than the dashboard ultimately needs — but the VM, node, and cluster paths work end-to-end against a real hypervisor.',
		urls: {
			live: null,
			repo: 'https://github.com/CloudForge25/CloudForge25/tree/main/backend'
		},
		date: new Date('2025-06')
	},
	{
		title: 'Expense Tracker',
		type: 'backend',
		description:
			'A backend REST API for tracking personal income and expenses, built with Node.js, Express, and MongoDB while following a Udemy course.',
		tags: ['NodeJs', 'Express', 'MongoDB', 'JWT'],
		thumbnail: '/thumbnails/et-thumbnail.webp',
		figcaption: 'AI-generated cover image for Expense Tracker',
		keyFeatures: [
			'RESTful endpoints for adding, editing, and deleting income and expense transactions',
			'JWT-based user authentication with register and login flows',
			'MongoDB models for users and transactions',
			'Centralized error handling and auth middleware',
			'Modular project structure (handlers, managers, middleware, models, modules)'
		],
		results:
			'A working Express API backed by MongoDB that handles user registration, login, and full CRUD on personal transactions, with JWT-protected routes and CORS enabled for cross-origin clients.',
		reflections:
			'I built this while following a Udemy Node.js masterclass, which is where the fundamentals of backend development started to click for me — routing, controllers, middleware, JWT auth, and talking to a database through a model layer. Testing every endpoint in Postman as I went also gave me my first real feel for how a frontend would consume an API.',
		urls: {
			live: null,
			repo: 'https://github.com/MrRyt247/expense-tracker'
		},
		date: new Date('2024-12')
	}
];
