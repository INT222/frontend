<template>
	<vueper-slides
		fade
		:breakpoints="breakpoints"
		:touchable="true"
		autoplay
		@autoplay-resume="internalAutoPlaying = true"
		:bullets="false"
	>
		<vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
			<template #content>
				<div class="slideText">
					<span style="font-size: 5vw; display: block; margin-bottom: 0.1em; padding: 2px;">{{ slide.title }}</span>
					<span style="font-size: 4vw; opacity: 0.8; padding: 2px;">{{ slide.content }}</span>
				</div>
			</template>
		</vueper-slide>
	</vueper-slides>
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

export default {
	name: "Banner",
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
		slides: [
			{
				title: "Jennie Kim, Korea",
				content: "Member of Black Pink",
				image: require("@/assets/Eternals.jpg"),
			},
			{
				title: "Black widow",
				content: "Marvel studio",
				image: require("@/assets/BlackWidow.jpg"),
			},
			{
				title: "Black widow",
				content: "Marvel studio",
				image: require("@/assets/LoveSimon.jpg"),
			},{
				title: "Black widow",
				content: "Marvel studio",
				image: require("@/assets/LaLaLand.jpg"),
			},
		],
		parallax: 1,
	}),
};
</script>
