<script lang="ts">
	import { technologies } from '$lib/data/techStack';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);
</script>

<section>
	<h1>{project.title}</h1>
	<figure>
		<img src={`../../../${project.thumbnail}`} alt={project.title} />
		<figcaption>{project.figcaption}</figcaption>
	</figure>
	<article>
		<h2>Overview</h2>
		<p>{project.description}</p>
	</article>

	<article>
		{#if project.keyFeatures}
			<h2>Key Features</h2>
			<ul>
				{#each project.keyFeatures as feature}
					<li>{feature}</li>
				{/each}
			</ul>
		{/if}
	</article>

	<article>
		<h2>Results</h2>
		<p>{project.results}</p>
	</article>

	<article>
		<h2>Technologies Used</h2>
		<div class="tags">
			{#each project.tags as tag (tag)}
				{@const Component = technologies.find((tech) => tech.name === tag)?.icon}
				{#if Component}
					<Component style="font-size: 1.85rem" />
				{/if}
			{/each}
		</div>
	</article>

	<article>
		{#if project.reflections}
			<h2>Reflection</h2>
			<p>{project.reflections}</p>
		{/if}
	</article>
</section>

<style>
	section > * {
		margin-bottom: 1rem;
	}
	h1 {
		text-decoration: underline;

		&::after {
			position: unset;
		}
	}
	figure {
		img {
			display: block;
			width: 100%;
		}
		figcaption {
			text-align: center;
			font-style: italic;
			filter: grayscale(60%);
		}
	}
</style>
