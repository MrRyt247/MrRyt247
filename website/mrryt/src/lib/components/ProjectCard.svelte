<script lang="ts">
	// import Icon from 'svelte-awesome/components/Icon.svelte';
	// import download from 'svelte-awesome/icons/download';
	let { data, index } = $props();
	import { technologies } from '../data/techStack.ts';
</script>

<div class="card" style:flex-direction={(index + 1) & 1 ? 'row' : 'row-reverse'}>
	<div class="description">
		<h2>{data.title}</h2>
		<p>
			{data.description}
		</p>
		<div class="tags">
			{#each data.tags as tag}
				{@const Component = technologies.find((tech) => tech.name === tag)?.icon}
				{#if Component}
					<Component style="font-size: 1.85rem" />
				{/if}
			{/each}
		</div>
		<div class="actions">
			<button type="button">
				<a href={data.urls.live} target="_blank" rel="noopener noreferrer">Live</a>
				<!-- <Icon data={download} scale={1.5} /> -->
			</button>
			<button type="button">
				<a href={data.urls.repo} target="_blank" rel="noopener noreferrer">Repo</a>
				<!-- <Icon data={download} scale={1.5} /> -->
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
		column-gap: 1rem;
		position: relative;

		/* Dotted background to be considered */
		/* background-image:
			radial-gradient(#ddd 15.2%, transparent 15.2%),
			radial-gradient(#ddd 15.2%, transparent 15.2%),
			radial-gradient(#ddd 15.2%, transparent 15.2%);
		background-position:
			0px 0px,
			4px 4px;
		background-size: 8px 8px; */

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
			.tags {
				display: flex;
				column-gap: 0.5rem;
				padding: 0.5rem 0;
			}

			.actions {
				display: flex;
				column-gap: 1rem;
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
</style>
