<template>
	<w-app>
		<div class="bg-blackBlue w-screen space-y-10 md:px-7">
			<div class="md:mx-9">
				<div class="md:mb-4">
					<span class="hidden md:block md:font-medium md:text-6xl text-white">Love, Simon</span>
				</div>
				<div class="hidden md:bg-lightGray md:rounded-md md:mb-6 md:py-4 md:grid md:grid-cols-8 md:px-6">
					<div class="md:inline-flex md:col-span-5 md:space-x-4">
						<span class="md:text-white md:text-xl">July 2, 2021</span>
						<span class="md:text-white md:text-xl">Action/Sci-fi ‧</span>
						<span class="md:text-white md:text-xl">2.20 hours</span>
					</div>
					<div class="md:inline-flex md:justify-end md:space-x-3 md:col-span-2">
						<w-icon lg color="yellow">material-icons star</w-icon>
						<span class="md:text-white md:text-xl md:font-bold">4.3</span>
					</div>
					<div class="md:flex md:justify-start md:mt-2 md:mx-5">
						<bookmark-button></bookmark-button>
					</div>
				</div>
				<div class="md:mb-6">
					<div class="overflow-hidden tb:inline-flex md:inline-flex md:space-x-12 tb:space-x-20">
						<img
							id="poster"
							class="transform scale-125 md:w-1/4 md:mx-9 md:shadow md:rounded md:border-none"
							src="../assets/Eternals.jpg"
						/>
						<iframe
							class="hidden md:block tb:block"
							width="950"
							height="521"
							src="https://www.youtube.com/embed/tgbNymZ7vqY/"
						/>
						<!-- <iframe class="" src="https://www.youtube.com/embed/tgbNymZ7vqY" /> -->
						<!-- <img id="image" class="transform scale-125 md:block md:object-none" src="../src/assets/LoveSimon.jpg" /> -->
					</div>
					<!-- <img class="transform scale-125 md:block md:object-none" src="../src/assets/Eternals.jpg" /> -->
					<!-- <img class="transform scale-125" src="../src/assets/LaLaLand.jpg" /> -->
					<!-- <img class="transform scale-125" src="../src/assets/TheMazeRunner.jpg" /> -->
					<!-- <img class="transform scale-125" src="../src/assets/AboutTime.jpg"> -->
					<!-- <img class="transform scale-125" src="../src/assets/BlackWidow.jpg"> -->
					<div class="space-y-2">
						<span class="md:hidden absolute top-96 left-4 text-4xl font-semibold text-white">Love, Simon</span>
						<span
							id="movie-detail"
							class="md:hidden absolute left-4 text-sm font-semibold text-white"
						>July 2, 2021 Action/Sci-fi ‧ 2.20 hours</span>
					</div>
				</div>
				<div class="md:hidden grid grid-cols-2 text-white px-24 sticky top-0 bg-blackBlue">
					<button
						v-for="item in items"
						:key="item.message"
						class="px-4 py-2 m-2 tb:w-1/2 tb:mx-auto text-white flex justify-center"
						:class="{
							'text-deepBlue border-t-2 border-deepBlue': item.message === reason,
						}"
						@click="say(item.message)"
					>
						<span class="text-sm uppercase">{{ item.message }}</span>
					</button>
				</div>

				<div>
					<span class="text-white text-sm md:text-xl">
						When Tim learns that the men in his family can travel in time and change their own lives, he decides to go back and win the woman of his dreams.
						At the age of 21, Tim Lake (Domhnall Gleeson) discovers he can travel in time... The night after another unsatisfactory New Year party, Tim's father (Bill Nighy) tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life-so he decides to make his world a better place...by getting a girlfriend. Sadly, that turns out not to be as easy as you might think. Moving from the Cornwall coast to London to train as a lawyer, Tim finally meets the beautiful but insecure Mary (Rachel McAdams).
						They fall in love, then an unfortunate time-travel incident means he's never met her at all. So they meet for the first time again-and again-but finally, after a lot of cunning time-traveling, he wins her heart. Tim then uses his power to create the perfect romantic proposal, to save his wedding from the worst best-man speeches, to save his best friend from professional disaster and to get his pregnant wife to the hospital in time for the birth of their daughter, despite a nasty traffic jam outside Abbey Road. But as his unusual life progresses, Tim finds out that his unique gift can't save him from the sorrows and ups and downs that affect all families, everywhere. There are great limits to what time travel can achieve, and it can be dangerous too.
					</span>
				</div>
			</div>
			<comment-form />
			<comment-block />
		</div>
	</w-app>
</template>

<script>import CommentBlock from "./CommentBlock.vue";
import BookMarkButton from './BookMarkButton.vue';
import CommentForm from "./CommentForm.vue";

export default {
	components: {
		'comment-form': CommentForm,
		'comment-block': CommentBlock,
		'bookmark-button': BookMarkButton
	},
	data() {
		return {
			reason: "",
			items: [{ message: "details" }, { message: "reviews" }],
		};
	},
	methods: {
		say(message) {
			this.reason = message;
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
