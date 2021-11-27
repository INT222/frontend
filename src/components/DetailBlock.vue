<template>
	<div class="md:w-11/12 md:mx-12">
		<div class="space-y-10 md:px-3">
			<div class="abosolute">
				<div class="tb:hidden md:hidden block absolute ml-4 mt-4">
					<back-button iconcolor="white"></back-button>
				</div>
				<div class="tb:hidden md:hidden block absolute ml-80 mt-4">
					<bookmark-button></bookmark-button>
				</div>
			</div>
			<div class="md:mb-4">
				<span class="hidden md:block md:font-medium md:text-6xl text-white">{{ movie.moviename }}</span>
			</div>
			<div class="hidden tb:block">
				<div class="h-16 rounded-lg shadow-md bg-lightGray transition-shadow duration-300 ease-in-out">
					<div class="rounded-md py-4 grid grid-cols-10 tb:grid-cols-6 px-5">
						<div class="col-span-8 tb:col-span-4">
							<span class="text-white text-xl mr-4">{{ stringDate }}</span>
							<div class="inline-flex" v-for="m in movie.movieGenre" :key="m.genre_id">
								<p class="text-white text-xl">{{ m.genre }}/</p>
							</div>

							<span class="text-white mtext-xl ml-4">{{ movie.runtime }} hours</span>
						</div>
						<div class="flex justify-end space-x-3">
							<w-icon class="" lg color="yellow">mdi mdi-star</w-icon>
							<span class="text-white text-xl font-bold">{{ movie.avg_rating }}</span>
						</div>
						<div class="flex justify-end">
							<bookmark-button></bookmark-button>
						</div>
					</div>
				</div>
			</div>
			<div class="md:mb-6">
				<div class="flex overflow-hidden md:space-x-12 tb:space-x-20">
					<img
						id="poster"
						class="justify-items-stretch transform scale-125 md:w-1/4 md:mx-9 md:shadow md:rounded md:border-none"
						:src="getImage(movie.poster)"
					/>
					<iframe class="hidden md:block tb:block" width="950" :src="movie.trailer" />
				</div>
			</div>

			<div class="ml-5 text-white tb:hidden md:hidden">
				<p class="text-4xl font-medium">{{ movie.moviename }}</p>

				<div class="flex space-x-2 text-gray-400 mt-4">
					<p>{{ stringDate }}</p>
					<p>‧</p>
					<p>{{ this.movie.runtime }} hours</p>
				</div>
				<div class="flex space-x-2 text-gray-400">
					<p v-for="m in movie.movieGenre" :key="m.genre_id">{{ m.genre }}</p>
				</div>
			</div>
			<div class="md:hidden grid grid-cols-2 text-white px-24 sticky top-0 bg-blackBlue">
				<button
					class="px-4 py-2 m-2 tb:w-1/2 tb:mx-auto text-white flex justify-center"
					:class="{
						'text-deepBlue border-t-2 border-deepBlue': toggle === false,
					}"
					@click="toggle = false"
				>
					<span class="text-sm uppercase">details</span>
				</button>
				<button
					class="px-4 py-2 m-2 tb:w-1/2 tb:mx-auto text-white flex justify-center"
					:class="{
						'text-deepBlue border-t-2 border-deepBlue': toggle === true,
					}"
					@click="toggle = true"
				>
					<span class="text-sm uppercase">reviews</span>
				</button>
			</div>
			<p
				v-if="toggle === false"
				class="text-white text-sm mx-5 tb:mx-8 tb:text-justify md:px-0 md:text-xl md:mx-0 md:text-justify"
			>{{ movie.plot }}</p>
		</div>
	</div>
</template>

<script>
import BookMarkButton from "./BookMarkButton.vue";
import BackButton from "./BackButton.vue";
import movieService from "../services/MovieService";
import dateFormat from "dateformat";

export default {
	components: {
		"bookmark-button": BookMarkButton,
		"back-button": BackButton,
	},
	data() {
		return {
			showcomment: false,
			toggle: false,
			movie: [],
			stringDate: "",
		};
	},
	methods: {
		async fecthData() {
			const response = await movieService.getMovieById(this.$route.params.id);
			this.movie = response.data;
			this.stringDate = dateFormat(this.movie.releasedate, "mmmm dS, yyyy");
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
		},
	},
	created() {
		this.fecthData();
	},
};
</script>

<style>
#poster {
	height: 500px;
}

#block {
	width: 1312px;
}
</style>
