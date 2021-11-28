<template>
	<div class="space-y-10 tb:space-y-12 md:space-y-16">
		<div class="md:grid md:grid-flow-row">
			<detail-block></detail-block>
		</div>
		<div class="mb-6 mx-5 tb:mx-8 md:mx-0">
			<p class="text-base mt-1 text-white font-medium md:text-lg uppercase md:mx-14">rates and comments</p>
		</div>
		<comment></comment>
	</div>
</template>

<script>
import Comment from '../components/Comment.vue';
import DetailBlock from "../components/DetailBlock.vue";
// import movieService from "../services/MovieService";
// import userService from "../services/user-service";
export default {
	components: {
		"detail-block": DetailBlock,
		'comment': Comment,
	},
	data() {
		return {
			currentMovie: null,
			// comment: [],
		};
	},
};
</script>
