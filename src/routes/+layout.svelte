<script>
	import Header from '../components/header.svelte';
	import Language from '../components/switch-language.svelte';
    import { isLoading, locale } from 'svelte-i18n';
    import * as _ from "$lib";
    locale.set('ua')
    locale.subscribe(() => console.log('locale change'))
</script>



<body>
	<Header/>
	{#if $isLoading}
        Please wait...
    {:else}
		<Language/>
		<slot/>

    {/if}
</body>


<style>
    :global(body){
        background-color: #1e1e2e;
        margin: 0;
        padding: 0;
    }
</style>
