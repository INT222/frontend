<template>
	<div
		class="
			space-y-5
			md:flex
			tb:grid tb:grid-cols-3 tb:space-y-0 tb:space-x-4
			md:gird md:grid-cols-3 md:grid-rows-2 md:space-y-0 md:space-x-9
		"
	>
		<!--Box 1-->
		<div v-for="s in slides" :key="s.movie_id" class="rounded-md overflow-hidden shadow-lg">
			<button @click="goRoute(s.movie_id)">
				<img :src="getImage(s.poster)" class="w-full h-48 object-cover" />
				<div class="px-6 py-4 bg-gray-700">
					<div class="font-bold text-xl mb-2 text-white">{{ s.title }}</div>
					<p id="plot" class="text-white text-base text-left md:w-96">{{ s.plot }}</p>
					<div>
						<span
							class="
								pt-2
								text-sm
								font-medium
								flex
								justify-end
								text-deepBlue
								tb:pt-1 tb:text-base
								md:focus:text-blue-500
							"
							>Read More</span
						>
					</div>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
import movieService from "../services/movie-service";
export default {
	props: ["title", "plot"],
	data() {
		return {
			slides: [],
			movies: [],
		};
	},
	methods: {
		async fecthData() {
			const response = await movieService.getAllMovies();
			this.movies = response.data;
			for (let step = 0; step < 3; step++) {
				let randNum = Math.floor(Math.random() * this.movies.length);
				this.slides.push(this.movies[randNum]);
			}
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
		},
		goRoute(movieId) {
			this.$router.push(`/movie/${movieId}`);
		},
	},
	created() {
		this.fecthData();
	},
};
</script>

<style scoped>
#plot {
	height: 6rem;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
