<template>
	<div class="mx-5 tb:mx-8 text-white md:grid md:grid-col-4 md:mx-12 space-y-5 tb:space-y-20">
		<div
			v-for="c in comments"
			:key="c.commentid"
			class="md:grid md:grid-flow-col md:justify-self-start md:space-x-10 tb:flex tb:space-x-20"
		>
			<div class="md:text-center md:grid md:grid-row-2 md:justify-start">
				<div>
					<p class="font-medium mx-4 md:text-lg tracking-widest tb:text-base">{{ c.username }}</p>
				</div>
				<div class="inline-flex md:flex-col">
					<div>
						<p class="text-gray-500 mx-4 text-sm md:my-2 tracking-widest">{{ c.create_date }}</p>
					</div>
					<div>
						<w-rating xs color="yellow" :modelValue="c.rating" readonly></w-rating>
					</div>
				</div>
			</div>
			<div>
				<p class="my-2 text-sm md:text-base md:my-0 tracking-wide tb:text-base">
					{{ c.commenttext }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import movieService from "../services/movie-service";
export default {
	props: {
		username: String,
		commentDate: String,
		commentText: String,
		rating: Number,
	},
	data() {
		return {
			comments: [],
		};
	},
	methods: {
		async fecthData() {
			const response = await movieService.getCommentByMovieId(this.$route.params.id);
			this.comments = response.data;
		},
	},
	created() {
		this.fecthData();
	},
};
</script>
