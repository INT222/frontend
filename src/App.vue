<template>
	<w-app>
		<!-- <router-link to="/about">About</router-link>	 -->
		<nav-bar />
		<router-view />
		<foo-ter />
	</w-app>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		"nav-bar": NavBar,
		"foo-ter": Footer,
	},
};
</script>
