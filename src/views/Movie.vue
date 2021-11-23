<template>
	<div class="md:grid md:grid-rows-3 md:mx-auto md:w-9/12 md;h-auto">
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
	<div class="space-y-4 mx-auto md:grid md:grid-rows-3 md:mx-auto md:w-auto md:h-auto">
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
		<!-- <comment-block :username="currentMovie.comment."></comment-block> -->
		<div class="text-white">
			{{ currentMovie.comments }}
		</div>
	</div>
</template>

<script>
import DetailBlock from "../components/DetailBlock.vue";
import movieService from "../services/MovieService";
// import CommentBlock from "../components/CommentBlock.vue";

export default {
	components: {
		"detail-block": DetailBlock,
		// "comment-block":CommentBlock
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
