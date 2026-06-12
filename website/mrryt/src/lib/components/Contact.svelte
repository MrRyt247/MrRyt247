<script lang="ts">
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import copy from 'svelte-awesome/icons/copy';
	import check from 'svelte-awesome/icons/check';
	import envelope from 'svelte-awesome/icons/envelope';

	const email = 'flaviosobbin04@gmail.com';
	let copied = $state(false);
	let copyTimeout: ReturnType<typeof setTimeout>;

	function copyEmail() {
		navigator.clipboard.writeText(email);
		copied = true;

		clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div class="wrapper">
	<section>
		<div class="header">
			<h1>Contact</h1>
		</div>
		<div class="content">
			<p>
				Have a project in mind or just want to chat? Feel free to reach out! I'll get back to you <u
					>as soon as possible</u
				>!
			</p>
			<div class="contact-actions">
				<a href="mailto:{email}" class="email-btn" aria-label="Send email">
					<Icon data={envelope} scale={1.25} />
					<span>Send Message</span>
				</a>
				<p>- or -</p>
				<button
					type="button"
					class="email-btn"
					onclick={copyEmail}
					aria-label="Copy email to clipboard"
				>
					<span>{email}</span>
					<Icon data={copied ? check : copy} scale={1.25} class="copy-icon" />
					<div class="tooltip">{copied ? 'Copied!' : 'Copy email'}</div>
				</button>
			</div>
		</div>
	</section>
</div>

<style>
	.wrapper {
		background-color: #151515;
		color: #ccc;
	}

	section {
		h1 {
			color: #ccc;
			text-decoration: underline 0.25rem;
		}

		.content {
			p {
				margin-bottom: 0.5rem;
				font-size: 1.25rem;
			}

			u {
				text-decoration: underline wavy var(--primary);
			}

			.contact-actions {
				display: flex;
				flex-direction: column;
				align-items: center;

				.email-btn {
					position: relative;
					width: fit-content;
					display: flex;
					align-items: center;
					column-gap: 0.75rem;
					padding: 0.25rem 0.625rem;
					color: #ccc;
					background-color: transparent;
					border: solid 2px transparent;
					border-bottom: solid 2px #ccc;
					font-size: 1.25rem;
					font-weight: bold;
					text-decoration: none;
					transition: all 300ms ease-out;
					overflow: visible;

					span {
						user-select: none;
					}

					&:hover {
						border-color: var(--primary);
						background-color: var(--primary);
						color: var(--bg);

						span {
							color: var(--bg);
						}

						.tooltip {
							visibility: visible;
							opacity: 1;
						}
					}
				}

				p {
					margin-bottom: unset;
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
			transition: all 500ms ease-in-out;
		}
	}

	@media screen and (max-width: 450px) {
		section {
			padding-block: 2rem;
		}
	}
</style>
