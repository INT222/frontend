<template>
    <div>
			<div
				class="bg-white border h-auto py-4 pb-10 rounded-t-lg md:w-2/5 md:mx-auto md:rounded-lg md:h-auto md:mt-10 md:py-4 md:pb-10"
			>
				<div class="inline-flex">
				<BackButton></BackButton>
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
							placeholder="XXXXXXX" />
						</div>
						<div class="mt-4">
						<label class="inputInfo">username</label>
						<w-input 
							color="black"
							:validators="[validators.required]"
							v-model="user.username"
							type="text"  
							placeholder="XXXXXXX" />
						</div>
						<div class="mt-4">
						<label class="inputInfo">password</label>
						<w-input
							color="black"
							:validators="[validators.required]"
							v-model="user.password"
							type="password" 
							placeholder="*******" />
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
					>SIGN UP</button>
				</div>
			</div>
		</div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
// import UserDataService from "./services/UserDataService";

export default {
	components: {
		BackButton
	},
	data() {
		return {
			user: {
				firstname: '',
				lastname: '',
				username: '',
				password: ''
			},
			submitted: false,
			valid: null,
			validators: {
				required: (value) => !!value || "This field is required"
			}
		};
	},
	methods: {
		// submitForm() {
			// if (!this.checkIfValid()) {
			// 	var data = {
			// 		username: this.user.username,
			// 		password: this.user.password,
			// 		firstname: this.user.firstname,
			// 		lastname: this.user.lastname,
			// 	};
				// UserDataService.create(data)
				// 	.then((response) => {
				// 		// this.user.id = response.data.id;
				// 		console.log(response.data);
				// 		this.submitted = true;
				// 	})
				// 	.catch((error) => {
				// 		console.error(error.response.data);
				// 	});
		// 	}
		// },
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
}
</script>


<style lang="scss">
// #app
// 	font-family: Avenir, Helvetica, Arial, sans-serif;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	text-align: center;
// 	color: #2c3e50;
//

// #nav {
// 	padding: 30px;

// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;

// 		&.router-link-exact-active {
// 			color: #42b983;
// 		}
// 	}
// }

::placeholder {
  font-size: 16px;
}

input[type="text"]
{
    font-size:16px;
}


</style>
