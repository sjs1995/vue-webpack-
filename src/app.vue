<template>
  <div id="text">{{text}}</div>
</template>

<script>
	// import 'style-loader!css-loader!./style.css';
	export default {
		data(){
			return {
				text : 'abc'
			}
		}
	}
</script>

<style>
	#text {
		color: red;
	}
</style>