<template>
	<div id="nav" class="bg-blackBlue w-screen h-screen">
		<div class="bg-white border h-96 rounded-t-lg md:w-2/5 md:mx-auto md:rounded-lg md:h-96 md:mt-10">
			<div class="mx-6 mt-4">
				<BackButton></BackButton>
				<p class="font-bold text-xl">Welcome back!</p>
				<p class="text-gray-400 text-xs">Enter your information</p>
				<w-form class="my-4 grid grid-flow-row">
					<label class="inputInfo text-lg">username</label>
					<w-input
						type="text"
						:validators="[validators.required]"
						color="black"
						placeholder="XXXXXXX"
						v-model="username"
					/>
					<br />
					<label class="inputInfo">password</label>
					<w-input
						type="password"
						:validators="[validators.required]"
						color="black"
						placeholder="*******"
						v-model="password"
					/>
				</w-form>
			</div>
			<div class="flex justify-end mx-6 mt-5">
				<button class="underline font-semibold text-xs">Create an account</button>
			</div>
			<div class="flex justify-center mt-10 mx-6">
				<button class="rounded-full bg-blackBlue text-white w-screen h-12 text-sm uppercase">log in</button>
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
export default {
	components: {
		BackButton,
	},
	data() {
		return {
			validators: {
				required: (value) => !!value || "This field is required",
			},
		};
	},

	// methods: {
	// 	onSuccess() {
	// 		setTimeout(() => (this.form.sent = true), 2000)
	// 	},
	// 	onValidate() {
	// 		this.form.sent = false
	// 		this.form.submitted = this.form.errorsCount === 0
	// 	}
	// }
};
</script>
