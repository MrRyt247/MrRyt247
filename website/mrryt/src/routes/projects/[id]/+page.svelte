<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { technologies } from '$lib/data/techStack';
	import type { PageData } from './$types';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import play from 'svelte-awesome/icons/play';
	import github from 'svelte-awesome/icons/github';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';
	import { page } from '$app/state';

	const SITE = 'https://mrryt-dev.vercel.app';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);

	let currentIndex = $state(0);

	function nextSlide() {
		if (!project.images) return;
		currentIndex = (currentIndex + 1) % project.images.length;
	}

	$effect(() => {
		if (!project.images?.length) return;
		const timer = setInterval(nextSlide, 10000);
		return () => clearInterval(timer);
	});
</script>

<svelte:head>
	<title>{project.title} | MrRyt.dev</title>
	<meta name="description" content={project.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={project.title} />
	<meta property="og:description" content={project.description} />
	<meta property="og:url" content={SITE + page.url.pathname} />
	<meta property="og:image" content={SITE + project.thumbnail} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section>
	<div class="header">
		<a class="back" href="/projects" aria-label="Back to all projects">
			<Icon data={chevronLeft} scale={1.75} />
		</a>
		<h1>{project.title}</h1>
	</div>
	<figure>
		<img src={project.thumbnail} alt={project.title} />
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

	{#if project.images}
		<article id="gallery">
			<h2>Gallery</h2>
			<div class="carousel">
				<div class="track" style="transform: translateX(-{currentIndex * 100}%)">
					{#each project.images as image, i}
						<figure>
							<img src={image} alt={`${project.title} — slide ${i + 1}`} />
						</figure>
					{/each}
				</div>
				<div class="dots">
					{#each project.images as _, i}
						<button
							type="button"
							class:active={i === currentIndex}
							onclick={() => (currentIndex = i)}
							aria-label={`Go to slide ${i + 1}`}
						></button>
					{/each}
				</div>
			</div>
		</article>
	{/if}

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

	<article class="actions">
		<button type="button" disabled={project.urls.live === null ? true : false}>
			<a href={project.urls.live} target="_blank" rel="noopener noreferrer">Live</a>
			<Icon data={play} scale={1.2} />
		</button>
		<button type="button">
			<a href={project.urls.repo} target="_blank" rel="noopener noreferrer">Repo</a>
			<Icon data={github} scale={1.2} />
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

	.carousel {
		position: relative;
		overflow: hidden;
		width: 100%;

		.track {
			display: flex;
			transition: transform 0.5s ease;
			will-change: transform;

			figure {
				min-width: 100%;
				margin: 0;

				img {
					display: block;
					width: 100%;
					aspect-ratio: 16 / 9;
				}
			}
		}

		.dots {
			display: flex;
			justify-content: center;
			gap: 0.5rem;
			padding: 0.6rem 0 0.2rem;

			button {
				width: 0.25rem;
				height: 0.25rem;
				border: none;
				background: var(--tertiary);
				cursor: pointer;
				padding: 0;
				transition:
					background 0.2s,
					transform 0.2s;

				&.active {
					background: var(--primary);
					transform: scale(1.5);
				}
			}
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
		padding-top: 1rem;

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
