<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page.status} {page.error?.message}</h1>
<p>User cannot be found</p>
<a href="/" aria-current={page.url.pathname === '/'}>Go Home</a>
