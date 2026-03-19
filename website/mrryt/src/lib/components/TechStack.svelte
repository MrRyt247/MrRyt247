<script lang="ts">
	import { technologies } from '../data/techStack.ts';
</script>

<section id="tech-stack">
	<div class="header">
		<h1>Technology Stack</h1>
	</div>
	<div class="body">
		<div class="stack">
			{#each technologies as tech (tech)}
				<div class="card">
					<svelte:component this={tech.icon} style="font-size:2.5rem" />
					<div class="info">
						<p>{tech.name}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;

		.stack {
			display: flex;
			flex-wrap: wrap;
			padding: 0.5rem 0;
			gap: 0.5rem;
			margin-inline: auto;

			.card {
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #dacece;
				height: 3.8rem;
				aspect-ratio: 0.85;
				border: solid 1px var(--font-color);
				padding: 0 0.1rem;
				column-gap: 0.2rem;
				position: relative;
				user-select: none;
				cursor: pointer;
				transition: all 200ms ease-out;
				background-color: var(--bg);

				.info {
					p {
						font-size: 12px;
						font-weight: 700;
						line-height: 10px;
					}
				}
			}

			.card:hover {
				border: solid 1px transparent;
			}
		}
	}
</style>
