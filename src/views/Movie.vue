<template>
	<Suspense>
		<div class="space-y-10 tb:space-y-12 md:space-y-16">
			<div class="md:grid md:grid-flow-row md:w-9/12">
				<detail-block
					:name="currentMovie.moviename"
					:releaseDate="currentMovie.releasedate"
					:runtime="currentMovie.runtime"
					:plot="currentMovie.plot"
					:rating="currentMovie.avg_rating"
					:imgPoster="getImage(currentMovie.poster)"
					:trailer="currentMovie.trailer"
				></detail-block>
			</div>
			<div class="mb-6">
				<p class="text-base mt-1 text-white font-medium md:text-lg uppercase">rates and comments</p>
			</div>
			<div v-for="c in currentMovie.comments" :key="c.commentid">
				<comment-block
					:username="c.username"
					:commentDate="c.create_date"
					:commentText="c.commenttext"
					:rating="c.rating"
				/>
			</div>

			<comment-form></comment-form></div
	></Suspense>
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
			currentMovie: null,
			comment: [],
		};
	},
	methods: {
		async fecthData() {
			const movie = await movieService.getMovieById(this.$route.params.id);
			this.currentMovie = movie.data;
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
