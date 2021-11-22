<template>
	<div class="md:space-y-11 space-y-6">
		<div name="Slidebanner">
			<vueper-slides
				fade
				:breakpoints="breakpoints"
				:touchable="true"
				autoplay
				@autoplay-resume="internalAutoPlaying = true"
				:bullets="false"
			>
				<!-- <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"></vueper-slide> -->
				<vueper-slide v-for="m in slides" :key="m.movie_id" :image="getImage(m.poster)">
					<template #content>
						<div class="slideText">
							<span style="font-size: 5vw; display: block; margin-bottom: 0.1em; padding: 2px">{{ m.moviename }}</span>
							<span style="font-size: 4vw; opacity: 0.8; padding: 2px">{{ m.studio.studioname }}</span>
						</div>
					</template>
				</vueper-slide>
			</vueper-slides>
			<div class="text-white" v-for="(m, i) in movies" :key="m.movie_id">
				<span class="mb-2 ml-12">
					{{ i }} |

					<span class="ml-4"
						>{{ m.movie_id }} , {{ m.moviename }}, {{ m.studio.studioname }} , {{ m.poster }},
						{{ m.status.statusname }},{{ m.avg_rating }}</span
					></span
				>
			</div>
			<div class="bg-yellow-200" v-for="(m, i) in slides" :key="m.movie_id">
				<span class="mb-2 ml-12">
					{{ i }} |

					<span class="ml-4"
						>{{ m.movie_id }} , {{ m.moviename }}, {{ m.studio.studioname }} , {{ m.poster }}</span
					></span
				>
			</div>
		</div>
		<div class="tb:mx-8 md:mx-12 md:space-y-11 space-y-6 mx-4 bg-pink-800">
			<div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">popular in this month</p>
				<!-- <div v-for="s in slides" :key="s.movie_id" class="bg-yellow-100"></div> -->
				<div class="bg-purple-500 inline-flex md:space-x-28 tb:space-x-10 w-full mb-3">
					<div v-for="m in slides" :key="m.movie_id">
						<!-- <router-link :to="{name:'movie',params:{id:}}" ></router-link> -->
						<!-- <router-link :to="{ name: 'movie', params: { id: item.id } }">{{ item.title }}</router-link> -->
						<button class="bg-yellow-200" @click="goRoute(m.movie_id)">
							<slide-list-block
								class="md:mt-6"
								:moviename="m.moviename"
								:img="getImage(m.poster)"
								:avg_rating="m.avg_rating"
							/>
						</button>
					</div>
				</div>
			</div>
			<div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">coming soon movie</p>
				<block-list class="md:mt-6 mt-3" />
			</div>
			<!-- <div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">explore more</p>
				<explore-list-block class="md:mt-6 mt-3" />
			</div> -->
			<div></div>
		</div>
	</div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import movieService from "../services/MovieService";
// import BlockList from "../components/BlockList.vue";
// import ExploreListBlock from "../components/ExploreListBlock.vue";
import SlideListBlock from "../components/SlideListBlock.vue";
export default {
	name: "Home",
	components: {
		"slide-list-block": SlideListBlock,
		// "block-list": BlockList,
		// "explore-list-block": ExploreListBlock,
		VueperSlides,
		VueperSlide,
	},
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
			for (let step = 0; step < 5; step++) {
				let randNum = Math.floor(Math.random() * this.movies.length);
				this.slides.push(this.movies[randNum]);
			}
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
