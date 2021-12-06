<template>
	<div>
		<div
			v-for="m in movieMatchGenre"
			:key="m.movie_id"
			class="inline-flex p-4 md:mx-7 md:ml-0 ml-6 md:grid-cols-6 md:grid-flow-row"
		>
			<button @click="goRoute(m.movie_id)">
				<img :src="getImage(m.poster)" class="h-48 tb:h-52 md:h-60 rounded-md md:rounded-lg overflow-hidden" />
			</button>
		</div>
	</div>
</template>
<script>
import movieService from "../services/movie-service";
export default {
	props: { imgPoster: String },
	data() {
		return {
			movieMatchGenre: [],
		};
	},
	methods: {
		async fecthData() {
			const movie = await movieService.getMovieByGenre(this.$route.params.id);
			this.movieMatchGenre = movie.data;
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
