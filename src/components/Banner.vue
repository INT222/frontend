<template>
	<w-app>
		<vueper-slides
			:breakpoints="breakpoints"
			fade
			:touchable="true"
			:parallax="parallax"
			ref="myVueperSlides"
			autoplay
			@autoplay-pause="internalAutoPlaying = false"
			@autoplay-resume="internalAutoPlaying = true"
		>
			<vueper-slide
				id="slide"
				v-for="(slide, ) in slides"
				:key="slide.id"
				:image="slide.image"
				:title="slide.title"
				:content="slide.content"
				:style="'text-align:' + 'left'"
			>
			</vueper-slide>
		</vueper-slides>
	</w-app>
</template>
<style>
	#slide{color:white ; text-align: left; font-size: 40px; vertical-align: text-bottom;}
	/* .vueper-slide{} */
</style>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
	components: { VueperSlides, VueperSlide },
	data: () => ({
		breakpoints: {
			1200: {
				slideRatio: 3 / 5
			},
			900: {
				slideRatio: 1 / 2
			},
			600: {
				slideRatio: 1 / 2,
				arrows: false,
				bulletsOutside: false
			},
			1500: {
				slideRatio: 3 / 5
			},
			300: {
				slideRatio: 1 / 2
			}
		},
		slides: [
			{
				id: 'slide-1',
				title: 'Jennie Kim, Korea', 
				content: 'Photo by Max Rive',
				// You can also provide a URL for the image.
				image: require('@/assets/AboutTime.jpg')
			},
			{
				id: 'slide-2',
				title: 'El Teide Volcano, Spain',
				content: 'Photo by Max Rive',
				// You can also provide a URL for the image.
				image: require('@/assets/BlackWidow.jpg')
			},
		],
		parallax: 1,
	}),
}
</script>
