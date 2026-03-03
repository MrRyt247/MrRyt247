<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '../data/project.ts';
</script>

<section>
	<div class="header">
		<h1>Projects</h1>
	</div>
	<hr />
	<div class="content">
		{#each projects as project}
			<ProjectCard data={project} />
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
			row-gap: 1rem;
			background-color: var(--bg);
		}
	}
</style>
