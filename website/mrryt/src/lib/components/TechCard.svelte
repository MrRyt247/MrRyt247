<script lang="ts">
	import type { Technology } from '../data/techStack.ts';

	let { techs }: { techs: Technology[] } = $props();
</script>

<div class="stack">
	{#each techs as tech (tech.name)}
		<div class="card">
			<div class="plate">
				<tech.icon />
			</div>
			<p class="name">{tech.name}</p>
		</div>
	{/each}
</div>

<style>
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		padding: 1rem 0;

		.card {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 0.2rem;
			width: 4.5rem;
			padding: 0.2rem;
			background-color: light-dark(#fff, #262626);
			border: solid 1px light-dark(#0000001f, #ffffff1f);
			position: relative;
			user-select: none;
			transition:
				transform 250ms ease-out,
				border-color 250ms ease-out,
				box-shadow 250ms ease-out;

			&::after {
				content: '';
				position: absolute;
				inset: 100% 0 0;

				width: 0;
				height: 3px;
				background-color: var(--primary);
				transition: width 250ms ease-out;
			}

			&:hover {
				transform: translateY(-4px);
				border-color: var(--tertiary);
				box-shadow: 0 8px 16px light-dark(#00000022, #00000066);

				&::after {
					width: 100%;
				}

				.plate {
					> :global(svg) {
						transform: scale(1.15);
					}

					&::before {
						transform: skewX(-15deg) translateX(340%);
					}
				}

				.name {
					color: var(--secondary);
				}
			}

			.plate {
				display: grid;
				place-items: center;
				width: 100%;
				aspect-ratio: 1;
				font-size: 2.5rem;
				/* always-light surface so dark brand icons (Express, Bash, Next.js)
				   stay legible in dark mode; currentColor icons resolve dark too */
				color: #1e1e1e;
				background-color: light-dark(#f3f3f3, #ececec);
				position: relative;
				overflow: hidden;

				&::before {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					left: -60%;
					width: 50%;
					background: linear-gradient(100deg, transparent, #ffffffcc, transparent);
					transform: skewX(-15deg);
					transition: transform 500ms ease-out;
				}

				> :global(svg) {
					transition: transform 250ms ease-out;
				}
			}

			.name {
				font-size: 0.9rem;
				font-weight: 700;
				line-height: 1;
				transition: color 250ms ease-out;
			}
		}
	}

	@keyframes card-in {
		from {
			opacity: 0;
			transform: translateY(1.25rem);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.stack .card {
			animation: card-in ease-out both;
			animation-timeline: view();
			animation-range: entry 0% entry 40%;
		}
	}

	@media screen and (max-width: 450px) {
		.stack {
			gap: 0.5rem;

			.card {
				width: 3.5rem;
				row-gap: 0.2rem;
				padding: 0.2rem;

				.plate {
					font-size: 2.25rem;
				}

				.name {
					font-size: 0.78rem;
				}
			}
		}
	}
</style>
