<script>
	import Header from '../components/header.svelte';
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
		<slot/>
    {/if}
</body>

