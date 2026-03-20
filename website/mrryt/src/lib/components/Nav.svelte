<script lang="ts">
	let { visible, scrollProgress } = $props();
	import { socials } from '../data/home.ts';
	import Icon from 'svelte-awesome/components/Icon.svelte';

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'tech-stack', label: 'Tech Stack' },
		{ id: 'projects', label: 'Projects' }
	];

	function getActiveIndex(): number {
		const numSections = navItems.length;
		const sectionSize = 100 / numSections;
		return Math.min(
			Math.floor(scrollProgress / sectionSize),
			numSections - 1
		);
	}

	let activeIndex = $derived(getActiveIndex());

	function getFontSize(index: number): string {
		return index === activeIndex ? '1.8rem' : '1.3rem';
	}

	function getFontWgt(index: number): string {
		return index === activeIndex ? '800' : '500';
	}
</script>

<nav style:--nav-opacity={visible ? 1 : 0} style:--display={visible ? 'flex' : 'none'}>
	<h2 class="name">Flavio Sobbin</h2>
	<div class="ref-wrapper">
		<ul class="ref">
			{#each navItems as item, index}
				<li>
					<a
						href={'#' + item.id}
						style:font-size={getFontSize(index)}
						style:font-weight={getFontWgt(index)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<ul class="socials">
		{#each socials as social}
			<li>
				<a href={social.url} target="_blank" rel="noopener noreferrer">
					<Icon data={social.icon} scale={2} label={social.label} color="var(--font-color)" />
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: var(--display);
		align-items: center;
		justify-content: space-between;
		background-color: var(--primary);
		box-shadow: 0 0 7px 4px var(--primary);
		height: 5dvh;
		padding: 0.2rem 1.75rem 0.15rem;
		position: sticky;
		top: 0;
		z-index: 2;
		opacity: var(--nav-opacity);
		transition: opacity 400ms ease-in-out;
		transition: display 10ms ease;
		transition-behavior: allow-discrete;

		.name {
			font-size: 2rem;
			line-height: 2rem;
		}

		ul {
			display: flex;
			align-items: center;
			column-gap: clamp(0.2rem, 1.6vw, 1.4rem);
			padding: 0;

			li {
				list-style: none;
				text-align: center;

				a {
					text-decoration: none;
					color: var(--font-color);
					transition:
						font-weight,
						font-size 300ms ease-out;
				}
			}
		}

		.ref-wrapper {
			display: flex;
			flex-direction: column;
		}

		.socials {
			column-gap: 0.625rem;

			a {
				display: flex;
			}
		}
	}
	@media screen and (max-width: 450px) {
		nav {
			.name,
			.socials {
				display: none;
			}
			.ref-wrapper {
				width: 100%;

				.ref {
					justify-content: space-between;
					column-gap: unset;
				}
			}
		}
	}
</style>
