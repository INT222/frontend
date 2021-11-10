<template>
	<div>
		<nav class="flex items-center justify-between flex-wrap py-6 px-5 md:space-x-10">
			<div class="flex items-center text-white space-x-2 tb:space-x-9">
				<div class="md:hidden">
					<drawer />
				</div>
				<router-link to="/">
					<img class="w-20 md:w-30" src="../assets/brm_logo.png" />
				</router-link>
			</div>
			<div class="hidden md:block md:flex-grow">
				<div class="text-sm text-white inline-flex space-x-5">
					<router-link to="/watchlist">
						<w-button bg-color="transparent" :height="40" class="uppercase block px-3 py-2">watch list</w-button>
					</router-link>
					<genre-list-block />
					<router-link to="/managemovie">
						<w-button
							bg-color="transparent"
							:height="40"
							class="uppercase block mt-4 px-3 py-2 hover:bg-gray-700 rounded-md md:inline-block md:mt-0 hover:text-white"
						>manage movie</w-button>
					</router-link>
				</div>
			</div>
			<div class="inline-flex">
				<div :class="{
						'bg-blackBlue z-10 ml-2 -mt-7 w-80 mx-auto md:-mt-1 ': searchButton === true,
					}"
				>
					<div v-if="searchButton"
					>
						<w-input
							v-model="search"
							color="white"
							type="text"
							placeholder="Search"
							class="border border-white px-1 md:w-72 w-64"
							loading="true"
							inner-icon-left="mdi mdi-close"
							@click:inner-icon-left="searchButton = false"
						></w-input>
					</div>
				</div>
				<div class="z-10">
				<w-button @click="searchButton = true" bg-color="transparent" class="-ml-8 md:top-0 tb:top-0" :class="{'float-right -top-6': searchButton === true}">
					<w-icon xl color="white">mdi mdi-magnify</w-icon>
				</w-button>
				</div>
			</div>
			<div class="hidden md:inline-flex md:space-x-5">
				<router-link to="/signin">
					<w-button
						id="signin"
						class="uppercase text-xs w-20 tracking-wider"
						outline
						color="white"
						bg-color="transparent"
					>sign in</w-button>
				</router-link>
				<div class>
					<span class="text-white uppercase text-xs tracking-wider mt-2">or</span>
				</div>
				<router-link to="/signup">
					<w-button
						id="signup"
						class="uppercase text-xs w-20 tracking-wider flex justify-item-center"
						outline
						color="black"
						bg-color="white"
					>sign up</w-button>
				</router-link>
			</div>
		</nav>
	</div>
</template>

<script>
import Drawer from "./Drawer.vue";
import GenreListBlock from "./GenreListBlock.vue";
export default {
	components: {
		"genre-list-block": GenreListBlock,
		"drawer": Drawer,
	},
	data() {
		return {
			searchButton: false,
			search: "",
			list: {
				type: Array,
			},
		};
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
