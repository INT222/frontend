<template>
	<div class="border border-gray-300 rounded-md w-40 md:w-44 bg-transparent" v-if="toggle">
		<w-button height="34" bg-color="transparent" @click="(toggle = false), addToWatchlist(id)">
			<div class="inline-flex space-x-3 tb:px-1 tb:space-x-2 md:px-2 md:space-x-1">
				<w-icon :size="20" color="white">mdi mdi-plus</w-icon>
				<p class="my-auto text-xs text-center uppercase text-white">add to watchlist</p>
			</div>
		</w-button>
	</div>
	<div class="border border-gray-300 rounded-md w-40 md:w-44 bg-deepBlue" v-if="toggle == false">
		<w-button height="34" bg-color="transparent" :disabled="toggle == false">
			<div class="inline-flex space-x-3 tb:px-1 tb:space-x-2 md:space-x-1">
				<w-icon :size="20" color="white">mdi mdi-check</w-icon>
				<p class="my-auto text-xs text-center uppercase text-white">Added to watchlist</p>
			</div>
		</w-button>
	</div>
</template>
<script>
import userService from "../services/user-service.js";
export default {
	props: { id: Number },
	data() {
		return {
			toggle: true,
		};
	},
	methods: {
		// addToWatchlist(id) {
		addToWatchlist(id) {
			userService
				.addToWatchlist(id)
				.then((res) => {
					console.log(res.data);
				})
				.catch((error) => {
					console.error(error);
				});
			console.log(id);
		},
	},
};
</script>
