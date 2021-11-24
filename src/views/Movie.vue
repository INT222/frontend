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
		<div class="bg-red-500">
			<!-- <comment-block
				:username="currentMovie.comments[0].username"
				:commentDate="currentMovie.comments[0].create_date"
				:commentText="currentMovie.comments[0].commenttext"
				:rating="currentMovie.comments[0].rating"
			></comment-block> -->
		</div>
		<div class="bg-red-500"></div>
		<!-- <div class="text-white">
			{{ currentMovie.comments }}
		</div> -->
	</div>
</template>

<script>
import DetailBlock from "../components/DetailBlock.vue";
import movieService from "../services/MovieService";
// import CommentBlock from "../components/CommentBlock.vue";
import userService from "../services/user-service";
import CommentForm from "../components/CommentForm.vue";

export default {
	components: {
		"detail-block": DetailBlock,
		// "comment-block": CommentBlock,
		"comment-form": CommentForm,
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
			return `${process.env.VUE_APP_BACKEND_URL}view/img/${imgName}`;
		},
	},
	created() {
		this.fecthData();
	},
};
</script>
