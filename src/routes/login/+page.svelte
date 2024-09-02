<script>
    import Auth from "../../components/auth.svelte";
    import Language from '../../components/switch-language.svelte';
</script>

<head>
    <title>Login</title>
</head>
<body>
    <div class="language">
        <Language />
    </div>
    <Auth is_used="login"/>
</body>

<style>
    .language {
				position: fixed;
				bottom: 2%;
				left: 2%;
				z-index: 4;
		}
</style>