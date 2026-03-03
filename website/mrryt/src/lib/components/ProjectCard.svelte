<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import download from 'svelte-awesome/icons/download';
	let { data } = $props();
	let id = data.id;
	import { technologies } from '../data/techStack.ts';
</script>

<div class="card" style:flex-direction={id & 1 ? 'row' : 'row-reverse'}>
	<div class="description">
		<h2>{data.title}</h2>
		<p>
			{data.description}
		</p>
		<div class="tags">
			{#each data.tags as tag}
				<svelte:component this={technologies.find(tech => tech.name===tag)?.icon} style="font-size: 2rem" />
			{/each}
		</div>
        <div class="actions">
            <button type="button">
                <a href={data.urls[0]} target="_blank" rel="noopener noreferrer">Live</a>
				<!-- <Icon data={download} scale={1.5} /> -->
             </button>
             <button type="button">
                <a href={data.urls[1]} target="_blank" rel="noopener noreferrer">Repo</a>
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
		border: outset 1px var(--secondary);
		padding: 0.1rem;
		box-shadow: 0 0 15px 2px #0002;

        .description {
            width: 50%;

			h2 {
				font-size: 2.25rem;
			}
			.tags {
				display: flex;
				justify-content: center;
				column-gap: 0.3rem;
				padding: 0.2rem 0;
			}

			.actions {
				display: flex;
				column-gap: 1rem;
			}
        }

		.icon {
			height: 16.5rem;
			aspect-ratio: 1;
			overflow: hidden;

			img {
				width: 100%;
				object-fit: cover;
			}
		}
	}
</style>
