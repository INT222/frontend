<template>
	<div id="nav" class="bg-blackBlue w-screen">
		<div class="bg-white border h-auto rounded-t-lg md:w-2/5 md:mx-auto md:rounded-lg md:mt-10 md:h-auto">
			<div class="mt-4 mx-3">
				<BackButton color="#fa3317"></BackButton>
				<!-- <p class="mt-5 -ml-2 text-xs tracking-wider leading-loose uppercase">back to home</p> -->
			</div>
			<div class="mx-6 mt-4">
				<p class="font-bold text-xl">Welcome back!</p>
				<p class="text-gray-400 text-xs">Enter your information</p>
				<w-form class="my-4 grid grid-flow-row">
					<label class="inputInfo text-lg">username</label>
					<w-input
						type="text"
						name="username"
						:validators="[validators.required]"
						color="black"
						placeholder="XXXXXXX"
						v-model="user.username"
					/>
					<br />
					<label class="inputInfo">password</label>
					<w-input
						type="password"
						name="password"
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
			<div class="flex justify-center mt-10 mx-6 mb-10">
				<button :disabled="checkIfValid" class="rounded-full bg-blackBlue text-white w-screen h-12 text-sm uppercase">
					log in
				</button>
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
// import UserDataService from "@/services/UserDataService";

export default {
	components: {
		BackButton,
	},
	data() {
		return {
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
		onSuccess() {
			setTimeout(() => (this.form.sent = true), 2000);
		},
		onValidate() {
			this.form.sent = false;
			this.form.submitted = this.form.errorsCount === 0;
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
