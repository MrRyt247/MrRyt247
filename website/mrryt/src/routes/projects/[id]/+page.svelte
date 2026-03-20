<script lang="ts">
	import { technologies } from '$lib/data/techStack';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);
</script>

<h1>{project.title}</h1>

<img src={`../../../${project.thumbnail}`} alt={project.title} />

<h2>Overview</h2>
<p>{project.description}</p>

{#if project.keyFeatures}
	<h2>Key Features</h2>
	<p>{project.keyFeatures}</p>
{/if}

<h2>Results</h2>

<h2>Technologies Used</h2>
<div class="tags">
	{#each project.tags as tag (tag)}
		{@const Component = technologies.find((tech) => tech.name === tag)?.icon}
		{#if Component}
			<Component style="font-size: 1.85rem" />
		{/if}
	{/each}
</div>

{#if project.reflections}
	<h2>Reflection</h2>
	<p>{project.reflections}</p>
{/if}

<style>
	img {
		display: block;
		width: 100%;
	}
</style>
