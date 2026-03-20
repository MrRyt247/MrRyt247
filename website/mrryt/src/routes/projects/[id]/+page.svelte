<script lang="ts">
	import { page } from '$app/state';
	import { technologies } from '$lib/data/techStack';

	let { data } = page.state || {};
</script>

<h1>{data.title}</h1>

<img src={'../../../' + data.thumbnail} alt={data.title} />

<h2>Overview</h2>
<p>{data.description}</p>

{#if data.keyFeatures}
	<h2>Key Features</h2>
	<p>{data.keyFeatures}</p>
{/if}

<h2>Results</h2>

<h2>Technologies Used</h2>
<div class="tags">
	{#each data.tags as tag (tag)}
		{@const Component = technologies.find((tech) => tech.name === tag)?.icon}
		{#if Component}
			<Component style="font-size: 1.85rem" />
		{/if}
	{/each}
</div>

{#if data.reflections}
	<h2>Reflection</h2>
	<p>{data.reflections}</p>
{/if}

<style>
	img {
		display: block;
		width: 100%;
	}
</style>
