<template>
	<div class="md:space-y-11 space-y-6">
		<banner />
		<p
			class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium md:mx-6 tb:mx-4 mx-2"
		>Suggest for you</p>
		<div class="md:mx-24 tb:ml-7 w-full mb-3">
			<slide-list-block></slide-list-block>
		</div>
		<p
			class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium md:mx-6 tb:mx-4 mx-2"
		>coming soon movie</p>
		<div class="mx-5 tb:ml-7 md:mx-11">
			<block-list />
		</div>
		<p
			class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium md:mx-6 tb:mx-4 mx-2"
		>Explore more</p>
		<div class="tb:ml-9 md:mx-9">
			<explore-list-block></explore-list-block>
		</div>
		<div>
			<!-- <div class="text-white" v-for="(m, i) in movies" :key="m.movie_id">
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
			</div>-->
		</div>

		<div class="tb:mx-8 md:mx-12 md:space-y-11 space-y-6 mx-4 bg-pink-800">
			<!-- <div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">popular in this month</p>
				<div v-for="s in slides" :key="s.movie_id" class="bg-yellow-100"></div>
				<div class="bg-purple-500 inline-flex md:space-x-28 tb:space-x-10 w-full mb-3">
					<div v-for="m in slides" :key="m.movie_id">
						<router-link :to="{name:'movie',params:{id:}}" ></router-link>
						<router-link :to="{ name: 'movie', params: { id: item.id } }">{{ item.title }}</router-link>
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
			</div>-->

			<!-- <div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">explore more</p>
				<explore-list-block class="md:mt-6 mt-3" />
			</div>-->
			<!-- <div>{{ getUser() }}</div> -->
		</div>
	</div>
</template>
<script>
// import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
// import movieService from "../services/MovieService";
import Banner from "../components/Banner.vue";
import BlockList from "../components/BlockList.vue";
import ExploreListBlock from "../components/ExploreListBlock.vue";
import SlideListBlock from "../components/SlideListBlock.vue";
export default {
	name: "Home",
	components: {
		"slide-list-block": SlideListBlock,
		banner: Banner,
		"block-list": BlockList,
		"explore-list-block": ExploreListBlock,
	},
	data: () => ({
		breakpoints: {
			600: {
				slideRatio: 1 / 2,
				arrows: false,
			},
			1300: {
				slideRatio: 3 / 4,
			},
			1200: {
				slideRatio: 2 / 3,
			},
			// 1500: {
			// 	slideRatio: 3 / 5,
			// },
		},
		slides: [],
		movies: [],
	}),
	// methods: {
	// 	async fecthData() {
	// 		const banner = await movieService.getAllMovies();
	// 		this.slides = banner.data.slice(4);
	// 		// for (let step = 0; step < 5; step++) {
	// 		// 	this.slides.push(this.movies[step]);
	// 		// }
	// 		console.log(this.slides);
	// 	},
	// 	getImage(imgName) {
	// 		return `${process.env.VUE_APP_BACKEND_URL}view/img/${imgName}`;
	// 	},
	// 	goRoute(movieId) {
	// 		this.$router.push(`/movie/${movieId}`);
	// 	},
	// 	getUser() {
	// 		return localStorage.getItem("user");
	// 	},
	// },
	// created() {
	// 	this.fecthData();
	// },
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
