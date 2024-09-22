<script>
	import { _, isLoading } from 'svelte-i18n';
	import { locale } from 'svelte-i18n';
</script>

<div class="language">
	<button on:click={() => locale.update((lang) => lang === "en"?"ua": "en") }>
		{#if $locale === "en"}
				<img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="en">
		{:else}
				<img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" alt="ua">
		{/if}
	</button>
</div>

<style>
	img {
		height: 28px;
		width: 50px;
		border-radius: 5px;
	}
	button {
		border: transparent 0;
		font-size: 36px;
		padding: 5px 20px 5px 20px;
		border-radius: 20px;
		background-color: rgba(17, 17, 27, 0.31);
		color: #cdd6f4;
	}
	button:active {
		font-size: 37px;
		background-color: rgba(30, 30, 46, 0.33);
	}
</style>