<template>
	<w-app>
		<vueper-slides
			fade
			:breakpoints="breakpoints"
			:touchable="true"
			autoplay
			@autoplay-pause="internalAutoPlaying = false"
			@autoplay-resume="internalAutoPlaying = true"
		>
			<vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
				<template #content>
					<div class="slideText">
						<span style="font-size:5vw; background-color: black;display: block; margin-bottom: 0.1em; padding: 2px;">{{
							slide.title
						}}</span>
						<span style="font-size:2vw;  background-color: black;padding: 2px; ">{{ slide.content }}</span>
					</div>
				</template>
			</vueper-slide>
		</vueper-slides>
	</w-app>
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
	bottom: 2em;
	flex-direction: column;
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

export default {
	components: { VueperSlides, VueperSlide },
	data: () => ({
		breakpoints: {
			// 1200: {
			// 	slideRatio: 3 / 5,
			// },
			// 900: {
			// 	slideRatio: 1 / 2,
			// },
			// 600: {
			// 	slideRatio: 1 / 2,
			// 	arrows: false,
			// 	bulletsOutside: false,
			// },
			// 1500: {
			// 	slideRatio: 3 / 5,
			// },
			// 300: {
			// 	slideRatio: 1 / 2,
			// },
			1200: {
				slideRatio: 1 / 5,
			},
			900: {
				slideRatio: 1 / 3,
			},
			600: {
				slideRatio: 1 / 2,
				arrows: false,
				bulletsOutside: true,
			},
			// The order you list breakpoints does not matter, Vueper Slides will sort them for you.
			1100: {
				slideRatio: 1 / 4,
			},
		},
		slides: [
			{
				title: "Jennie Kim, Korea",
				content: "Member of Black Pink",
				image: require("@/assets/Dune.jpg"),
			},
			{
				title: "Black widow",
				content: "Marvel studio",
				image: require("@/assets/BlackWidow.jpg"),
			},
		],
		parallax: 1,
	}),
};
</script>
