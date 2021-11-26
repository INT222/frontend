<template>
	<div class="md:inline-flex md:space-x-14 tb:grid tb:grid-cols-3">
		<div v-for="m in lists" :key="m.movie_id" class="grid grid-cols-5 my-3 md:grid-cols-1">
			<button @click="goRoute(m.movie_id)" class="col-span-2 tb:mx-auto md:mx-auto">
				<img
					:src="getImage(m.poster)"
					class="h-48 rounded-md tb:h-52 tb:rounded-md md:h-60 md:rounded-lg"
				/>
			</button>
			<div class="col-span-3 mt-3 mx-4 md:mx-0 space-y-5 md:col-span-1 md:mb-10">
				<div class="tb:mx-auto md:mx-auto">
					<p
						class="text-white font-medium text-base mt-2 mb-4 tracking-wide tb:mb-2 md:text-center md:mb-2"
					>{{ m.moviename }}</p>
				</div>

				<div class="tb:w-44 text-gray-400 tb:truncate md:text-center md:truncate md:w-48">
					<div
						v-for="g in m.movieGenre"
						:key="g.genre_id"
						class="inline-flex text-sm tracking-wider mb-1 tb:text-center md:space-x-1"
					>
						<p>{{ g.genre }}/</p>
					</div>
				</div>
				<div class="tb:flex md:flex space-x-5 md:space-x-2 tb:space-x-4">
					<p
						class="text-gray-400 text-sm tracking-wider mb-3 tb:text-center tb:mb-2 md:text-center md:mb-2"
					>{{ stringDate }}</p>
					<p
						class="text-gray-400 text-sm tracking-wider mb-1 tb:text-center md:text-center"
					>{{ m.runtime }} hours</p>
				</div>

				<fav-button />
			</div>
			<hr class="w-80 mx-3 border border-gray-500 mb-3 mt-3 tb:hidden md:hidden" />
		</div>
	</div>
</template>

<script>
import FavButton from "./FavButton.vue";
import movieService from "../services/MovieService";
import dateFormat from "dateformat";

export default {
	components: {
		"fav-button": FavButton,
	},
	data() {
		return {
			movies: [],
			lists: [],
			stringDate: ""
		}
	},
	methods: {
		async fetchData() {
			const movies = await movieService.getUpcommingMovie();
			this.lists = movies.data;
			this.stringDate = dateFormat(this.lists.releasedate, "mmm dS, yyyy");

		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}view/img/${imgName}`;
		},
		goRoute(movieId) {
			this.$router.push(`/movie/${movieId}`);
		},
	},
	created() {
		this.fetchData();
	}
};
</script>
