<template>
	<div
		class="
			tb:grid tb:grid-cols-5 tb:justify-items-center tb:my-2
			md:grid md:grid-cols-6 md:justify-items-center md:my-2
		"
	>
		<div
			class="flex my-5 space-x-5 tb:w-40 tb:flex-col tb:space-x-0 md:space-x-0 md:w-40 md:flex-col md:space-x-0"
			v-for="f in favlist"
			:key="f.movie_id"
		>
			<button @click="goRoute(f.movie_id)">
				<img :src="getImage(f.poster)" class="h-44 tb:h-52 md:h-60 col-span-2 rounded-lg" />
			</button>
			<div class="space-y-4 mx-4 tb:mx-0 md:mx-0">
				<p class="text-white font-medium text-base mt-2 tracking-wide tb:text-center md:text-center">
					{{ f.moviename }}
				</p>
				<div class="flex space-x-4 tb:flex tb:justify-center tb:space-x-2 md:flex md:justify-center md:space-x-3">
					<p class="text-gray-400 text-xs tracking-wider">{{ releaseDate(f.releasedate) }}</p>

					<p class="text-gray-400 text-xs tracking-wider">{{ f.runtime }} hours</p>
					<!-- <div class="-mt-1">
					<w-icon lg color="amber-light1">mdi mdi-star</w-icon>
					<span class="text-white text-md font-medium">{{ movie.avg_rating }}</span>
					</div>-->
				</div>

				<p
					class="
						text-gray-400 text-xs
						tracking-wider
						w-44
						overflow-hidden
						truncate
						tb:w-36 tb:mx-auto
						md:w-36 md:text-center md:mx-auto
					"
				>
					<span v-for="g in f.movieGenre" :key="g.genre_id">{{ g.genre }} ‧</span>
				</p>
				<div>
					<w-button bg-color="transparent" height="40" @click="removeFromWatchlist(f.movie_id)">
						<div
							class="
								inline-flex
								space-x-3
								border
								px-6
								py-1
								border-gray-300
								mt-5
								rounded-md
								text-center text-sm text-gray-300
								space-x-1
								bg-red-600
							"
						>
							<w-icon lg>mdi mdi-minus</w-icon>
							<p class="my-auto">Remove</p>
						</div>
					</w-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import dateFormat from "dateformat";
import userService from "../services/user-service";
export default {
	data() {
		return {
			stringDate: "",
			favlist: [],
			// dup_user: this.$store.state.auth.user.user,
		};
	},
	methods: {
		async getuserFav() {
			// return userService.getWatchlist();
			const respone = await userService.getWatchlist();
			this.favlist = respone.data;
			console.log(this.favlist);
			// this.favlist = resfav.data;
			// console.log(this.favlist);
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
		},
		releaseDate(date) {
			return dateFormat(date, "mmm dS, yyyy");
		},
		removeFromWatchlist(id) {
			userService
				.removeToWatchlist(id)
				.then((res) => {
					this.$waveui.notify({ message: res.data, color: "success" });
				})
				.catch((error) => {
					this.$waveui.notify({ message: error, color: "error" });
				});
		},
		goRoute(movieId) {
			this.$router.push(`/movie/${movieId}`);
		},
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	created() {
		// this.getuserFav();
		// console.log(this.favlist);
	},
	async mounted() {
		if (this.loggedIn) {
			this.getuserFav();
		}
	},
};
</script>
