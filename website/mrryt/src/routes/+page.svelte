<script>
	import Nav from '$lib/components/Nav.svelte';
	import Home from '$lib/components/Home.svelte';
	import About from '$lib/components/About.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Project from '$lib/components/Project.svelte';
	import Contact from '$lib/components/Contact.svelte';

	let scrollProgress = $state(0);
	let navVisible = $state(false);
	let isMobile = $state(false);

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'tech-stack', label: 'Tech Stack' },
		{ id: 'projects', label: 'Projects' }
	];

	function getScreenSize() {
		const screenWidth = window.innerWidth;
		isMobile = screenWidth <= 450;
	}

	function onScroll() {
		const maxScroll = document.body.scrollHeight - window.innerHeight;
		scrollProgress = (window.scrollY / maxScroll) * 100;

		const homeElement = document.getElementById('home');
		if (homeElement) {
			const homeHeight = homeElement.offsetHeight;
			const displayPoint = homeHeight * 0.75;
			navVisible = window.scrollY > displayPoint;
		}
	}

	$effect(() => {
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', getScreenSize);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', getScreenSize);
		};
	});
</script>

<Nav {navItems} {scrollProgress} visible={navVisible} />
<Home />
<About />
<TechStack />
<Project {isMobile} />
<Contact />
