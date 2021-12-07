<template>
	<div>
		<div
			class="
				bg-white
				border
				h-auto
				py-4
				pb-10
				rounded-t-lg
				md:w-2/5 md:mx-auto md:rounded-lg md:h-auto md:mt-10 md:py-4 md:pb-10
			"
		>
			<div class="mt-4 mx-3">
				<back-button iconcolor="#fa3317"></back-button>
			</div>
			<div class="mx-6 mt-4">
				<p class="font-bold text-xl">Welcome back!</p>
				<p class="text-gray-400 text-xs">Enter your information</p>
				<w-form @submit.prevent="submitForm" class="my-4 grid grid-flow-row" v-model="valid">
					<div>
						<label class="inputInfo">firstname</label>
						<w-input
							color="black"
							:validators="[validators.required]"
							v-model="user.firstname"
							type="text"
							placeholder="XXXXXXX"
							:model-value="firstname"
						/>
					</div>
					<div class="mt-4">
						<label class="inputInfo">lastname</label>
						<w-input
							color="black"
							:validators="[validators.required]"
							v-model="user.lastname"
							type="text"
							placeholder="XXXXXXX"
							:model-value="lastname"
						/>
					</div>
					<div class="mt-4">
						<label class="inputInfo">username</label>
						<w-input
							color="black"
							:validators="[validators.required, validators.username]"
							v-model="user.username"
							type="text"
							placeholder="XXXXXXX"
							:model-value="username"
						/>
					</div>
					<div class="mt-4">
						<label class="inputInfo">password</label>
						<w-input
							color="black"
							:validators="[validators.required, validators.minLength]"
							v-model="user.password"
							type="password"
							placeholder="*******"
							:model-value="password"
						/>
					</div>
					<!-- <div class="mt-4">
						<label class="inputInfo">confirm password</label>
						<w-input
							color="black"
							:validators="[validators.required, validators.confirmPassword]"
							v-model="user.confirmpassword"
							type="password"
							placeholder="*******"
						/>
					</div>-->
				</w-form>
			</div>
			<div class="flex justify-end mx-6 mt-5">
				<router-link to="/signin">
					<button class="underline font-semibold text-xs tracking-wide">Already have an account?</button>
				</router-link>
			</div>
			<div class="flex justify-center mt-10 mx-6 bg-blackBlue rounded-full h-12">
				<w-button
					bg-color="transparent"
					color="white"
					class="text-sm tracking-wide uppercase"
					type="submit"
					:disabled="valid === false"
					@click="submitForm"
					>{{ buttontext }}</w-button
				>
			</div>
		</div>
	</div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import authService from "../services/auth-service";

export default {
	props: {
		buttontext: {
			type: String,
			default: "Sign up",
		},
		firstname: String,
		lastname: String,
		username: String,
		password: String,
	},
	components: {
		"back-button": BackButton,
	},
	data() {
		return {
			userlists: [],
			user: {
				firstname: "",
				lastname: "",
				username: "",
				password: "",
				// confirmpassword: ""
			},
			submitted: false,
			valid: null,
			validators: {
				required: (value) => !!value || "This field is required",
				minLength: (value) => value.length >= 8 || "Your password must be minimum 8 characters",
				confirmPassword: (value) => {
					if (value !== this.user.password) {
						return "Your password is not match";
					}
				},
				username: (value) => {
					for (let i = 0; i < this.userlists.length; i++) {
						if (this.userlists[i].toLowerCase() === value.toLowerCase()) {
							return "This username is already in use";
						}
					}
				},
			},
		};
	},
	methods: {
		async fetchData() {
			const response = await authService.getUsernameList();
			this.userlists = response.data;
		},
		submitForm() {
			var data = {
				username: this.user.username,
				password: this.user.password,
				firstname: this.user.firstname,
				lastname: this.user.lastname,
			};
			this.$emit("save-data", data);

			// this.$waveui.notify(this.errorText, "success", 0);
			// this.$router.push("/signin");
		},
	},
	created() {
		this.fetchData();
	},
	// computed: {
	// 	loggedIn() {
	// 		return this.$store.state.auth.status.loggedIn;
	// 	},
	// },
	// mounted() {
	// 	if (this.loggedIn) {
	// 		this.$router.push("/");
	// 	}
	// },
};
</script>

<style lang="scss">
::placeholder {
	font-size: 16px;
}

input[type="text"] {
	font-size: 16px;
}
</style>
