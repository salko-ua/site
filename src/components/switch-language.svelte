<script>
    import { _ } from 'svelte-i18n'
	import { locale } from 'svelte-i18n';


	function changeLocalToUa() {
		locale.set('ua')
	}

	function changeLocalToEn() {
		locale.set('en')
	}

</script>