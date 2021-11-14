<template>
	<w-app>
		<div class="bg-blackBlue w-screen space-y-10 md:px-7">
			<div class="md:mx-9">
				<div class="md:hidden block absolute ml-4 mt-4">
					<back-button iconcolor="white"></back-button>
				</div>
				<div class="md:hidden block absolute ml-60 mt-6">
					<bookmark-button></bookmark-button>
				</div>
				<div class="md:mb-4">
					<span class="hidden md:block md:font-medium md:text-6xl text-white">{{ title }}</span>
				</div>
				<div
					class="hidden md:bg-lightGray md:rounded-md md:mb-6 md:py-4 md:grid md:grid-cols-8 md:px-6"
				>
					<div class="md:inline-flex md:col-span-5 md:space-x-4">
						<span class="md:text-white md:text-xl">{{ releaseDate }}</span>
						<span class="md:text-white md:text-xl">{{ genre }} ‧</span>
						<span class="md:text-white md:text-xl">{{ runtime }} hours</span>
					</div>
					<div class="md:inline-flex md:justify-end md:space-x-3 md:col-span-2">
						<w-icon class="mt-0" xl color="yellow">mdi mdi-star</w-icon>
						<span class="md:text-white md:text-xl md:font-bold">{{ rating }}</span>
					</div>
					<div class="md:flex md:justify-start md:mt-2 md:mx-5">
						<bookmark-button></bookmark-button>
					</div>
				</div>
				<div class="md:mb-6">
					<div class="flex overflow-hidden tb:inline-flex md:inline-flex md:space-x-12 tb:space-x-20">
						<img
							id="poster"
							class="justify-items-stretch transform scale-125 md:w-1/4 md:mx-9 md:shadow md:rounded md:border-none"
							src="../assets/Eternals.jpg"
						/>
						<iframe
							class="hidden md:block tb:block"
							width="950"
							height="521"
							src="https://www.youtube.com/embed/tgbNymZ7vqY/"
						/>
					</div>
					<div class="space-y-2">
						<span class="md:hidden absolute top-96 left-4 text-4xl font-semibold text-white">{{ title }}</span>
						<span
							id="movie-detail"
							class="md:hidden absolute left-4 text-sm font-semibold text-white"
						>{{ releaseDate }} {{ genre }} ‧ {{ runtime }} hours</span>
					</div>
				</div>
				<div class="md:hidden grid grid-cols-2 text-white px-24 sticky top-0 bg-blackBlue">
					<button
						class="px-4 py-2 m-2 tb:w-1/2 tb:mx-auto text-white flex justify-center"
						:class="{
							'text-deepBlue border-t-2 border-deepBlue': toggle === false,
						}"
						@click="toggle = false"
					>
						<span class="text-sm uppercase">details</span>
					</button>
					<button
						class="px-4 py-2 m-2 tb:w-1/2 tb:mx-auto text-white flex justify-center"
						:class="{
							'text-deepBlue border-t-2 border-deepBlue': toggle === true,
						}"
						@click="toggle = true"
					>
						<span class="text-sm uppercase">reviews</span>
					</button>
				</div>
					<span
						v-if="toggle === false"
						class="text-white text-sm md:text-xl">{{ plot }}</span>
			</div>
			<div v-if="toggle === true">
			<comment-form />
			<comment-block />
			</div>
		</div>
	</w-app>
</template>

<script>
import CommentBlock from "./CommentBlock.vue";
import BookMarkButton from "./BookMarkButton.vue";
import CommentForm from "./CommentForm.vue";
import BackButton from './BackButton.vue';

export default {
	components: {
		"comment-form": CommentForm,
		"comment-block": CommentBlock,
		"bookmark-button": BookMarkButton,
		'back-button': BackButton
	},
	props: [
		"title",
		"releaseDate",
		"genre",
		"runtime",
		"plot",
	],
	data() {
		return {
			toggle: false,
			menu: "",
			items: [{ message: "details" }, { message: "reviews" }],
			color: this.color
		};
	},
	methods: {
		say(message) {
			this.menu = message;
		},
	},
};
</script>

<style>
#poster {
	height: 500px;
}
#movie-detail {
	top: 420px;
}
</style>
