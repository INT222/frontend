<template>
	<w-app>
		<vueper-slides
			ref="myVueperSlides"
			fade
			:breakpoints="breakpoints"
			:touchable="true"
			:parallax="parallax"
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
			></vueper-slide>
		</vueper-slides>
	</w-app>
</template>
<style>
#slide {
	color: yellowgreen;
	font-size: 100px;
	font-weight: 900;
	text-align: left;
	
}
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
				title: 'Jennie Kim, Korea',
				content: 'Member of Black Pink',
				// You can also provide a URL for the image.
				image: require('@/assets/AboutTime.jpg')
			},
			{
				title: 'Black widow',
				content: 'Marvel studio',
				// You can also provide a URL for the image.
				image: require('@/assets/BlackWidow.jpg')
			},
		],
		parallax: 1,
	}),
}
</script>