<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
</script>

<!-- TODO: mobile support -->
<AppBar
	classes="fixed top-0 z-10 p-2 pl-40 pr-40 border-b-4 border-b-surface-900"
	padding="px-4"
	background="backdrop-blur bg-surface-950"
	leadSpaceX=""
	leadClasses="items-center"
	trailSpaceX=""
	trailClasses="hidden lg:flex min-h-full items-center gap-3"
>
	{#snippet lead()}
		<a href="/" class="type-title preset-tonal-surface-500 btn !text-[#FFFFFF] !type-scale-6"
			>SALKO-UA</a
		>
		<nav class="btn-group flex-col md:flex-row">
			<a
				href="/projects"
				class="type-button preset-tonal-surface-500 btn text-surface-300 !type-scale-4"
			>
				Projects
			</a>
			<a
				href="/about_me"
				class="type-button preset-tonal-surface-500 btn text-surface-300 !type-scale-4">About me</a
			>
			<a
				href="/contact"
				class="type-button preset-tonal-surface-500 btn text-surface-300 !type-scale-4"
				>Contact me</a
			>
		</nav>
	{/snippet}
</AppBar>
