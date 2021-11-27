<template>
	<!-- <div class="mx-auto inline-flex md:space-x-28 tb:space-x-12 mb-3"> -->
		<div class="flex overflow-x-scroll pb-10 hide-scroll-bar md:pb-0 md:flex-none md:overflow-x-hidden">
			<div class="flex flex-nowrap md:flex-none">
				<div class="inline-flex md:space-x-24 tb:space-x-12 md:flex-none">
					<div class="w-32 mx-auto tb:w-40 md:w-44" v-for="s in slides" :key="s.movie_id">
						<button @click="goRoute(s.movie_id)">
							<img
								:src="getImage(s.poster)"
								class="max-w-xs overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out h-44 rounded-md mb-2 tb:h-52 md:h-60"
							/>
							<p
								class="text-white text-center text-base font-medium leading-snug overflow-hidden truncate tb:truncate tb:overflow-hidden w-32 md:w-40 tb:w-36 uppercase mb-2 mt-2"
							>{{ s.moviename }}</p>
							<div class="mx-2 tb:mx-7 md:mx-9">
								<w-rating xs color="amber-light1" :modelValue="s.avg_rating" readonly></w-rating>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	<!-- </div> -->
</template>

<script>
import movieService from "../services/MovieService";
export default {
	props: {
		img: String,
		moviename: String,
		avg_rating: Number,
	},
	data() {
		return {
			movies: [],
			slides: []
		}
	},
	methods: {
		async fecthData() {
			const banner = await movieService.getTop5Movie();
			this.slides = banner.data;
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
		},
		goRoute(movieId) {
			this.$router.push(`/movie/${movieId}`);
		},
	},
	created() {
		this.fecthData();
	},
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
