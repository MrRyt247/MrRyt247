<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '../data/project.ts';
</script>

<section id="projects">
	<div class="header">
		<h1>Projects</h1>
	</div>
	<div class="content">
		{#each [...projects].sort((a, b) => b.date.getTime() - a.date.getTime()) as project, index (index)}
			<ProjectCard data={project} {index}/>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
        max-width: 1088px;
		user-select: contain;

		.content {
            display: flex;
            flex-direction: column;
			row-gap: 2rem;
			background-color: var(--bg);
			margin-top: 0.5rem;
		}
	}
</style>
