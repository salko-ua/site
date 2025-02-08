<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="m-0 min-h-screen w-full">
	<div class="grid h-fit grid-rows-[auto_1fr_auto]">
		<Header />
		<main class="h-fit min-h-screen space-y-4 p-4 pl-40 pr-40 pt-20">
			{@render children?.()}
		</main>
	</div>
</div>
