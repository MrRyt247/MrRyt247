<script>
	import Nav from '$lib/components/Nav.svelte';
	import Home from '$lib/components/Home.svelte';
	import About from '$lib/components/About.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Project from '$lib/components/Project.svelte';
	import Contact from '$lib/components/Contact.svelte';

	let activeIndex = $state(0);
	let navVisible = $state(false);

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'tech-stack', label: 'Tech Stack' },
		{ id: 'projects', label: 'Projects' }
	];

	function onScroll() {
		const homeElement = document.getElementById('home');
		if (homeElement) {
			navVisible = window.scrollY > homeElement.offsetHeight * 0.75;
		}

		const threshold = window.innerHeight * 0.15;
		let newIndex = 0;
		for (let i = navItems.length - 1; i >= 0; i--) {
			const el = document.getElementById(navItems[i].id);
			if (el && el.offsetTop <= window.scrollY + threshold) {
				newIndex = i;
				break;
			}
		}
		activeIndex = newIndex;
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<svelte:head>
	<title>MrRyt.dev</title>
	<meta
		name="description"
		content="Portfolio of Flavio Sobbin, a full stack web developer from Ghana building web apps and backend APIs with Svelte, Angular, Node.js, and more."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Flavio Sobbin — Full Stack Web Developer" />
	<meta
		property="og:description"
		content="Portfolio of Flavio Sobbin, a full stack web developer from Ghana building web apps and backend APIs with Svelte, Angular, Node.js, and more."
	/>
	<meta property="og:url" content="https://mrryt-dev.vercel.app/" />
	<meta property="og:image" content="https://mrryt-dev.vercel.app/dev.webp" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Nav {navItems} {activeIndex} visible={navVisible} />
<Home />
<About />
<TechStack />
<Project />
<Contact />
