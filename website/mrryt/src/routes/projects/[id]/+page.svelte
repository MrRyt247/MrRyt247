<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { technologies } from '$lib/data/techStack';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);

	let scrollProgress = $state(0);
	let navVisible = $state(true);

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'overview', label: 'Overview' },
		{ id: 'features', label: 'Features' },
		{ id: 'results', label: 'Results' },
		{ id: 'tech-stack', label: 'Tech Stack' }
	];

	function onScroll() {
		const maxScroll = document.body.scrollHeight - window.innerHeight;
		scrollProgress = (window.scrollY / maxScroll) * 100;
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});	
</script>

<Nav {navItems} {scrollProgress} visible={navVisible} />
<section>
	<h1 id={navItems[0].id}>{project.title}</h1>
	<figure>
		<img src={`../../../${project.thumbnail}`} alt={project.title} />
		<figcaption>{project.figcaption}</figcaption>
	</figure>

	<article id={navItems[1].id}>
		<h2>Overview</h2>
		<p>{project.description}</p>
	</article>

	<article id={navItems[2].id}>
		{#if project.keyFeatures}
			<h2>Key Features</h2>
			<ul>
				{#each project.keyFeatures as feature}
					<li>{feature}</li>
				{/each}
			</ul>
		{/if}
	</article>

	{#if project.images}
		<h2>Gallery</h2>
		<figure>
			<img src={`../../../${project.images[0]}`} alt={project.title} />
			<figcaption>ProofMint UI</figcaption>
		</figure>
	{/if}

	<article id={navItems[3].id}>
		<h2>Results</h2>
		<p>{project.results}</p>
	</article>

	<article id={navItems[4].id}>
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

	<article class="actions">
		<button type="button" disabled={project.urls.live === null ? true : false}>
			<a href={project.urls.live} target="_blank" rel="noopener noreferrer">Live</a>
		</button>
		<button type="button">
			<a href={project.urls.repo} target="_blank" rel="noopener noreferrer">Repo</a>
		</button>
	</article>
</section>

<style>
	section {
		padding-top: 1rem;
		
		& > * {
			margin-bottom: 1rem;
		}
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

	.tags {
		display: flex;
		column-gap: 0.5rem;
		padding: 0.5rem 0;
	}
	.actions {
		display: flex;
		column-gap: 1rem;

		button:disabled {
			cursor: not-allowed;
			border-bottom-color: lightgrey;

			a {
				color: lightgrey;
				text-decoration: line-through;
			}
		}
	}
</style>
