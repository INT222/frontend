<template>
	<!-- responsive  -->
	<div class="bg-pink-500 h-14">
		<div class=" mx-4 grid grid-cols-10  md:mx-4 md:my-6 w-screen md:grid md:grid-cols-8 bg-deepBlue">
			<div class="md:hidden">
				<drawer />
			</div>
			<div class="ml-6 col-span-8 md:col-span-1 md:flex md:justify-center tb:-ml-6">
				<router-link to="/">
					<img class="w-20 md:w-30" src="../assets/brm_logo.png" />
				</router-link>
			</div>
			<div class="hidden md:grid md:grid-cols-3 md:col-span-3">
				<div class="md:flex md:justify-start">
					<router-link to="/watchlist">
						<button class="uppercase text-xs text-white">watch list</button>
					</router-link>
				</div>
				<div class="md:flex md:justify-start">
					<!-- <router-link to="/genre"><button class="uppercase text-xs text-white">genres</button></router-link> -->
					<!-- <w-icon size="16" color="white" class="ml-2">material-icons expand_more</w-icon> -->
					<genre-list-block />
				</div>
				<div class="md:flex md:justify-start ">
					<router-link to="/managemovie">
						<button class="uppercase text-xs text-white bg-blue-500 ">manage movie</button>
					</router-link>
				</div>
			</div>
			<div class="mx-4 md:col-span-2 flex justify-self-end -mt-1 md:mt-0">
				<w-icon xl color="white">material-icons search</w-icon>
			</div>
			<div class="hidden md:col-span-2 md:mx-auto md:inline-flex md:space-x-6">
				<router-link to="/signin">
					<w-button
						id="signin"
						class="uppercase text-xs w-20 tracking-wider"
						outline
						color="white"
						bg-color="transparent"
						>sign in</w-button
					>
				</router-link>
				<div class>
					<span class="text-white uppercase text-xs tracking-wider mt-2">or</span>
				</div>
				<div class>
					<router-link to="/signup">
						<w-button
							id="signup"
							class="uppercase text-xs w-20 tracking-wider flex justify-item-center"
							outline
							color="black"
							bg-color="white"
							>sign up</w-button
						>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Drawer from "./Drawer.vue";
import GenreListBlock from "./GenreListBlock.vue";
export default {
	components: {
		"genre-list-block": GenreListBlock,
		drawer: Drawer,
	},
};
</script>

<style lang="scss">
#signup {
	height: 30px;
}

#signin {
	height: 30px;
}
</style>
