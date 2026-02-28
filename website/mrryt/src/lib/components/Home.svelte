<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import mapMarker from 'svelte-awesome/icons/mapMarker';
	import download from 'svelte-awesome/icons/download';
	import linkedin from 'svelte-awesome/icons/linkedin';
	import github from 'svelte-awesome/icons/github';
</script>

<section>
	<div class="profile">
		<img src="src/lib/assets/user.jpg" alt="user" />
	</div>
	<div class="info">
		<div class="info-wrapper">
			<h1>Flavio Nana Badu Sobbin</h1>
			<p>Full Stack Web Developer</p>
			<div class="location">
				<Icon data={mapMarker} scale={0.8} color="var(--font-color)" />
				<p>Ghana</p>
			</div>
			<div class="links">
				<button type="button">
					<p>Resume</p>
					<Icon data={download} scale={1.5}/>
					<div class="tooltip">View Resume</div>
				</button>
				<ul class="socials">
					<li>
						<a href="http://#">
							<Icon data={github} scale={1.5} label="GitHub" color="var(--font-color)" />
						</a>
						<div class="tooltip">GitHub</div>
					</li>
					<li>
						<a href="http://#">
							<Icon data={linkedin} scale={1.5} label="LinkedIn" color="var(--font-color)" />
						</a>
						<div class="tooltip">LinkedIn</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: clamp(1rem, 2vw, 1.5rem);
		padding-block: 0;
		background-color: var(--primary);
		box-shadow: 0 0 7px 4px var(--primary);
		background-image:
			radial-gradient(var(--secondary) 15.2%, transparent 15.2%),
			radial-gradient(var(--secondary) 15.2%, transparent 15.2%),
			radial-gradient(var(--secondary) 15.2%, transparent 15.2%);
		background-position:
			0px 0px,
			4px 4px;
		background-size: 8px 8px;
		animation: bg-animation 1s linear infinite alternate-reverse;

		.profile {
			width: clamp(7rem, 38vw, 11.5rem);
			aspect-ratio: 1;
			display: flex;
			align-items: center;
			user-select: none;

			img {
				width: inherit;
				border: solid 2px var(--tertiary);
				box-shadow: 0 0 3px 2px var(--secondary);
				border-radius: 50%;
			}
		}

		.info {
			display: grid;
			grid-template: 1fr / 0fr;
			animation: wipe 800ms ease-out forwards;

			.info-wrapper {
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}

			h1 {
				font-size: clamp(1.8rem, 4.7vw, 4.5rem);
				line-height: clamp(1.7rem, 4.6vw, 4.25rem);
				text-wrap: nowrap;
			}
			p {
				font-size: clamp(0.8rem, 1.7vw, 1.5rem);
				font-weight: 500;
				color: var(--font-color);
				text-wrap: nowrap;
			}
			.location {
				display: inline-flex;
				column-gap: 0.2rem;
				align-items: center;

				p {
					font-size: clamp(0.75rem, 1.4vw, 1.2rem);
					font-weight: 500;
					color: var(--font-color);
				}
			}
			.links {
				display: inline-flex;
				margin-top: 4px;
				column-gap: 0.6rem;

				button {
					display: flex;
					align-items: center;
					justify-content: space-between;
					column-gap: 0.2rem;
					padding: 0.2 0.04rem;
					font-weight: bold;
					user-select: none;
					background-color: #f90000a0;
					border: solid 2px transparent;
					border-bottom: solid 2px var(--font-color);
					position: relative;
					transition: all 400ms ease-out;
				}

				button:hover {
					cursor: pointer;
					border: solid 2px;

					.tooltip {
						visibility: visible;
						opacity: 1;
					}
				}

				ul {
					display: inline-flex;
					padding: 0;
					column-gap: 0.5rem;

					li {
						list-style: none;
						align-content: center;
						position: relative;

						a {
							display: flex;
							width: clamp(1.2rem, 3vw, 1.8rem);
							transition: all 400ms ease-out;
						}

						a:hover {
							scale: 1.2;

							+ .tooltip {
								visibility: visible;
								opacity: 1;
							}
						}
					}
				}

				.tooltip {
					position: absolute;
					top: 100%;
					left: 50%;
					transform: translate(-50%, 20%);
					width: max-content;
					padding: 0.4rem 0.5rem;
					font-size: 0.8rem;
					z-index: 1;
					background-color: var(--bg);
					color: var(--font-color);
					border: solid 1px var(--primary);
					visibility: hidden;
					opacity: 0;
					transition: all 400ms ease-out;
				}
			}
		}
		::selection {
			background-color: var(--tertiary);
			text-decoration: underline 1px;
		}
	}

	@keyframes wipe {
		from {
			grid-template-columns: 0fr;
		}
		to {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 450px) {
		section {
			flex-direction: column;
			row-gap: 0.5rem;

			.info {
				grid-template: 0 / 1fr;
				animation: wipe 1.2s ease-out forwards;

				.info-wrapper {
					flex-direction: column;
					row-gap: 0.1rem;
					align-items: center;
					overflow: hidden;

					h1 {
						text-wrap: stable;
					}
				}
			}
		}

		@keyframes wipe {
			from {
				grid-template-rows: 0fr;
			}
			to {
				grid-template-rows: 1fr;
			}
		}
	}
</style>
