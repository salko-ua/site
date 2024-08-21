<script>
	import { _, isLoading } from 'svelte-i18n';
	import { locale } from 'svelte-i18n';
</script>

<div class="language">
	<button on:click={() => locale.update((lang) => lang === "en"?"ua": "en") }>
		{#if $locale === "en"}
			🇺🇸
		{:else}
			🇺🇦
		{/if}
	</button>
</div>

<style>

	button {
		border: transparent 0;
		font-size: 36px;
		padding: 5px 20px 5px 20px;
		border-radius: 20px;
		background-color: rgba(17, 17, 27, 0.31);
	}
	button:active {
		font-size: 37px;
		background-color: rgba(30, 30, 46, 0.33);

	}

	.language {
		position: fixed;
		bottom: 2%;
    	left: 2%;
		z-index: 4;

	}
</style>