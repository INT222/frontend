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
			<vueper-slide
				v-for="(slide, i) in slides"
				:key="i"
				:image="slide.image"
				:title="slide.title"
				:content="slide.content"
			></vueper-slide>
		</vueper-slides>
	</w-app>
</template>
<style>
.vueperslide__title {
	color: white;
	margin-top: 25%;
	margin-left: -50%;
	font-size: 6vw;
}
.vueperslide__content {
	color:white;
	opacity: 0.8;
	margin-top:-1%;
	margin-left: -50%;
	font-size: 4vw;
}
</style>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
	components: { VueperSlides, VueperSlide },
	data: () => ({
		breakpoints: {
			600: {
				slideRatio: 1 / 2,
				arrows: false,
			},
			1400:{
				slideRatio: 2 / 5,
			},
			1500: {
				slideRatio: 3 / 5,
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
	}),
};
</script>
