<script lang="ts">
	import { technologies } from '$lib/data/techStack';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import chevronLeft from 'svelte-awesome/icons/chevronLeft';

	const web = ['HTML', 'CSS', 'JS', 'jQuery'];
	const webTech = technologies.filter((tech) => web.includes(tech.name));

	const webapp = ['NodeJs', 'Express', 'TS', 'Svelte', 'Angular'];
	const webappTech = technologies.filter((tech) => webapp.includes(tech.name));

	const programming = ['Python', 'C', 'C++'];
	const programmingTech = technologies.filter((tech) => programming.includes(tech.name));

	const scripting = ['Bash', 'Powershell'];
	const scriptingTech = technologies.filter((tech) => scripting.includes(tech.name));

	const database = ['PostgreSQL', 'MongoDB'];
	const databaseTech = technologies.filter((tech) => database.includes(tech.name));
</script>

<svelte:head>
	<title>Tech Stack | MrRyt.dev</title>
	<meta
		name="description"
		content="Technologies Flavio Sobbin works with — web, backend, programming languages, scripting, and databases."
	/>
</svelte:head>

<section>
	<div class="header">
		<a class="back" href="/" aria-label="Back to home">
			<Icon data={chevronLeft} scale={1.75} />
		</a>
		<h1>Technology Stack</h1>
	</div>
	<div class="content">
		<article>
			<p>These are tools I have come across in my development journey:</p>
			<div class="stack">
				{#each technologies as tech}
					<div class="card">
						<svelte:component this={tech.icon} style="font-size:2.5rem" />
						<div class="info">
							<p>{tech.name}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<article>
			<h3>Preferred tools in:</h3>
			<p>Web Technology Stack</p>
			<div class="stack">
				{#each webTech as tech}
					<div class="card">
						<svelte:component this={tech.icon} style="font-size: 2.5rem" />
						<div class="info">
							<p>{tech.name}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<article>
			<p>Webapp Technology Stack</p>
			<div class="stack">
				{#each webappTech as tech}
					<div class="card">
						<svelte:component this={tech.icon} style="font-size: 2.5rem" />
						<div class="info">
							<p>{tech.name}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<article>
			<p>Programming Technology Stack</p>
			<div class="stack">
				{#each programmingTech as tech}
					<div class="card">
						<svelte:component this={tech.icon} style="font-size: 2.5rem" />
						<div class="info">
							<p>{tech.name}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<article>
			<p>Shell Scripting Technology Stack</p>
			<div class="stack">
				{#each scriptingTech as tech}
					<div class="card">
						<svelte:component this={tech.icon} style="font-size: 2.5rem" />
						<div class="info">
							<p>{tech.name}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>

		<article>
			<p>Database Technology Stack</p>
			<div class="stack">
				{#each databaseTech as tech}
					<div class="card">
						<svelte:component this={tech.icon} style="font-size: 2.5rem" />
						<div class="info">
							<p>{tech.name}</p>
						</div>
					</div>
				{/each}
			</div>
		</article>
	</div>
</section>

<style>
	section {
		padding-top: 1rem;

		& > * {
			margin-bottom: 1rem;
		}

		.header {
			align-items: center;
			justify-content: flex-start;
			gap: 1rem;

			.back {
				display: flex;
				color: var(--font-color);
				transition: transform 200ms ease-out;

				&:hover {
					transform: translateX(-4px);
				}
			}
		}

		h1 {
			text-decoration: underline;

			&::after {
				position: unset;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			row-gap: 2rem;
			background-color: var(--bg);
			margin-top: 0.5rem;

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
					padding: 0.2rem;
					column-gap: 0.2rem;
					position: relative;
					user-select: none;
					cursor: pointer;
					transition: all 200ms ease-out;
					background-color: var(--bg);

					&:hover {
						border: solid 1px transparent;
					}

					.info {
						p {
							font-size: 12px;
							font-weight: 700;
							line-height: 10px;
						}
					}
				}
			}
		}
	}
</style>
