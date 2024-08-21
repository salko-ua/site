<script>
  	// let language = "Ukraine";
	import { _ } from 'svelte-i18n'
	import Checkbox from './checkbox-password.svelte';

</script>


<div class="login">
	<div class="login-left-side">
		<div class="greeting-mobile">
			{$_('login.login-text')}
		</div>
	</div>
	<div class="login-right-side">
		<div class="contents">
			<div class="form-login">
				<div class="greeting-pc">
					{$_('login.login-text')}
				</div>
				<div class="input-container ic2">
					<input id="email" class="input" type="text" placeholder=" " />
					<div class="cut">{$_('login.email')}</div>
					<label for="email" class="placeholder">{$_('login.email')}</label>
				</div>
				<div class="input-container ic2">
					<input id="password" class="input" type="password" placeholder=" " />
					<div class="cut ">{$_('login.password')}</div>
					<label for="password" class="placeholder">{$_('login.password')}</label>
				</div>
				<div class="checkbox-block">
					<div class="checkbox"><Checkbox/></div>
					<div class="checkbox-text">
						{$_('login.checkbox-password')}
					</div>
					<div class="have-account">
						<a href="/registration">{$_('login.have-account')}</a>
					</div>
				</div>
				<button type="button" class="submit">{$_('login.accept')}</button>
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
	* {
		color: #cdd6f4;
		font-family: 'e-Ukraine-regular', monospace;
		font-size: 14px;
	}

	.checkbox-block {
		margin-top: 20px;
		justify-content: center;
	}
	.checkbox {
		margin-left: 20px;
		float: left;
	}
	.checkbox-text {
		margin-left: 10px;
		margin-top: 2px;
		float: left;
	}
	.have-account {
		margin-top: 3px;
		margin-right: 20px;
		float: right;
	}
    /* General styles */
    .login {
		background-color: #1e1e2e;
		position: absolute;
      	width: 100%;
        height: min-content;
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


	.ic2 {
		margin-top: 30px;
		width: 95%;
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
		float: left;
	}

	.cut {
		color: #181825;
        background-color: #181825;
		border-radius: 10px;
		height: 20px;
		font-size: 12px;
		left: 20px;
		padding-left: 10px;
		position: absolute;
		top: -20px;
		transform: translateY(0);
		transition: transform 200ms;
		width: max-content;

	}



    /* from 1400 to 1400+ */
    @media screen and (min-width: 1400px) {
		.login-left-side {
			float: left;
			width: 25%;
			height: 593px;
			margin-left: 10%;
			background-color: #11111b;
			background-image: url("/logo/login-left-side.PNG");
			background-repeat: round;
			border-radius: 30px 0 0 30px;
			margin-top: 5%;
			margin-bottom: 5%;
		}
		.login-right-side {
			float: left;
			width: 55%;
			height: max-content;
			margin-right: 10%;
			background-color: #181825;
			border-radius: 0 30px 30px 0;
			margin-top: 5%;
			margin-bottom: 5%;
		}
		.contents {
			align-content: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}
		.form-login {
			width: 50%;
			height: auto;
			margin: 136px auto;
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
			margin-top: 20px;
			outline: 0;
			text-align: center;
			width: 100%;
		}
    }
	/* from 636 to 1400 */
    @media screen and (max-width: 1400px) and (min-width: 860px) {
		.login {
			justify-content: center;
		}
		.login-left-side {
			float: left;
			width: 0;
			height: 0;
			margin-left: 0;
			margin-top: 0;
			background-color: #11111b;
			/*background-image: url("/logo/login-left-side.PNG");*/
			/*background-repeat: round;*/
			border-radius: 30px 0 0 30px;
			visibility: hidden;
		}
		.login-right-side {
			width: 55%;
			height: max-content;
			margin: 5% auto 5% auto;
			background-color: #181825;
			border-radius: 30px;
		}
		.contents {
			align-content: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}
		.form-login {
			width: 80%;
			height: auto;
			margin: 0 auto;
			padding: 10px;
			position: relative;
		}
		.greeting-pc {
			color: #cdd6f4;
			font-size: 22px;
			font-family: 'e-Ukraine-regular', monospace;
			margin: 20px 0 0 0;
			visibility: visible;
		}
		.greeting-mobile {
			visibility: hidden;
		}
		.input-container {
			height: 50px;
		  	position: relative;
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
			margin-top: 20px;
			margin-bottom: 20px;
			outline: 0;
			text-align: center;
			width: 100%;
		}

    }
    /* from 831 to 831-  */
    @media screen and (max-width: 860px) {
		.login-left-side {
			width: 90%;
			height: 10%;
			margin-left: 5%;
			margin-top: 10%;
			background-color: #11111b;
			text-align: center;
			align-content: center;
			border-radius: 20px 20px 0 0;
		}
		.login-right-side {
			width: 90%;
			height: max-content;
			margin-left: 5%;
			background-color: #181825;
			border-radius: 0 0 20px 20px;
			margin-bottom: 10%;
		}
		.contents {
            height: 100%;
            width: 100%;
			text-align: center;
			justify-content: center;
		}
		.greeting-mobile {
			color: #cdd6f4;
			font-size: 18px;
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
			outline: 0;
			text-align: center;
			width: 90%;
			margin-bottom: 30px;
		}
		.checkbox-block, .checkbox, .checkbox-text {
			visibility: hidden;
			margin: 0;
		}
		.checkbox, .checkbox-text {
			height: 0;
		}
		.have-account {
			visibility: visible;
			margin-right: 8%;
			margin-top: 15px;
			margin-bottom: 15px;
		}
    }
</style>
