<template>
	<div id="nav" class="bg-blackBlue w-screen">
		<div class="bg-white border h-auto rounded-t-lg md:w-2/5 md:mx-auto md:rounded-lg md:mt-10 md:h-auto">
			<div class="mt-4 mx-3">
				<back-button iconcolor="#fa3317"></back-button>
				<!-- <p class="mt-5 -ml-2 text-xs tracking-wider leading-loose uppercase">back to home</p> -->
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
				<w-button color="white" bg-color="transparent" :disabled="valid === false" class="text-white text-sm uppercase"
					>log in</w-button
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

export default {
	components: {
		"back-button": BackButton,
	},
	data() {
		return {
			valid: null,
			user: {
				username: "",
				password: "",
			},
			validators: {
				required: (value) => !!value || "This field is required",
			},
		};
	},
	methods: {
		submitForm() {
			// var data = { username: this.user.username, password: this.user.password };
			console.log(this.user);
			authService.login(this.user).catch((error) => {
				console.error(error.response.data);
			});
			this.$store.dispatch("auth/login", this.user).then(() => {
				this.$router.push("/");
			});
		},
		checkIfValid() {
			if ((this.user.username, this.user.password == "")) {
				console.log(this.valid);
				this.valid = false;
			}
			this.valid = true;
			this.submitForm();
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
	},
};
</script>
