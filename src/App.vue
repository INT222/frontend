<template>
	<w-app>
		<div>
			<nav-bar />
			<router-view />
			<foo-ter />
		</div>
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
