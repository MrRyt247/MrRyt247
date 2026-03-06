<script lang="ts">
	import { socials } from '../data/home.ts';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import mapMarker from 'svelte-awesome/icons/mapMarker';
	import fileText from 'svelte-awesome/icons/fileText';
</script>

<header id="home">
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
					<Icon data={fileText} scale={1} />
					<div class="tooltip">View Resume</div>
				</button>
				<ul class="socials">
					{#each socials as social}
						<li>
							<a href={social.url}>
								<Icon
									data={social.icon}
									scale={1.75}
									label={social.label}
									color="var(--font-color)"
								/>
							</a>
							<div class="tooltip">{social.label}</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		height: 100dvh;
		max-width: unset;
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
			animation: expand 800ms ease-out forwards;

			.info-wrapper {
				display: flex;
				flex-direction: column;
				padding-bottom: 2rem;
				overflow: hidden;
			}

			h1 {
				font-size: clamp(1.85rem, 4.7vw, 4.5rem);
				line-height: clamp(1.7rem, 4.6vw, 4.25rem);
				text-wrap: nowrap;
			}
			p {
				font-size: clamp(1.25rem, 1.7vw, 1.5rem);
				font-weight: 500;
				color: var(--font-color);
				text-wrap: nowrap;
			}
			.location {
				display: inline-flex;
				column-gap: 0.2rem;
				align-items: center;

				p {
					font-size: clamp(1rem, 1.4vw, 1.2rem);
					font-weight: 500;
					color: var(--font-color);
				}
			}
			.links {
				display: inline-flex;
				margin-top: 4px;
				column-gap: 0.6rem;

				button {
					position: relative;
					overflow: unset;

					&:hover {
						.tooltip {
							visibility: visible;
							opacity: 1;
						}
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
							justify-content: center;
							transition: all 400ms ease-out;

							&:hover {
								scale: 1.2;

								+ .tooltip {
									visibility: visible;
									opacity: 1;
								}
							}
						}
					}
				}

				.tooltip {
					position: absolute;
					top: 100%;
					left: 50%;
					transform: translate(-50%, 10%);
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

	@keyframes expand {
		from {
			grid-template-columns: 0fr;
		}
		to {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 450px) {
		header {
			flex-direction: column;
			row-gap: 1rem;

			.info {
				grid-template: 0 / 1fr;
				animation: expand 1.2s ease-out forwards;

				.info-wrapper {
					flex-direction: column;
					row-gap: 0.1rem;
					align-items: center;
					overflow: hidden;
					padding-bottom: 2rem;

					h1 {
						text-wrap: stable;
					}
				}
			}
		}

		@keyframes expand {
			from {
				grid-template-rows: 0fr;
			}
			to {
				grid-template-rows: 1fr;
			}
		}
	}
</style>
