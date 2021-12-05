<template>
	<div>
		<vueper-slides :breakpoints="breakpoints" :bullets="false">
			<vueper-slide @click="goRoute(s.movie_id)" v-for="s in slides" :key="s.movie_id" :image="getImage(s.poster)">
				<template #content>
					<div class="slideText">
						<span style="font-size: 5vw; display: block; margin-bottom: 0.1em; padding: 2px">{{ s.moviename }}</span>
						<span style="font-size: 4vw; opacity: 0.8; padding: 2px">{{ s.studio.studioname }}</span>
					</div>
				</template>
			</vueper-slide>
		</vueper-slides>
	</div>
</template>
<style>
.slideText {
	bottom: 1em;
	flex-direction: column;
	justify-content: flex-start;
	margin-left: 1rem;
	/* margin-top: 10rem; */
	position: absolute;
	left: 16px;
	color: white;
	text-align: left;
}
</style>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import movieService from "../services/MovieService";
export default {
	// name: "Banner",
	components: { VueperSlides, VueperSlide },
	// props: [image,],
	data: () => ({
		breakpoints: {
			600: {
				slideRatio: 1 / 2,
				arrows: false,
			},
			1400: {
				slideRatio: 2 / 5,
			},
			1500: {
				slideRatio: 3 / 5,
			},
		},
		slides: [],
		parallax: 1,
		movies: [],
	}),
	methods: {
		async fecthData() {
			const banner = await movieService.getAllMovies();
			this.movies = banner.data;
			this.slides.push(this.movies[16]);
			for (let step = 0; step < 5; step++) {
				let randNum = Math.floor(Math.random() * this.movies.length);
				this.slides.push(this.movies[randNum]);
			}
			// console.log(this.slides);
		},
		getImage(imgName) {
			return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
		},
		goRoute(movieId) {
			this.$router.push(`/movie/${movieId}`);
		},
	},
	async created() {
		this.fecthData();
	},
};
</script>
