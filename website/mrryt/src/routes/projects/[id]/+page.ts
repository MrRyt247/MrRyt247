import { projects } from '$lib/data/project';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.id);

	if (!project) error(404, 'Project not found');
	return { project };
};
