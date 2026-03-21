<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/project';

	let isMobile = $state(false);

	function getScreenSize() {
		const screenWidth = window.innerWidth;
		isMobile = screenWidth <= 450;
	}

	$effect(() => {
		window.addEventListener('resize', getScreenSize);
		return () => window.removeEventListener('resize', getScreenSize);
	});
</script>

<section>
	<h1>Projects</h1>
	<div class="content">
		{#each [...projects].sort((a, b) => b.date.getTime() - a.date.getTime()) as project, index}
			<ProjectCard data={project} {index} {isMobile} />
		{/each}
	</div>
</section>

<style>
	section {
		h1 {
			text-decoration: underline;

			&::after {
				position: unset;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			row-gap: 2rem;
			background-color: var(--bg);
			margin-top: 0.5rem;
		}
	}
</style>
