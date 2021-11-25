<template>
	<div class="md:inline-flex md:space-x-14 space-y-11">
		<div
			v-for="m in lists"
			:key="m.movie_id"
			class="w-full grid grid-cols-5 my-3 tb:w-44 tb:grid-cols-1 md:grid-cols-1 md:grid-flow-row md:w-1/5 md:h-1/2"
		>
			<div>
				<button @click="goRoute(m.movie_id)">
				<img
					:src="getImage(m.poster)"
					class="h-48 col-span-2 flex-none bg-cover rounded-md tb:h-52 tb:rounded-md tb:mx-auto md:rounded-lg md:h-60 md:mx-auto"
				/>
				</button>
				<div class="md:mb-10">
						<div class="col-span-3 mt-3 mx-4 tb:mx-auto md:mx-auto">
							<p
								class="text-white font-medium text-base mt-2 mb-4 tracking-wide tb:text-center tb:mb-2 md:text-center md:mb-2"
							>{{ m.moviename }}</p>
						</div>
						<!-- <p
						class="text-gray-400 text-sm tracking-wider mb-3 tb:text-center tb:mb-2 md:text-center md:mb-2"
						>{{ m.releasedate }}</p>-->
						<div class="md:text-center md:overflow-hidden md:truncate md:w-44">
							<div
								v-for="g in m.movieGenre"
								:key="g.genre_id"
								class="inline-flex text-gray-400 text-sm tracking-wider mb-1 tb:text-center md:space-x-1"
							>
								<p>{{ g.genre }}/</p>
							</div>
						</div>
						<p
							class="text-gray-400 text-sm tracking-wider mb-1 tb:text-center md:text-center"
						>{{ m.runtime }} hours</p>
				</div>
			</div>
			<fav-button />
			<hr class="w-80 mx-3 border border-gray-500 mb-3 mt-3 tb:hidden md:hidden" />
		</div>
	</div>
</template>

<script>
import FavButton from "./FavButton.vue";
import movieService from "../services/MovieService";

export default {
	components: {
		"fav-button": FavButton,
	},
	// props: { name: String, releaseDate: String, genre: Object, runtime: Number, imgPoster: String },
	data() {
		return {
			movies: [],
			lists: []
		}
	},
	methods: {
		async fetchData() {
			const movies = await movieService.getUpcommingMovie();
			this.lists = movies.data;
			console.log(this.lists);
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
