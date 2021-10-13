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
					<div
						class="vueperslide__content-wrapper"
						style="flex-direction: column; color: white; margin-top: 10%; margin-right: 50%; "
					>
						<span>{{ slide.title }}</span>
						<span>{{ slide.content }}</span>
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
}
.vueperslide__content {
	margin-right: 50em;
	font-size: 25px;
	color: greenyellow;
} */
/* .vueperslide__content-wrapper {
	color: white;
	font-size: 10px;
} */
</style>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
	components: { VueperSlides, VueperSlide },
	data: () => ({
		breakpoints: {
			1200: {
				slideRatio: 3 / 5,
			},
			900: {
				slideRatio: 1 / 2,
			},
			600: {
				slideRatio: 1 / 2,
				arrows: false,
				bulletsOutside: false,
			},
			1500: {
				slideRatio: 3 / 5,
			},
			300: {
				slideRatio: 1 / 2,
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
