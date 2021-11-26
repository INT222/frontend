<template>
	<div class="text-white md:grid md:grid-col-4 md:px-7 md:mx-12 tb:mx-6">
		<div v-for="c in comments" :key="c.commentid" class="md:grid md:grid-flow-col md:justify-self-start md:space-x-10">
			<div class="md:text-center md:grid md:grid-row-2 fle md:justify-start">
				<div>
					<p class="font-medium mx-4 tracking-widest">{{ c.username }}</p>
				</div>
				<div class="inline-flex md:flex-col">
					<div>
						<p class="text-gray-500 mx-4 text-sm md:my-2 tracking-widest">{{ c.create_date }}</p>
					</div>
					<div>
						<w-rating class="-mt-1" sm color="yellow" :modelValue="c.rating" readonly></w-rating>
					</div>
				</div>
			</div>
			<div>
				<p class="my-2 md:my-0">
					{{ c.commenttext }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import movieService from "../services/MovieService";
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
		}
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
