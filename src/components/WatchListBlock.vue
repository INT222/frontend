<template>
	<div class="w-full grid grid-cols-5 my-5 tb:grid-cols-1 md:grid-cols-1">
		<div class="col-span-3 mt-3 mx-4 tb:text-center md:text-center">
			<p class="text-white font-medium text-base mt-2 mb-3 tracking-wide tb:mb-2 md:mb-2">{{ movie.moviename }}</p>
			<div class="hidden tb:space-x-2 tb:inline-flex tb:space-x-2 md:inline-flex">
				<p class="text-gray-400 text-xs tracking-wider mb-3 tb:mb-2 md:mb-2">{{ releaseDate }}</p>
				<div class="-mt-1">
					<w-icon lg color="amber-light1">mdi mdi-star</w-icon>
					<span class="text-white text-md font-medium">{{ movie.avg_rating }}</span>
				</div>
			</div>

			<p class="text-gray-400 text-xs tracking-wider mb-3 tb:overflow-hidden md:overflow-hidden">
				<span v-for="g in movie.movieGenre" :key="g.genre_id"> {{ g.genre }} ‧ </span>{{ movie.runtime }}
			</p>
			<div class="inline-flex space-x-2 tb:hidden md:hidden">
				<w-icon lg color="amber-light1">mdi mdi-star</w-icon>
				<span class="text-white text-md font-medium my-auto">{{ movie.avg_rating }}</span>
			</div>
			<div class="mx-auto">
				<w-button bg-color="transparent" height="40">
					<div
						class="
							inline-flex
							space-x-3
							border
							px-6
							py-1
							border-gray-300
							mt-5
							rounded-md
							text-center text-sm text-gray-300
							space-x-1
						"
					>
						<w-icon lg>mdi mdi-minus</w-icon>
						<p class="my-auto">Remove</p>
					</div>
				</w-button>
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
