<script>
		import Header from '../components/header.svelte';
		import { isLoading, locale } from 'svelte-i18n';
		import * as _ from "$lib";
		import Language from '../components/switch-language.svelte';
		locale.set('ua')
		locale.subscribe(() => console.log('locale change'))
</script>



<body>

		{#if $isLoading}
				Please wait...
		{:else}
		<slot/>
		<div class="language">
			<Language/>
		</div>
		<div class="header">
			<Header/>
		</div>
		{/if}
</body>


<style>
	.language {
        position: fixed;
        bottom: 2%;
        left: 120px;
        z-index: 4;
    }
    .header {
        position: fixed;
        bottom: 2%;
        left: 20px;
        z-index: 4;
    }

	@font-face {
    	font-family: 'e-Ukraine-medium'; /*a name to be used later*/
    	src: url('/src/lib/assets/font/e-Ukraine/e-Ukraine-Medium.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-bold'; /*a name to be used later*/
    	src: url('/src/lib/assets/font/e-Ukraine/e-Ukraine-Bold.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-light'; /*a name to be used later*/
    	src: url('/src/lib/assets/font/e-Ukraine/e-Ukraine-Light.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-regular'; /*a name to be used later*/
    	src: url('/src/lib/assets/font/e-Ukraine/e-Ukraine-Regular.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-thin'; /*a name to be used later*/
    	src: url('/src/lib/assets/font/e-Ukraine/e-Ukraine-Thin.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-ultralight'; /*a name to be used later*/
    	src: url('/src/lib/assets/font/e-Ukraine/e-Ukraine-UltraLight.otf');
	}
    :global(body){
        background-color: #1e1e2e;
        margin: 0;
        padding: 0;
    }
</style>
