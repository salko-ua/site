<script>
	import { _ } from 'svelte-i18n'

	function openNav() {
		let x = document.getElementById("myNav")
		if (x !== null) {
			if (window.innerWidth > 861) {
				x.style.width = "30%";
			} else if (window.innerWidth < 861){
				x.style.width = "100%";
			}
		}
	}

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
			<a href="/auth.svelte" on:click={closeNav}>Головна</a>
			<a href="/auth.svelte" on:click={closeNav}>Про мене</a>
			<a href="/login" on:click={closeNav}>{$_('login.login')}</a>
			<a href="/registration" on:click={closeNav}>{$_('registration.registration')}</a>
		</div>

</div>

<button on:click={openNav} class="open_button"><img src="/src/assets/logo/menu.svg" alt="Menu"></button>

<style>
	.overlay {
		font-family: "e-Ukraine-regular", monospace;
		height: 100%;
		width: 0;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		background-color: rgb(24, 24, 37);
		background-color: rgba(24,24,37, 0.9);
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
		font-size: 24px;
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
		background-color: transparent;
		border: none;
		color: white;
	}

	.close_button:active {
		color: #cecece;
	}

	.open_button {
		border: transparent 0;
		font-size: 36px;
		padding: 5px 20px 5px 20px;
		border-radius: 20px;
		background-color: rgba(17, 17, 27, 0.31);
		color: #cdd6f4;
	}
	.open_button:active {
		font-size: 37px;
		background-color: rgba(30, 30, 46, 0.33);
	}
	img {
		height: 28px;
		width: 50px;
		border-radius: 5px;
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
