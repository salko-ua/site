<script>
    import { _ } from 'svelte-i18n'

	function myFunction() {
		const x = document.getElementById('password');
		if (x != null) {
			if (x.type === "password") {
				x.type = "text";
			} else {
				x.type = "password";
			}
	  	}
	}

</script>

<div class="checkbox-wrapper-12">
  <div class="cbx">
    <input id="cbx-12" type="checkbox" on:click={myFunction}/>
    <label for="cbx-12"></label>
    <svg width="15" height="14"  fill="none">
      <path d="M2 8.36364L6.23077 12L13 2"></path>
    </svg>
  </div>
  <!-- Gooey-->
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="goo-12">
        <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
        <fecolormatrix in="blur"  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix>
        <feblend in="SourceGraphic" in2="goo-12"></feblend>
      </filter>
    </defs>
  </svg>
</div>

<style>

  .checkbox-wrapper-12 {
    position: relative;
  }
  .checkbox-wrapper-12 > svg {
    position: absolute;
    top: -130%;
    left: -170%;
    width: 110px;
    pointer-events: none;
  }
  .checkbox-wrapper-12 * {
    box-sizing: border-box;
  }
  .checkbox-wrapper-12 input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    margin: 0;
  }
  .checkbox-wrapper-12 input[type="checkbox"]:focus {
    outline: 0;
  }
  .checkbox-wrapper-12 .cbx {
    width: 24px;
    height: 24px;
    top: calc(50vh - 12px);
    left: calc(50vw - 12px);
  }
  .checkbox-wrapper-12 .cbx input {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 2px solid #b4befe;
    border-radius: 50%;
  }
  .checkbox-wrapper-12 .cbx label {
    width: 24px;
    height: 24px;
    background: none;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-filter: url("#goo-12");
    filter: url("#goo-12");
    pointer-events: none;
  }
  .checkbox-wrapper-12 .cbx svg {
    position: absolute;
    top: 5px;
    left: 4px;
    z-index: 1;
    pointer-events: none;
  }
  .checkbox-wrapper-12 .cbx svg path {
    stroke: #b4befe;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 19;
    stroke-dashoffset: 19;
    transition: stroke-dashoffset 0.3s ease;
    transition-delay: 0.2s;
  }
  .checkbox-wrapper-12 .cbx input:checked + label {
    animation: splash-12 0.6s ease forwards;
  }
  .checkbox-wrapper-12 .cbx input:checked + label + svg path {
    stroke-dashoffset: 0;
  }
</style>
