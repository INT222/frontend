<template>
	<div class="md:space-y-6 h-full md:h-screen">
		<div class="mx-auto w-36 mt-14 md:my-4">
			<img src="../assets/brm_logo.png" alt="" />
		</div>
		<div class="invisible md:visible mt-10">
			<p class="text-white text-3xl text-center">Sign up</p>
		</div>
		<div>
			<signup-form @save-data="register" />
		</div>
	</div>
</template>

<script>
import authService from "../services/auth-service";
import SignupForm from "../components/SignupForm.vue";
export default {
	name: "Home",
	components: {
		"signup-form": SignupForm,
	},
	methods: {
		register(data) {
			authService
				.register(data)
				.then((response) => {
					if (response.status == 200) {
						this.$waveui.notify("sign up profile successfully", "success");
						this.$router.push("/");
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	mounted() {
		if (this.loggedIn) {
			this.$router.push("/");
		}
	},
};
</script>
