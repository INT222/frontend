<template>
	<w-app>
		<vueper-slides
			ref="myVueperSlides"
			fade
			:breakpoints="breakpoints"
			:touchable="true"
			autoplay
			@autoplay-pause="internalAutoPlaying = false"
			@autoplay-resume="internalAutoPlaying = true"
		>
			<vueper-slide
			class="slideText"
				v-for="(slide,i) in slides"
				:key="i"
				:image="slide.image"
				:title="slide.title"
				:content="slide.content"
			></vueper-slide>
		</vueper-slides>
	</w-app>
</template>
<style>
 .slideText {
	color: #7FFFD4;
	font-size: 100px;
	font-weight: 900;
} 
/* .vueper-slide__title {
	font-size:100px;
}  */
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