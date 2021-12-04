<template>
	<div class="tb:grid tb:grid-cols-5 tb:justify-items-center tb:my-2 md:grid md:grid-cols-6 md:justify-items-center md:my-2">
		<div class="flex my-5 space-x-5 tb:w-40 tb:flex-col tb:space-x-0 md:space-x-0 md:w-40 md:flex-col md:space-x-0">
			<img src="../assets/Lucy.jpg" class="h-44 tb:h-52 md:h-60 col-span-2 rounded-lg" />
			<div class="space-y-4 mx-4 tb:mx-0  md:mx-0 ">
				<p
					class="text-white font-medium text-base mt-2 tracking-wide tb:text-center md:text-center"
				>{{ movie.moviename }}</p>
				<div
					class="flex space-x-4 tb:flex tb:justify-center tb:space-x-2  md:flex md:justify-center md:space-x-3"
				>
					<p class="text-gray-400 text-xs tracking-wider">{{ releaseDate }}</p>

					<p class="text-gray-400 text-xs tracking-wider">{{ movie.runtime }} hours</p>
					<!-- <div class="-mt-1">
					<w-icon lg color="amber-light1">mdi mdi-star</w-icon>
					<span class="text-white text-md font-medium">{{ movie.avg_rating }}</span>
					</div>-->
				</div>

				<p
					class="text-gray-400 text-xs tracking-wider w-44 overflow-hidden truncate tb:w-36 tb:mx-auto md:w-36 md:text-center md:mx-auto"
				>
					<span v-for="g in movie.movieGenre" :key="g.genre_id">{{ g.genre }} ‧</span>
				</p>

				<!-- <div class="inline-flex space-x-1 tb:hidden md:hidden">
					<w-icon md color="amber-light1">mdi mdi-star</w-icon>
					<span class="text-white text-md font-medium my-auto">{{ movie.avg_rating }}</span>
				</div>-->

				<div>
					<w-button bg-color="transparent" height="40">
						<div
							class="inline-flex space-x-3 border px-6 py-1 border-gray-300 mt-5 rounded-md text-center text-sm text-gray-300 space-x-1"
						>
							<w-icon lg>mdi mdi-minus</w-icon>
							<p class="my-auto">Remove</p>
						</div>
					</w-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import dateFormat from "dateformat";
export default {
	// props: ["title", "releaseDate", "genre", "runtime"],
	data() {
		return {
			movie: {
				movie_id: 122,
				moviename: "Lucy",
				runtime: 1.3,
				releasedate: "2014-07-25T00:00:00.000+00:00",
				avg_rating: 5.0,
				poster: "Lucy.jpg",
				trailer: "https://www.youtube.com/embed/l7zAV_MDC68",
				studio: {
					studio_id: 39,
					studioname: "Universal Pictures",
				},
				status: {
					status_id: 20,
					statusname: "general",
				},
				movieGenre: [
					{
						genre_id: 8,
						genre: "Romantic",
					},
					{
						genre_id: 2,
						genre: "Adventure",
					},
					{
						genre_id: 5,
						genre: "Fantacy",
					},
					{
						genre_id: 1,
						genre: "Action",
					},
				],
			},
			stringDate: "",
			// dup_user: this.$store.state.auth.user.user,
		};
	},
	computed: {
		releaseDate() {
			return dateFormat(this.movie.releasedate, "mmmm dS, yyyy");
		},
	},
};
</script>
