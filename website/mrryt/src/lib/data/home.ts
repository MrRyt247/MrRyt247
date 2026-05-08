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
		url: 'https://#'
	},
	{
		icon: linkedin,
		label: 'LinkedIn',
		url: 'https://#'
	}
];
