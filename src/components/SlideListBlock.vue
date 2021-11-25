<template>
	<div class="mx-auto inline-flex md:space-x-28 tb:space-x-10 mb-3">
		<div class="w-32 tb:w-40 md:w-44" v-for="s in slides" :key="s.movie_id">
			<button @click="goRoute(s.movie_id)">
			<img :src="getImage(s.poster)" class="h-44 rounded-md mx-auto mb-2 tb:h-52 md:h-60" />
			<p class="text-white text-center text-base font-bold leading-snug overflow-hidden uppercase mb-2 mt-2">
				{{ s.moviename }}
			</p>
			<div class="mx-2 tb:mx-7 md:mx-9">
				<w-rating md color="amber-light1" :modelValue="s.avg_rating" readonly></w-rating>
			</div>
			</button>
		</div>
	</div>
</template>

<script>
import movieService from "../services/MovieService";
export default {
	props: {
		img: String,
		moviename: String,
		avg_rating: Number,
	},
	data() {
		return {
			movies: [],
			slides: []
		}
	},
	methods: {
		async fecthData() {
			const banner = await movieService.getAllMovies();
			this.movies = banner.data;
			this.slides = this.movies.slice(0, 5);
			console.log(this.slides);
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}view/img/${imgName}`;
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
