<script lang="ts">
	import { page } from '$app/state';
</script>

<section>
	<p class="status-code">{page.status}</p>
	<p class="error-message">Oops, {page.error?.message}</p>
	<a href="/" aria-current={page.url.pathname === '/'}>Home</a>
</section>

<style>
	section {
		height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.status-code {
		font-size: 8rem;
		color: var(--primary);
	}
	.error-message {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	a {
		font-size: 2rem;
		text-decoration: none;
		text-decoration: underline wavy;
		color: var(--font-color);
	}
</style>
