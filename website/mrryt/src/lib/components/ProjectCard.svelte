<script lang="ts">
	let { data } = $props();
	let id = data.id;
</script>

<div class="card" style:flex-direction={id & 1 ? 'row' : 'row-reverse'}>
	<div class="description">
		<h3>{data.title}</h3>
		<p>
			{data.description}
		</p>
		<div class="tags">
			{#each data.tags as tag}
				<button type="button">{tag}</button>
			{/each}
		</div>
        <div class="actions">
            <button type="button">
                <a href={data.urls[0]} target="_blank" rel="noopener noreferrer">Live</a>
             </button>
             <button type="button">
                <a href={data.urls[1]} target="_blank" rel="noopener noreferrer">GitHub</a>
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
		h3 {
			padding: 0 0.4rem;
		}

		p {
			font-weight: 300;
			color: var(--font-color);
			padding: 0 0.8rem;
		}

		.tags {
			display: flex;
			justify-content: center;
			column-gap: 0.3rem;
			padding: 0.2rem 0;
		}
	}
</style>
