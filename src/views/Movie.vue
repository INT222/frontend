<template>
	<div class="space-y-10 tb:space-y-12 md:space-y-16">
		<div class="md:grid md:grid-flow-row md:w-9/12">
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
		<comment-block
			:username="currentMovie.comments[0].username"
			:commentDate="currentMovie.comments[0].create_date"
			:commentText="currentMovie.comments[0].commenttext"
			:rating="currentMovie.comments[0].rating"
		></comment-block>
		<comment-form></comment-form>
		<!-- <div class="bg-red-500">  -->
		<!-- <comment-block
				:username="currentMovie.comments[0].username"
				:commentDate="currentMovie.comments[0].create_date"
				:commentText="currentMovie.comments[0].commenttext"
				:rating="currentMovie.comments[0].rating"

=======
		></comment-block>-->
		<!-- </div> -->
		<!-- <div class="bg-red-500"> -->
		<!-- <comment-block
				:username="currentMovie.comments[0].username"
				:commentDate="currentMovie.comments[0].create_date"
				:commentText="currentMovie.comments[0].commenttext"
				:rating="currentMovie.comments[0].rating"
		></comment-block>-->
		<!-- </div> -->
		<!-- <div class="text-white">
			{{ currentMovie.comments }}
		</div>-->
		<!-- </div> -->
	</div>
</template>

<script>
import DetailBlock from "../components/DetailBlock.vue";
import movieService from "../services/MovieService";
// import userService from "../services/user-service";
import CommentForm from "../components/CommentForm.vue";
import CommentBlock from "../components/CommentBlock.vue";

export default {
	components: {
		"detail-block": DetailBlock,
		"comment-form": CommentForm,
		"comment-block": CommentBlock,
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
