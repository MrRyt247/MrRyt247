<script>
	import Nav from '$lib/components/Nav.svelte';
	import Home from '$lib/components/Home.svelte';
	import About from '$lib/components/About.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Project from '$lib/components/Project.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let scrollProgress = $state(0);

	function onScroll() {
		const maxScroll = document.body.scrollHeight - window.innerHeight;
		scrollProgress = (window.scrollY / maxScroll) * 100;
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<Nav {scrollProgress}/>
<Home />
<About />
<TechStack />
<Project />
<Contact />
<Footer />
