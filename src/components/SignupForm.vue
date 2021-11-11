<template>
	<div>
		<div
			class="bg-white border h-auto py-4 pb-10 rounded-t-lg md:w-2/5 md:mx-auto md:rounded-lg md:h-auto md:mt-10 md:py-4 md:pb-10"
		>
			<div class="mt-4 mx-3">
				<back-button iconcolor="#fa3317"></back-button>
				<!-- <p class="mt-5 -ml-2 text-xs tracking-wider leading-loose uppercase">back to home</p> -->
			</div>
			<!-- <p class="ml-4 text-xs leading-loose uppercase mt-1">back to home</p> -->
			<!-- </button> -->
			<!-- </div> -->
			<div class="mx-6 mt-4">
				<p class="font-bold text-xl">Welcome back!</p>
				<p class="text-gray-400 text-xs">Enter your information</p>
				<w-form @submit.prevent="submitForm" class="my-4 grid grid-flow-row">
					<div>
						<label class="inputInfo">firstname</label>
						<w-input
							color="black"
							:validators="[validators.required]"
							v-model="user.firstname"
							type="text"
							placeholder="XXXXXXX"
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
						/>
					</div>
					<div class="mt-4">
						<label class="inputInfo">username</label>
						<w-input
							color="black"
							:validators="[validators.required]"
							v-model="user.username"
							type="text"
							placeholder="XXXXXXX"
						/>
					</div>
					<div class="mt-4">
						<label class="inputInfo">password</label>
						<w-input
							color="black"
							:validators="[validators.required && validators.minLength]"
							v-model="user.password"
							type="password"
							placeholder="*******"
						/>
					</div>
					<div class="mt-4">
						<label class="inputInfo">confirm password</label>
						<w-input
							color="black"
							:validators="[validators.required && validators.confirmPassword]"
							v-model="user.confirmpassword"
							type="password"
							placeholder="*******"
						/>
					</div>
				</w-form>
			</div>
			<div class="flex justify-end mx-6 mt-5">
				<router-link to="/signin">
					<button class="underline font-semibold text-xs tracking-wide">Already have an account?</button>
				</router-link>
			</div>
			<div class="flex justify-center mt-10 mx-6">
				<button
					class="rounded-full bg-blackBlue text-white w-screen h-12 text-sm tracking-wide"
					type="submit"
					:disabled="checkIfValid()"
					@click="submitForm"
				>
					SIGN UP
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import UserDataService from "@/services/UserDataService.js";

export default {
	components: {
		"back-button": BackButton,
	},
	data() {
		return {
			user: {
				firstname: "",
				lastname: "",
				username: "",
				password: "",
				confirmpassword: ""
			},
			submitted: false,
			valid: null,
			validators: {
				required: (value) => !!value || "This field is required",
				minLength: (value) => value.length >= 9 || "Your password must be minimum 9 characters",
				// checkUsername: (value) =>  || "Username is not correct"
				confirmPassword: (value) => value == this.password || "Your password did not match"
				},
		};
	},
	methods: {
		submitForm() {
			if (!this.checkIfValid()) {
				var data = {
					username: this.user.username,
					password: this.user.password,
					firstname: this.user.firstname,
					lastname: this.user.lastname,
				};
				UserDataService.create(data)
					.then((response) => {
						// this.user.id = response.data.id;
						console.log(response.data);
						this.submitted = true;
					})
					.catch((error) => {
						console.error(error.response.data);
					});
			}
		},
		newUser() {
			this.submitted = false;
			this.user = {};
		},
		checkIfValid() {
			for (const key in this.user) {
				if (this.user[key] == "") {
					return true;
				}
				return false;
			}
		},
	},
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
