<script lang="ts">
	let { isMobile } = $props();
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '../data/project.ts';	
</script>

<section id="projects">
	<div class="header">
		<h1>Projects</h1>
	</div>
	<div class="content">
		{#each [...projects].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 5) as project, index}
			<ProjectCard data={project} {index} {isMobile}/>
		{/each}
	</div>
	<button type="button">
		<a href="/projects">View More</a>
	</button>
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
			margin: 0.5rem;
		}
		
		button {
			width: fit-content;
			align-self: center;
			margin: 0.5rem;
		}
	}
</style>
