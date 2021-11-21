<template>
	<div class="space-y-4">
		<detail-block
			:id="currentMovie.movie_id"
			:name="currentMovie.moviename"
			:releaseDate="currentMovie.releasedate"
			:runtime="currentMovie.runtime"
			:plot="currentMovie.plot"
			:rating="currentMovie.avg_rating"
			:imgPoster="getImage(currentMovie.poster)"
			:trailer="currentMovie.trailer"
		></detail-block>
	</div>
</template>

<script>
import DetailBlock from "../components/DetailBlock.vue";
import movieService from "../services/MovieService";

export default {
	components: {
		"detail-block": DetailBlock,
	},
	data() {
		return {
			currentMovie: [],
		};
	},
	methods: {
		async fecthData() {
			const movie = await movieService.getMovieById(this.$route.params.id);
			// console.log(`This is banner :${banner.data}`);
			this.currentMovie = movie.data;
			console.log(this.currentMovie);
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
		},
	},
	created() {
		this.fecthData();
	},
};
</script>
