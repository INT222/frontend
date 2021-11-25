<template>
	<div>
		<vueper-slides :breakpoints="breakpoints" :bullets="false">
			<vueper-slide v-for="s in slides" :key="s.movie_id" :image="getImage(s.poster)">
				<template #content>
					<div class="slideText">
						<span style="font-size: 5vw; display: block; margin-bottom: 0.1em; padding: 2px">{{ s.moviename }}</span>
						<span style="font-size: 4vw; opacity: 0.8; padding: 2px">{{ s.studio.studioname }}</span>
					</div>
				</template>
			</vueper-slide>
		</vueper-slides>

		<div class="text-white" v-for="(m, i) in slides" :key="m.movie_id">
			<span class="mb-2 ml-12">
				{{ i }} |

				<span class="ml-4">{{ m.movie_id }} , {{ m.moviename }}, {{ m.studio.studioname }} , {{ m.poster }}</span></span
			>
		</div>
		<div class="bg-yellow-200" v-for="(m, i) in slides" :key="m.movie_id">
			<span class="mb-2 ml-12">
				{{ i }} |

				<span class="ml-4">{{ m.movie_id }} , {{ m.moviename }}, {{ m.studio.studioname }} , {{ m.poster }}</span></span
			>
		</div>
	</div>
</template>
<style>
/* .vueperslide__title {
	color: white;
	margin-top: 8em;
	margin-right: 20em;
	font-size: 50px;
}*/

/* .vueperslide__content {
	margin-right: 50em;
	font-size: 25px;
	color: greenyellow;
} */
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
			// console.log(`This is banner :${banner.data}`);
			this.movies = banner.data;
			for (let step = 0; step < 5; step++) {
				let randNum = Math.floor(Math.random() * this.movies.length);
				this.slides.push(this.movies[randNum]);
			}
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
