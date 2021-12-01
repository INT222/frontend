<template>
	<div>
		<nav class="flex items-center justify-between py-6 px-5 md:space-x-10">
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
					<div>
						<manage-list></manage-list>
					</div>
				</div>
			</div>
			<div class="flex">
				<div
					:class="{
						'bg-blackBlue h-6 z-10 w-72 ': searchButton === true,
					}"
				>
					<div v-if="searchButton">
						<w-input
							v-model="search"
							color="white"
							type="text"
							placeholder="Search"
							class="px-1 md:w-64 w-64 border border-white"
							inner-icon-left="mdi mdi-close"
							loading
							@click:inner-icon-left="searchButton = false"
						></w-input>
					</div>
				</div>
				<div class="z-10">
					<w-button
						@click="searchButton = true"
						bg-color="transparent"
						class="-ml-10 md:top-0 tb:top-0"
						:class="{ 'float-right left-2': searchButton === true }"
					>
						<w-icon md color="white">mdi mdi-magnify</w-icon>
					</w-button>
				</div>
			</div>
			<div v-if="this.loggedIn === false" class="hidden md:inline-flex md:space-x-5">
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
				<div>
					<span class="text-white uppercase text-xs tracking-wider mt-2">or</span>
				</div>
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
			<!-- <div v-if="this.loggedin === true" class="hidden md:block"> -->
			<div v-if="this.loggedIn === true" class="hidden md:block">
				<user-list></user-list>
			</div>
		</nav>
	</div>
</template>

<script>
import Drawer from "./Drawer.vue";
import GenreListBlock from "./GenreListBlock.vue";
// import { auth } from "../services/auth-module.js";
import UserList from "./UserList.vue";
import ManageList from "./ManageList.vue";
export default {
	components: {
		"genre-list-block": GenreListBlock,
		drawer: Drawer,
		"user-list": UserList,
		"manage-list": ManageList,
	},
	data() {
		return {
			showDropDown: false,
			// loggedin: auth.state.status.loggedIn,
			searchButton: false,
			search: "",
			list: {
				type: Array,
			},
		};
	},
	methods: {
		documentClick(event) {
			if (!this.$el.contains(event.target)) {
				this.showDropDown = false;
			}
		},
		// hideDrawer() {},
	},
	created() {
		document.addEventListener("click", this.documentClick);
	},
	unmounted() {
		document.removeEventListener("click", this.documentClick);
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	// mounted() {
	// 	// if (this.loggedIn) {
	// 	// 	this.$router.push("/profile");
	// 	// }
	// },
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
