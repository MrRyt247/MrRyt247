<script lang="ts">
	let { scrollProgress } = $props();
	import { socials } from '../data/home.ts';
	import Icon from 'svelte-awesome/components/Icon.svelte';
</script>

<nav>
	<h3 class="name">Flavio Sobbin</h3>
	<div class="ref-wrapper">
		<ul class="ref">
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#tech-stack">Tech Stack</a></li>
			<li><a href="#projects">Projects</a></li>
		</ul>
		<span id="scroll-progress-bar" style:--scroll-progress={scrollProgress + '%'}></span>
	</div>
	<ul class="socials">
		{#each socials as social}
			<li>
				<a href={social.url} target="_blank" rel="noopener noreferrer">
					<Icon data={social.icon} scale={1.75} label={social.label} color="var(--font-color)" />
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--primary);
		box-shadow: 0 0 7px 4px var(--primary);
		height: 3.5dvh;
		padding: 0.2rem 1.75rem 0.15rem;
		position: sticky;
		top: 0;
		z-index: 2;
		/* opacity: 0; */
		transition: all 400ms ease-in-out;
		transition-behavior: allow-discrete;

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
				}
			}
		}

		.ref-wrapper {
			display: flex;
			flex-direction: column;

			span {
				height: 0.5px;
				position: relative;
				background-color: var(--font-color);

				&::before {
					content: '';
					position: absolute;
					height: 5px;
					width: 5px;
					border-radius: 50%;
					inset: -2.5px var(--scroll-progress);
					background-color: var(--font-color);
					transition: inset 250ms ease-in-out;
				}
			}
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
				#scroll-progress-bar::before {
					inset: -2.5px var(--scroll-progress);
				}
			}
		}
	}
</style>
