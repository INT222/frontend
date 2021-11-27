<template>
	<div class="md:w-11/12 md:mx-12">
		<div class="bg-blackBlue space-y-10 md:px-3">
			<div class="md:hidden block absolute ml-4 mt-4">
				<back-button iconcolor="white"></back-button>
			</div>
			<div class="md:hidden block absolute ml-60 mt-6">
				<bookmark-button></bookmark-button>
			</div>
			<div class="md:mb-4">
				<span class="hidden md:block md:font-medium md:text-6xl text-white">{{ movie.moviename }}</span>
			</div>
			<div class="pr-6">
				<div
					id="block"
					class="hidden md:bg-lightGray md:rounded-md md:mb-6 md:grid md:grid-cols-8 md:border-transparent md:h-16"
				>
					<div id="block" class="hidden md:inline-block md:rounded-md md:mb-6 md:py-4">
						<div class="md:inline-flex md:col-span-7 md:space-x-4 md:px-5">
							<div class="md:px-5">
								<span class="md:text-white md:text-xl md:mr-4">{{ stringDate }}</span>
								<div class="md:inline-flex" v-for="m in movie.movieGenre" :key="m.genre_id">
									<p class="md:text-white md:text-xl">{{ m.genre }}/</p>
								</div>
								<span class="md:text-white md:text-xl md:ml-4">{{ movie.runtime }} hours</span>
							</div>
							<div class="md:inline-flex md:space-x-3 md:mx-72 md:mr-7">
									<w-icon class="mt-0" md color="yellow">mdi mdi-star</w-icon>
									<span class="md:text-white md:text-xl md:font-bold">{{ movie.avg_rating }}</span>
								</div>
							<!-- <div class="md:inline-flex md:justify-end md:space-x-3 md:col-span-5"> -->
								
								<div class="md:flex md:justify-items-end">
									<bookmark-button></bookmark-button>
								</div>
							<!-- </div> -->
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
			<div class="space-y-2 md:inline-flex">
				<span
					id="movie-detail"
					class="md:hidden block absolute left-4 text-sm font-semibold text-white"
				>| {{ stringDate }}</span>
				<span v-for="m in movie.movieGenre" :key="m.genre_id">{{ m.genre }}</span>‧
				<span>{{ this.movie.runtime }} hours</span>
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
				class="text-white text-sm tb:px-6 md:px-0 md:text-xl md:text-justify"
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
			this.stringDate = dateFormat(this.movie.releasedate,"mmmm dS, yyyy");
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}view/img/${imgName}`;
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
#movie-detail {
	top: 420px;
}
#block {
	width: 1312px;
}
</style>
