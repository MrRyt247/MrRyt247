<script lang="ts">
	import TechCard from './TechCard.svelte';
	import { technologies } from '../data/techStack.ts';
</script>

<section id="tech-stack">
	<div class="header">
		<h1>Technology Stack</h1>
	</div>
	<div class="content">
		<TechCard techs={technologies.slice(0, 11)} />
	</div>
	<button type="button">
		<a href="/tech-stack">View More</a>
	</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;

		button {
			width: fit-content;
			align-self: center;
			margin: 0.5rem;
		}
	}
</style>
