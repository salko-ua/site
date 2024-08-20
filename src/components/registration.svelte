<script>
  	// let language = "Ukraine";
	import { _ } from 'svelte-i18n'
</script>


<div class="registration">
	<div class="registration-left-side">
		<div class="greeting-mobile">
			{$_('registration')}
		</div>
	</div>
	<div class="registration-right-side">
		<div class="contents">
			<div class="form-registration">
				<div class="greeting-pc">
					{$_('registration')}
				</div>
				<div class="input-containers-block">
					<div class="input-container ic1">
						<input id="firstname" class="input" type="text" placeholder=" " />
						<div class="cut"></div>
						<label for="firstname" class="placeholder">First name</label>
					</div>
					<div class="input-container ic1">
						<input id="lastname" class="input" type="text" placeholder=" " />
						<div class="cut"></div>
						<label for="lastname" class="placeholder">Last name</label>
					</div>
				</div>

				<div class="input-container ic2">
					<input id="email" class="input" type="text" placeholder=" " />
					<div class="cut cut-short"></div>
					<label for="email" class="placeholder">Email</label>
				</div>
				<button type="button" class="submit">submit</button>
			</div>
		</div>
	</div>
</div>

<style>
	@font-face {
    	font-family: 'e-Ukraine-medium'; /*a name to be used later*/
    	src: url('/font/e-Ukraine/e-Ukraine-Medium.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-bold'; /*a name to be used later*/
    	src: url('/font/e-Ukraine/e-Ukraine-Bold.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-light'; /*a name to be used later*/
    	src: url('/font/e-Ukraine/e-Ukraine-Light.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-regular'; /*a name to be used later*/
    	src: url('/font/e-Ukraine/e-Ukraine-Regular.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-thin'; /*a name to be used later*/
    	src: url('/font/e-Ukraine/e-Ukraine-Thin.otf');
	}
	@font-face {
    	font-family: 'e-Ukraine-ultralight'; /*a name to be used later*/
    	src: url('/font/e-Ukraine/e-Ukraine-UltraLight.otf');
	}
    /* General styles */
    .registration {
		background-color: #1e1e2e;
		position: absolute;
      	width: 100%;
        height: 100%;
    }


	/* Animation */
	.input:focus ~ .cut,
	.input:not(:placeholder-shown) ~ .cut {
	  	transform: translateY(8px);
	}
	.input:focus ~ .placeholder,
	.input:not(:placeholder-shown) ~ .placeholder {
	  	transform: translateY(-30px) translateX(10px) scale(0.75);
	}
	.input:not(:placeholder-shown) ~ .placeholder {
	  	color: #808097;
	}
	.input:focus ~ .placeholder {
	  	color: #dc2f55;
	}
	.submit:active {
		background-color: #06b;
	}
	/* ----- */


	.placeholder {
		color: #65657b;
		font-family: sans-serif;
		left: 20px;
		line-height: 14px;
		pointer-events: none;
		position: absolute;
		transform-origin: 0 50%;
		transition: transform 200ms, color 200ms;
		top: 20px;
	}
	.input-container {
		height: 50px;
		position: relative;
		width: 50%;
	}

	.ic1 {
		margin-top: 40px;
	}

	.ic2 {
		margin-top: 30px;
	}

	.input {
		background-color: #303245;
		border-radius: 12px;
		border: 0;
		box-sizing: border-box;
		color: #eee;
		font-size: 18px;
		height: 100%;
		outline: 0;
		padding: 4px 20px 0;
		width: 100%;
	}

	.cut {
	  background-color: #181825;
	  border-radius: 10px;
	  height: 20px;
	  left: 20px;
	  position: absolute;
	  top: -20px;
	  transform: translateY(0);
	  transition: transform 200ms;
	  width: 76px;
	}

	.cut-short {
	  width: 50px;
	}


    /* from 636 to 636+ */
    @media screen and (min-width: 636px) {
		.registration-left-side {
			float: left;
			width: 25%;
			height: 80%;
			margin-left: 10%;
			margin-top: 5%;
			background-color: #11111b;
			background-image: url("/logo/login-left-side.PNG");
			background-repeat: round;
			border-radius: 30px 0 0 30px;
		}
		.registration-right-side {
			float: left;
			width: 55%;
			height: 80%;
			margin-right: 10%;
			margin-top: 5%;
			background-color: #181825;
			border-radius: 0 30px 30px 0;
		}
		.contents {
			align-content: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}
		.form-registration {
			width: 50%;
			height: auto;
			margin: 0 auto;
			padding: 10px;
			position: relative;
			visibility: hidden;
		}
		.form-registration {
			width: 50%;
			height: auto;
			margin: 0 auto;
			padding: 10px;
			position: relative;
		}
		.greeting-pc {
			color: #cdd6f4;
			font-size: 22px;
			font-family: 'e-Ukraine-regular', monospace;
			margin: 0;
			visibility: visible;
		}
		.greeting-mobile {
			visibility: hidden;
		}
		.input-container {
			height: 50px;
		  	position: relative;
		  	width: auto;
			float: left;
		}
		.input-containers-block {
			width: 100%;
		}
		.submit {
			background-color: #08d;
			border-radius: 12px;
			border: 0;
			box-sizing: border-box;
			color: #eee;
			cursor: pointer;
			font-size: 18px;
			height: 50px;
			margin-top: 38px;
			outline: 0;
			text-align: center;
			width: 100%;
		}
    }
    /* from 636 to 636-  */
    @media screen and (max-width: 636px) {
		.registration-left-side {
			width: 90%;
			height: 10%;
			margin-left: 5%;
			margin-top: 10%;
			background-color: #11111b;
			text-align: center;
			align-content: center;
			border-radius: 20px 20px 0 0;
		}
		.registration-right-side {
			width: 90%;
			height: 80%;
			margin-left: 5%;
			background-color: #181825;
			border-radius: 0 0 20px 20px;
		}
		.contents {
            height: 100%;
            width: 100%;
			text-align: center;
			justify-content: center;
		}
		.greeting-mobile {
			color: #cdd6f4;
			font-size: 16px;
			font-family: 'e-Ukraine-regular', monospace;
			margin: 0;
		}
		.greeting-pc {
			height: 0;
			visibility: hidden;
		}
		.input-container {
			height: 50px;
		  	position: relative;
		  	width: 90%;
			margin-left: auto;
			margin-right: auto;
		}
		.submit {
			background-color: #08d;
			border-radius: 12px;
			border: 0;
			box-sizing: border-box;
			color: #eee;
			cursor: pointer;
			font-size: 18px;
			height: 50px;
			margin-top: 38px;
			outline: 0;
			text-align: center;
			width: 90%;
		}
    }
</style>
