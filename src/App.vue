<template>
	<w-app>
		<div id="nav">
			<!-- <router-link to="/about">About</router-link>	 -->
			<nav-bar />
			<router-view />
		</div>
	</w-app>
</template>
<script>import NavBar from "./components/NavBar.vue";

export default {
	components: {
		'nav-bar': NavBar
	}
}
</script>