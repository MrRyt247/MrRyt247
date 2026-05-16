<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { technologies } from '$lib/data/techStack';
	import type { PageData } from './$types';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import play from 'svelte-awesome/icons/play';
	import github from 'svelte-awesome/icons/github';

	let { data }: { data: PageData } = $props();
	let project = $derived(data.project);

	let activeIndex = $state(0);
	let navVisible = $state(true);
	let currentIndex = $state(0);

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'overview', label: 'Overview' },
		{ id: 'features', label: 'Features' },
		{ id: 'tech-stack', label: 'Tech Stack' }
	];

	function onScroll() {
		const threshold = window.innerHeight * 0.1;
		let newIndex = 0;
		for (let i = navItems.length - 1; i >= 0; i--) {
			const el = document.getElementById(navItems[i].id);
			if (el && el.offsetTop <= window.scrollY + threshold) {
				newIndex = i;
				break;
			}
		}
		activeIndex = newIndex;
	}

	function nextSlide() {
		if (!project.images) return;
		currentIndex = (currentIndex + 1) % project.images.length;
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		if (!project.images?.length) return;
		const timer = setInterval(nextSlide, 10000);
		return () => clearInterval(timer);
	});
</script>

<Nav {navItems} {activeIndex} visible={navVisible} />
<section>
	<h1 id={navItems[0].id}>{project.title}</h1>
	<figure>
		<img src={project.thumbnail} alt={project.title} />
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

	<article id={navItems[3].id}>
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
