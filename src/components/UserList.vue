<template>
	<div class="-ml-1 mt-1 md:mt-0">
		<w-button
			bg-color="transparent"
			class="px-5 py-2 uppercase"
			@click="showDropDown = !showDropDown"
			color="white"
			:height="40"
		>
			<div class="inline-flex space-x-3 -ml-4 md:px-1 md:my-0">
				<p class="text-white my-auto md:my-2 text-sm uppercase">{{ currentUser.username }}</p>
				<div class="pl-2 pr-5 md:pr-1 md:pl-0 my-auto">
					<w-icon md color="white" v-if="showDropDown == false">mdi mdi-chevron-down</w-icon>
					<w-icon md color="white" v-if="showDropDown">mdi mdi-chevron-up</w-icon>
				</div>
			</div>
		</w-button>
		<div class="absolute mt-2 ml-14 md:-ml-12 z-10 bg-blackBlue" v-if="showDropDown">
			<div class="text-white text-xs font-medium">
				<user></user>
				<w-button
					@click="clickToLogOut"
					color="red"
					bg-color="transparent"
					class="block pr-4 py-2 uppercase font-medium md:ml-8 md:my-2"
					>Sign out</w-button
				>
			</div>
		</div>
	</div>
</template>

<script>
import User from "./User.vue";
import authService from "../services/auth-service";

export default {
	components: {
		user: User,
	},
	data() {
		return {
			// props: ["username"],
			showDropDown: false,
			// dup_user: this.$store.state.auth.user.user,
		};
	},
	methods: {
		clickToLogOut() {
			authService.logout();
			console.log("Log out successful");
			location.reload();
		},
		documentClick(event) {
			if (!this.$el.contains(event.target)) {
				this.showDropDown = false;
			}
		},
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
		currentUser() {
			return this.$store.state.auth.user;
		},
	},
	// mounted() {
	// 	if (this.loggedIn()) {
	// 		// console.log(this.loggedIn);
	// 		// console.log(this.$store.state.auth.user);
	// 		this.dup_user = this.$store.state.auth.user.user;
	// 		console.log(this.dup_user.username);
	// 	}
	// },
};
</script>

<style>
#dropdown {
	background-color: #20232a;
}
</style>
