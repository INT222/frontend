<template>
	<div class="" v-for="g in movieMatchGenre">
		<find-list-block :imgPoster="g.poster" />
	</div>
</template>

<script>
import FindListBlock from "../components/FindListBlock.vue";
import movieService from "../services/MovieService";

export default {
	components: {
		"find-list-block": FindListBlock,
	},
	data() {
		return {
			movieMatchGenre: [],
		};
	},
	methods: {
		async fecthData() {
			const movie = await movieService.getMovieByGenre(this.$route.params.id);
			// console.log(`This is banner :${banner.data}`);
			this.movieMatchGenre = movie.data;
			console.log(this.movieMatchGenre);
		},
	},
};
</script>
