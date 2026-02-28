<script lang="ts">
	import VscodeIconsFileTypeHtml from '~icons/vscode-icons/file-type-html';
	import VscodeIconsFileTypeCss from '~icons/vscode-icons/file-type-css';
    import VscodeIconsFileTypeJsOfficial from '~icons/vscode-icons/file-type-js-official'
	import VscodeIconsFileTypeNode from '~icons/vscode-icons/file-type-node';
    import VscodeIconsFileTypeAngular from '~icons/vscode-icons/file-type-angular';
	import VscodeIconsFileTypeTypescriptOfficial from '~icons/vscode-icons/file-type-typescript-official';
    import VscodeIconsFileTypeSvelte from '~icons/vscode-icons/file-type-svelte';
    import DeviconJquery from '~icons/devicon/jquery';
</script>

<section>
	<div class="header">
		<h1>Technology Stack</h1>
	</div>
	<hr />
	<div class="body">
		<div class="stack">
			<div class="card">
				<VscodeIconsFileTypeHtml style="font-size:2.5rem" />
				<div class="info">
					<p>HTML</p>
				</div>
			</div>
			<div class="card">
				<VscodeIconsFileTypeCss style="font-size:2.5rem" />
				<div class="info">
					<p>CSS</p>
				</div>
			</div>
			<div class="card">
                <VscodeIconsFileTypeJsOfficial style="font-size:2.5rem" />
				<div class="info">
					<p>JS</p>
				</div>
			</div>
			<div class="card">
				<VscodeIconsFileTypeNode style="font-size:2.5rem" />
				<div class="info">
					<p>NodeJs</p>
				</div>
			</div>
			<div class="card">
				<VscodeIconsFileTypeAngular style="font-size:2.5rem" />
				<div class="info">
					<p>Angular</p>
				</div>
			</div>
			<div class="card">
				<VscodeIconsFileTypeTypescriptOfficial style="font-size:2.5rem" />
				<div class="info">
					<p>TS</p>
				</div>
			</div>
            <div class="card">
            	<VscodeIconsFileTypeSvelte style="font-size:2.5rem" />
				<div class="info">
					<p>Svelte</p>
				</div>
			</div>
            <div class="card">
            	<DeviconJquery style="font-size:2.5rem" />
				<div class="info">
					<p>jQuery</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		max-width: 1088px;

		.header {
			button {
				width: 3.8rem;

				img {
					rotate: 270deg;
				}
			}
		}

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

			.card:hover::before {
				content: '';
				height: calc(3.8rem + 5px);
				position: absolute;
				inset: -2.5px;
				z-index: -1;

				background: conic-gradient(
					from var(--gradient-angle),
					transparent -15deg 45deg,
					var(--primary),
					var(--font-color),
					var(--primary),
					transparent 165deg 215deg,
					var(--primary),
					var(--font-color),
					var(--primary),
					transparent
				);
				filter: blur(2px);
				animation: border-rotate 6s linear infinite;
			}

			.card:hover {
				border: solid 1px transparent;
			}
		}
	}
</style>
