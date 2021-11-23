<template>
	<div class="md:px-7">
		<div class="inline-flex space-x-3 mb-1">
			<p class="text-base mt-1 text-white font-medium md:text-lg">Rate this :</p>
			<w-rating md color="amber-light1" :validators="[validators.required]"></w-rating>
		</div>
		<w-form v-model="valid">
		<div class="my-2 md:my-4">
			<w-textarea
				v-model="comment"
				color="white"
				:validators="[validators.required]"
				rows="6"
				class="mt-1 w-full bg-deepBrownGray rounded-md p-4 text-white mb-1 md:focus:ring-2 md:focus:ring-gray-400"
				placeholder="Write your comment here..."
			></w-textarea>

			<div class="flex justify-end">
				<!-- <w-button type="submit" class="uppercase text-white"></w-button> -->
				<w-button
					:disabled="valid === false"
					height="32"
					width="100"
					bg-color="white"
					color="black"
					type="submit"
					class="text-sm font-medium text-center py-1 px-4 rounded tracking-wider uppercase mb-1 md:px-10 md:py-2 md:hover:bg-gray-500 md:hover:text-white"
				>post</w-button>
			</div>
		</div>
	</w-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			valid: null,
			// Checkvalid: () => {
			// 	if(comment === null && rating === null ) {
			// 		return this.valid = false
			// 	}
			// },
			validators: {
				required: (value) => !!value || "This field is required",
				moviename: (value) => {
					var usernames = ["About Time", "Eternals", "Dune", "Free Guy"];
					for (let i = 0; i < usernames.length; i++) {
						if (usernames[i].toLowerCase() === value.toLowerCase()) {
							return "This moive already exist";
						}
					}
				},
			},
		}
	}
}
</script>
