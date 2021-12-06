<template>
	<div class="relative">
		<!-- <img class="block h-44 md:h-60 tb:h-52" src="../src/assets/LoveSimon.jpg"> -->
		<div v-if="seen">
			<w-button bg-color="transparent" class="white" @click="(seen = false), addToWatchlist(id)">
				<w-icon xl>mdi mdi-bookmark-outline</w-icon>
			</w-button>
		</div>
		<div v-if="seen == false">
			<w-button bg-color="transparent" class="info-light1" @click="(seen = true), removeFromWatchlist(id)">
				<w-icon xl>mdi mdi-bookmark</w-icon>
			</w-button>
		</div>
	</div>
</template>

<script>
import userService from "../services/user-service";
export default {
	props: { id: Number },
	data() {
		return {
			seen: true,
		};
	},
	methods: {
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
		removeFromWatchlist(id) {
			userService
				.removeToWatchlist(id)
				.then((res) => {
					console.log(res.data);
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
};
</script>
