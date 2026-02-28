<script lang="ts">
</script>

<section>
	<div class="header">
		<h1>About Me</h1>
	</div>
	<hr />
	<div class="body">
		<p>
			I am a dedicated and detail-oriented Computer Engineering student with a strong academic
			standing in First Class. Skilled in web development, programming languages, database
			management, and hardware design. Experienced in backend development and circuit design.
			Possess excellent problem-solving, teamwork, and communication skills.
		</p>
	</div>
</section>

<style>
	section {
		max-width: 1088px;
		user-select: contain;
	}

	@keyframes heading-underline {
		0%,
		30% {
			width: 0;
		}
		45%,
		80% {
			width: 100%;
		}
		95% {
			width: 0;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		section h1::after {
			animation: heading-underline ease-out both;
			animation-timeline: view();
		}
	}
</style>
