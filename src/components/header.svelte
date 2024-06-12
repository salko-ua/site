<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>


<div class="header">
    <div class="site-avatar-div">
        <img class="site-avatar" src="/logo/our_logo.png" alt="our site logo">
    </div>
    <div class="site-menu-div">
        <div class="main-buttons">
            <div class="menu-button"><a href="/">Home</a></div>
            <div class="menu-button"><a href="google.com">Recent Quiz</a></div>
            <div class="menu-button"><a href="google.com">Completion Quiz</a></div>
            <div class="menu-button"><a href="google.com">About us</a></div>

            {#if user.loggedIn}
                <div class="menu-button"><a href="google.com">Settings</a></div>
            {/if}
        </div>

        {#if !user.loggedIn}
            <div class="sing">
                <div class="login">
                    <a href="/login">Log in</a>
                </div>
                <div class="singup">
                    <a href="/singup">Sing up</a>
                </div>
            </div>
        {/if}
    </div>



</div>




<style>
    .header{
        position: fixed;
        top: 1%;
        left: 1%;
        right: 1%;
        width: 98%;
        background-color: rgba(25, 25, 25, 0.87);
        border-radius: 10px;
        font: small-caps bold 18px/1 sans-serif;
    }
    .site-avatar-div{
        margin-left: 20px;
        float: left;
    }
    .site-avatar{
        height: 48px;
        width: 50px;
    }

    .site-menu-div{
        margin-right: 20px;
        float: right;
    }

    .menu-button{
        margin: 0 12px;
        float: left;
        font-size: 14px;
        padding: 8px;
        border-radius: 50px;
    }

    .menu-button:hover{
        background-color: rgba(32, 32, 32, 0.87);
    }

    .main-buttons{
        height: 50px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sing{
        float: right;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sing div{
        font-size: 14px;
        padding: 10px 8px;
        float: left;
        margin-right: 4px;
        margin-left: 4px;
        border-radius: 5px;
    }

    .singup{
        border: 1px solid #930000;
        background-color: #930000;
    }

    .singup:hover{
        background-color: #690000;
        border: 1px solid #690000;
    }

    .login{
        border: 1px solid #930000;

    }

    .login:hover{
        background-color: rgba(32, 32, 32, 0.87);
    }

    a{
        color: #a1a1a1;
        text-decoration: none;
    }


</style>