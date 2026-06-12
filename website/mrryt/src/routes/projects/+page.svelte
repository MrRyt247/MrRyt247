<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/project';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';
</script>

<svelte:head>
	<title>Projects | MrRyt.dev</title>
	<meta
		name="description"
		content="Projects by Flavio Sobbin — web apps, backend APIs, and experiments built with Svelte, Angular, Node.js, and more."
	/>
</svelte:head>

<section>
	<div class="header">
		<a class="back" href="/" aria-label="Back to home">
			<Icon data={chevronLeft} scale={1.75} />
		</a>
		<h1>Projects</h1>
	</div>
	<div class="content">
		{#each [...projects].sort((a, b) => b.date.getTime() - a.date.getTime()) as project}
			<ProjectCard data={project} />
		{/each}
	</div>
</section>

<style>
	section {
		padding-top: 1rem;

		& > * {
			margin-bottom: 1rem;
		}

		.header {
			align-items: center;
			justify-content: flex-start;
			gap: 1rem;

			.back {
				display: flex;
				color: var(--primary);
				transition: transform 200ms ease-out;

				&:hover {
					transform: translateX(-4px);
				}
			}

			h1 {
				text-decoration: underline;

				&::after {
					position: unset;
				}
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
