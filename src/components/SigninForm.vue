<template>
	<div id="nav" class="bg-blackBlue w-screen">
		<div class="bg-white border h-auto rounded-t-lg md:w-2/5 md:mx-auto md:rounded-lg md:mt-10 md:h-auto">
			<div class="mt-4 mx-3">
				<back-button iconcolor="#fa3317"></back-button>
			</div>
			<div class="mx-6 mt-4">
				<p class="font-bold text-xl">Welcome back!</p>
				<p class="text-gray-400 text-xs">Enter your information</p>
				<w-form class="my-4 grid grid-flow-row" v-model="valid">
					<label class="inputInfo text-lg">username</label>
					<w-input
						type="text"
						:validators="[validators.required]"
						color="black"
						placeholder="XXXXXXX"
						v-model="user.username"
					/>
					<br />
					<label class="inputInfo">password</label>
					<w-input
						type="password"
						:validators="[validators.required]"
						color="black"
						placeholder="*******"
						v-model="user.password"
					/>
				</w-form>
			</div>
			<div class="flex justify-end mx-6 mt-5">
				<router-link to="/signup">
					<button class="underline font-semibold text-xs">Create an account</button>
				</router-link>
			</div>
			<div class="flex justify-center mt-10 mx-6 mb-10 rounded-full bg-blackBlue h-12">
				<w-button
					color="white"
					bg-color="transparent"
					:disabled="valid === false"
					class="text-white text-sm uppercase"
					type="submit"
					@click="submitForm"
					>Sign in</w-button
				>
			</div>
		</div>
	</div>
</template>

<style>
input[type="text"] {
	font-size: 16px;
}
::placeholder {
	font-size: 16px;
}
</style>

<script>
import BackButton from "@/components/BackButton.vue";
import authService from "../services/auth-service";
import userService from "../services/UserService";

export default {
	components: {
		"back-button": BackButton,
	},
	data() {
		return {
			userlists: [],
			valid: null,
			user: {
				username: "",
				password: "",
			},
			validators: {
				required: (value) => !!value || "This field is required",
				// username: (value) => {
				// 	for (let i = 0; i < this.userlists.length; i++) {
				// 		let result= this.userlists[i].localCompare(value);
				// 		if (!result==0) {
				// 			return "This username was not found";
				// 		}
				// 	}
				// },
			},
			errorText: "",
		};
	},
	methods: {
		async fetchData() {
			const response = await userService.getUsernameList();
			this.userlists = response.data;
		},
		submitForm() {
			// var data = { username: this.user.username, password: this.user.password };
			authService.login(this.user).catch((error) => {
				this.errorText = JSON.stringify(error.response.data.message);
				this.$waveui.notify({ message: this.errorText, color: "error", timeout: 0 });
			});
			this.$store.dispatch("auth/login", this.user).then(() => {
				this.$router.push("/");
			});
		},
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	created() {
		if (this.loggedIn) {
			this.$router.push("/");
		}
		this.fetchData();
	},
	mounted() {},
};
</script>
<style>
.w-notification-manager {
	width: 100%;
	max-width: 700px;
}
</style>
