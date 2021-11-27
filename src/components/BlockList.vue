<template>
	<!-- <div class="md:inline-flex tb:grid tb:grid-cols-3"> -->
	<div
		class="flex overflow-x-scroll pb-10 hide-scroll-bar md:pb-0 tb:pb-0 md:flex-none md:overflow-x-hidden"
	>
		<div class="flex flex-nowrap md:flex-none tb:flex-none">
			<div class="inline-flex space-x-4 md:flex-none md:space-x-9">
				<div v-for="m in lists" :key="m.movie_id" class="inline-flex md:flex-col">
					<button @click="goRoute(m.movie_id)" class="col-span-2 md:mx-auto">
						<img
							:src="getImage(m.poster)"
							class="max-w-xs overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out h-48 rounded-md tb:h-52 tb:rounded-md md:h-60 md:rounded-lg"
						/>
					</button>
					<div class="col-span-3 mt-3 mx-6 md:mx-0 space-y-2 md:col-span-1 md:mb-10 tb:mt-7">
						<div class="md:mx-auto">
							<p
								class="text-white font-medium text-base mb-4 tracking-wide tb:mb-2 md:text-center md:mb-2"
							>{{ m.moviename }}</p>
						</div>

						<div class="tb:w-44 text-gray-400 truncate tb:truncate md:text-center md:truncate md:w-48">
							<div
								v-for="g in m.movieGenre"
								:key="g.genre_id"
								class="inline-flex text-sm tracking-widertb:text-center md:space-x-1 tb:mt-4"
							>
								<p>{{ g.genre }}/</p>
							</div>
						</div>
						<div class="tb:flex md:flex md:space-x-2 md:ml-3 tb:space-x-4">
							<p
								class="text-gray-400 text-sm tracking-wider mb-2 tb:mt-4 tb:text-center tb:mb-2 md:text-center md:mb-2"
							>{{ stringDate }}</p>
							<p
								class="text-gray-400 text-sm tracking-wider mb-5 tb:mt-4 tb:text-center md:text-center"
							>{{ m.runtime }} hours</p>
						</div>
						<div class="md:ml-2">
							<fav-button />
						</div>
					</div>
					<!-- <hr class="w-80 mx-3 border border-gray-500 mb-3 mt-3 tb:hidden md:hidden" /> -->
				</div>
			</div>
		</div>
	</div>
	<!-- </div> -->
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
			return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
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
<style scoped>
.hide-scroll-bar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
	display: none;
}
</style>
