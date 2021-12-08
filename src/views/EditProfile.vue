<template>
	<div class="space-y-2">
		<p class="uppercase text-white text-center text-lg font-bold mt-2">edit profile</p>
		<signup-form
			:buttontext="'edit profile'"
			:firstname="currentUser.firstname"
			:lastname="currentUser.lastname"
			:username="currentUser.username"
			@save-data="editProfile"
		/>
	</div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import authService from "../services/auth-service";
import userService from "../services/user-service";

export default {
	components: {
		"signup-form": SignupForm,
	},
	data() {
		return {
			currentUser: this.$store.state.auth.user.user,
		};
	},
	methods: {
		editProfile(user) {
			userService
				.editProfile(user)
				.then((response) => {
					if (response.status == 200) {
						this.$waveui.notify("edit profile successful", "success");
					}
				})
				.catch((error) => {
					console.error(error);
				});
			authService.logout();
			location.reload();
			this.$router.push("/");
		},
	},
};
</script>
