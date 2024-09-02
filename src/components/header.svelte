<script>
	    import Language from './switch-language.svelte';
</script>


<div class="header">
	<div class="language">
		 	 <Language/>
	</div>

</div>
<div class="s">

</div>



<style>

    /* from 861 to 861+ */
    @media screen and (min-width: 861px) {
				.header {
						position: fixed;
						left: 5%;
						top: 1%;
						width: 90%;
						height: 60px;
						background-color: #11111b;
						border-radius: 20px;
				}
				.language {
						float: right;
				}

    }
    /* from 861 to 861-  */
    @media screen and (max-width: 861px) {

    }
</style>
