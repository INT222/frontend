<template>
	<div class="md:px-7 mx-5 tb:mx-8 md:mx-8">
		<w-form v-model="valid">
			<div class="inline-flex space-x-3 mb-1">
				<p class="text-base text-white font-medium md:text-lg">Rate this :</p>
				<w-rating md color="amber-light1" :validators="[validators.required]" v-model="comment.rating"></w-rating>
			</div>
			<div class="my-2 md:my-4">
				<w-textarea
					color="white"
					rows="6"
					class="mt-1 w-full bg-deepBrownGray rounded-md p-4 text-white mb-1 md:focus:ring-2 md:focus:ring-gray-400"
					placeholder="Write your comment here..."
					v-model="comment.commenttext"
				></w-textarea>
				<span class="text-white">{{ comment }}</span>
				<div class="flex justify-end">
					<w-button
						:disabled="valid === false"
						height="32"
						width="100"
						bg-color="white"
						color="black"
						type="submit"
						class="
							text-sm
							font-medium
							text-center
							py-1
							px-4
							rounded
							tracking-wider
							uppercase
							mb-1
							md:px-10 md:py-2 md:hover:bg-gray-500 md:hover:text-white
						"
						@click="saveData"
						>post</w-button
					>
				</div>
			</div>
		</w-form>
	</div>
</template>

<script>
import userService from "../services/user-service";

export default {
	data() {
		return {
			valid: null,
			validators: {
				required: (value) => (!!value && value > 0) || "This field is required",
			},
			comment: {
				rating: 0.0,
				commenttext: "",
			},
		};
	},
	methods: {
		saveData() {
			userService.postComment(this.$route.params.id, this.comment).catch((error) => {
				this.errorText = JSON.stringify(error.response.data.message);
				this.$waveui.notify({ message: this.errorText, color: "error", timeout: 0 });
			});
		},
	},
};
</script>
