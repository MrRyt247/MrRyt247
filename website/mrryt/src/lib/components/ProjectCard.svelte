<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import play from 'svelte-awesome/icons/play';
	import github from 'svelte-awesome/icons/github';

	let { data } = $props();

	import { technologies } from '../data/techStack.ts';
	import { goto } from '$app/navigation';

	function handleNavigate() {
		goto(`/projects/${data.title.toLowerCase().replace(/\s+/g, '-')}`);
	}
</script>

<div
	class="card"
	role="link"
	tabindex="0"
	onclick={handleNavigate}
	onkeydown={(e) => {
		if (e.key === 'Enter') handleNavigate();
	}}
>
	<div class="description">
		<h2>{data.title}</h2>
		<p class="type">{data.type}</p>
		<p>{data.description}</p>
		<div class="tags">
			{#each data.tags as tag}
				{@const Component = technologies.find((tech) => tech.name === tag)?.icon}
				{#if Component}
					<Component style="font-size: 1.85rem" />
				{/if}
			{/each}
		</div>
		<div class="actions">
			<button
				type="button"
				disabled={data.urls.live === null ? true : false}
				onclick={(e) => e.stopPropagation()}
			>
				<a href={data.urls.live} target="_blank" rel="noopener noreferrer">Live</a>
				<Icon data={play} scale={1.2}/>
			</button>
			<button type="button" onclick={(e) => e.stopPropagation()}>
				<a href={data.urls.repo} target="_blank" rel="noopener noreferrer">Repo</a>
				<Icon data={github} scale={1.2} />
			</button>
		</div>
	</div>
	<div class="icon">
		<img src={data.thumbnail} alt="shopping-cart" />
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: row;
		column-gap: 1rem;
		position: relative;
		border: solid 1px var(--primary);
		border-inline: none;

		&:nth-child(even) {
			flex-direction: row-reverse;
		}

		&::after {
			content: '';
			position: absolute;
			inset: 100% 0 0;
			transform: translateY(-50% + 5px);
			background-color: var(--primary);
			width: 0%;
			height: 5px;
			transition: width 300ms ease-out;
		}
		&:hover {
			cursor: pointer;

			&::after {
				width: 100%;
			}
		}

		.description {
			flex: 1;
			align-content: center;

			h2 {
				font-size: 2.25rem;
			}
			.type {
				font-weight: bold;
				color: var(--secondary);
				text-transform: capitalize;
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
		}

		.icon {
			flex: 1;
			height: 19rem;
			overflow: hidden;
			aspect-ratio: 16 / 9;

			img {
				width: 100%;
				object-fit: cover;
			}
		}
	}
	@media screen and (max-width: 450px) {
		.card,
		.card:nth-child(even) {
			flex-direction: column-reverse;
			row-gap: 1rem;

			.icon {
				width: 100%;
				height: 12rem;
			}

			.description {
				h2 {
					font-size: 1.5rem;
				}

				p {
					font-size: 0.95rem;
				}

				.tags {
					justify-content: center;
				}

				.actions {
					justify-content: center;
				}
			}
		}
	}
</style>
