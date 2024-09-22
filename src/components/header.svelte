<script>
	import Language from './switch-language.svelte';
	/* Open when someone clicks on the span element */
	function openNav() {
		let x = document.getElementById("myNav")
		if (x !== null) {
			x.style.width = "100%";
		}
	}

	/* Close when someone clicks on the "x" symbol inside the overlay */
	function closeNav() {
			let x = document.getElementById("myNav")
		if (x !== null) {
			x.style.width = "0%";
		}
	}
</script>


<div id="myNav" class="overlay">
		<button class="close_button" on:click={closeNav}>&times;</button>
		<div class="overlay-content">
			<a href="/auth.svelte">About</a>
			<a href="/auth.svelte">Services</a>
			<a href="/auth.svelte">Clients</a>
			<a href="/auth.svelte">Contact</a>
		</div>

</div>

<button on:click={openNav}>open</button>


<style>
	.overlay {
		height: 100%;
		width: 0;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		background-color: rgb(0,0,0);
		background-color: rgba(0,0,0, 0.4);
		overflow-x: hidden;
		transition: 0.5s;
	}

	.overlay-content {
		position: relative;
		top: 25%;
		width: 100%;
		text-align: center;
		margin-top: 30px;
	}

	.overlay a {
		padding: 8px;
		text-decoration: none;
		font-size: 36px;
		color: #818181;
		display: block;
		transition: 0.3s;
	}

	.overlay a:hover, .overlay a:focus {
		color: #f1f1f1;
	}

	.overlay .close_button {
		position: absolute;
		top: 20px;
		right: 45px;
		font-size: 60px;
	}

	@media screen and (max-height: 450px) {
		.overlay a {font-size: 20px}
		.overlay .close_button {
			font-size: 40px;
			top: 15px;
			right: 35px;
		}
	}

    /* from 861 to 861+ */
    @media screen and (min-width: 861px) {
    }
    /* from 861 to 861-  */
    @media screen and (max-width: 861px) {
    }
</style>
