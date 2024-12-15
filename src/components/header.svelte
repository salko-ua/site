<script>

	import menu_img from '$lib/assets/logo/menu.svg';


	function openNav() {
		let header = document.getElementById("myNav");
		if (header !== null) {
			header.style.width = "100%";
		}
	}

	function closeNav() {
		let header = document.getElementById("myNav");
		if (header !== null) {
			header.style.width = "0%";
		}
	}
</script>


{#if false}
	<div id="myNav" class="overlay">
		<div class="top_panel">
			<button class="close_button" on:click={closeNav}>&times;</button>
		</div>
		<div class="overlay-content" id="links">
			<a href="/" on:click={closeNav}>Головна</a>
			<a href="/about_me" on:click={closeNav}>Про мене</a>
			<a href="/utilities" on:click={closeNav}>Утиліти</a>
			<a href="/exit" on:click={closeNav}>Вийти</a>
		</div>
	</div>
	<button on:click={openNav} class="open_button"><img src={menu_img} alt="Menu"/></button>
{:else}
	<div class="header">

	</div>
{/if}




<style>



    /* from 861 to 861+ */
    @media screen and (min-width: 861px) {
		.header {
			position: fixed;

		}
    }
    /* from 861 to 861-  */
    @media screen and (max-width: 861px) {
		.overlay {
			font-family: "e-Ukraine-regular", monospace;
			height: 100%;
			width: 0;
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			background-color: rgb(24, 24, 37);
			background-color: rgba(24,24,37, 0.6);
			overflow-x: hidden;
			transition: 0.5s;
			backdrop-filter: blur(20px);
		}

		.overlay-content {
			width: 100%;
			float: left;
			text-align: left;
			position: relative;
			top: 20px;
			margin-left: 20px;
			margin-right: 20px;
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
			background-color: rgba(17, 17, 27, 0.41);
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

		.top_panel {
			width: 100%;
			height: 50px;
			float: left;
			align-content: center;
			margin-top: 40px;
		}

		.close_button {
			float: right;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 50px;
			width: 50px;
			font-size: 48px;
			background-color: transparent;
			border: none;
			color: #818181;
			padding: 0;
			margin-right: 30px;

		}
		.close_button:active {
			color: #f1f1f1;
		}
		.close_button:hover, .close_button:focus {
			color: rgba(241, 241, 241, 0.65);
		}
    }
</style>
