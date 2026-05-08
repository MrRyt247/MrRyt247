import github from 'svelte-awesome/icons/github';
import linkedin from 'svelte-awesome/icons/linkedin';

export interface Icon {
	icon: typeof github;
	label: string;
	url: string;
}

export const socials: Icon[] = [
	{
		icon: github,
		label: 'GitHub',
		url: 'https://github.com/MrRyt247'
	},
	{
		icon: linkedin,
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/mrryt'
	}
];
