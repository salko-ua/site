<script>
  	// let language = "Ukraine";
	import { _ } from 'svelte-i18n'
	import Checkbox from './checkbox-password.svelte';
	export let is_used = "";
</script>

{#if (is_used === "login")}
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
						<label for="email" class="placeholder">{$_('login.email')}</label>
					</div>
					<div class="input-container ic2">
						<input id="password" class="input" type="password" placeholder=" " />
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
{:else if (is_used === "registration")}
	<div class="registration">
			<div class="registration-left-side">
				<div class="greeting-mobile">
					{$_('registration.registration-text')}
				</div>
			</div>
			<div class="registration-right-side">
				<div class="contents">
					<div class="form-registration">
						<div class="greeting-pc">
							{$_('registration.registration-text')}
						</div>
						<div class="together-box">
							<div class="input-container ic2 together" id="together-1">
							<input
								id="first-name"
								class="input"
								type="text"
								placeholder=" "
								required
								minlength="2"
								maxlength="16"
							/>
							<label for="first_name" class="placeholder">{$_('registration.first-name')}</label>
						</div>
							<div class="input-container ic2 together" id="together-2">
							<input
								id="last-name"
								class="input"
								type="text"
								placeholder=" "
								minlength="2"
								maxlength="16"
							/>
							<label for="last-name" class="placeholder"> {$_('registration.last-name')} </label>
						</div>
						</div>

						<div class="input-container ic2">
							<input id="email" class="input" type="text" placeholder=" " />
							<label for="email" class="placeholder">{$_('registration.email')}</label>
						</div>
						<div class="input-container ic2">
							<input id="password" class="input" type="password" placeholder=" " />
							<label for="password" class="placeholder">{$_('registration.password')}</label>
						</div>
						<div class="checkbox-block">
							<div class="checkbox"><Checkbox/></div>
							<div class="checkbox-text">
								{$_('registration.checkbox-password')}
							</div>
							<div class="have-account">
								<a href="/login">{$_('registration.have-account')}</a>
							</div>
						</div>
						<button type="button" class="submit">{$_('registration.accept')}</button>
					</div>
				</div>
			</div>
		</div>
{/if}


<style>
		* {
			color: #cdd6f4;
			font-family: 'e-Ukraine-regular', monospace;
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
			.login, .registration {
			background-color: #1e1e2e;
			position: absolute;
					width: 100%;
			height: 100vh;
					align-content: center;
			margin: auto 0;
			}

		/* Animation */
		.input:focus ~ .placeholder,
		.input:not(:placeholder-shown) ~ .placeholder {
				transform: translateY(-38px) translateX(2px) scale(0.75);
			background-color: #181825;
			padding: 8px 10px;
			border-radius: 10px;
			box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
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
			box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		}
		.submit {
			box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		}
		.contents {
			align-content: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}

    /* Everyone */
	  @media screen and (min-width: 861px) {
		.login-left-side, .registration-left-side {
			visibility: hidden;
			height: 0;
		}
		.login-right-side, .registration-right-side{
			width: 70%;
			height: max-content;
			margin: 5% auto 5% auto;
			background-color: #181825;
			border-radius: 30px;
			box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
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

    }
    /* from 861 to 861-  */
    @media screen and (max-width: 861px) {
		.login-left-side, .registration-left-side {
			width: 80%;
			height: 50px;
			padding: 10px 5%;
			margin-left: 5%;
			margin-top: 10%;
			background-color: #11111b;
			text-align: center;
			align-content: center;
			border-radius: 20px 20px 0 0;
			box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		}
		.login-right-side, .registration-right-side {
			width: 90%;
			height: max-content;
			margin-left: 5%;
			background-color: #181825;
			border-radius: 0 0 20px 20px;
			margin-bottom: 10%;
			box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
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
			margin-left: 4%;
			margin-right: 4%;
			margin-bottom: 40px;
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
			margin-top: 20px;
			margin-bottom: 20px;
		}
    }


	  /* Login */
    /* from 861 to 861+ */
    @media screen and (min-width: 861px) {
		.form-login {
			width: 80%;
			margin: 75px auto;
			position: relative;
			justify-content: center;
		}
    }
    /* from 831 to 831-  */
    @media screen and (max-width: 861px) {
		.form-login {
			width: 100%;
			margin: auto;
			position: relative;
			justify-content: center;
		}
	}

		/* Registration */
		/* from 861 to 861+ */
    @media screen and (min-width: 861px) {
		.form-registration {
			width: 80%;
			max-width: 100%;
			margin: 75px auto;
			position: relative;
			justify-content: center;
		}
		.together-box {
			margin-top: 20px;
			width: 100%;
			height: 50px;
		}
		.together {
			margin-top: 0;
			float: left;
			width: 48%;
		}
		#together-2 {
			margin-left: 4%;
		}

	}
    /* from 861 to 861-  */
    @media screen and (max-width: 861px) {
		.form-registration {
			width: 100%;
			margin: auto;
			position: relative;
			justify-content: center;
		}
	}


</style>
