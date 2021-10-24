<template>
	<w-app>
		<div class="bg-blackBlue w-screen">
			<div class="md:mx-28">
				<div class="md:mb-4">
					<span class="hidden md:block md:font-medium md:text-6xl text-white">Love, Simon</span>
				</div>
				<div class="hidden md:bg-lightGray md:rounded-md md:mb-6 md:py-4 md:grid md:grid-cols-8">
					<div class="md:inline-flex md:col-span-6 md:space-x-4 md:mx-4">
						<span class="md:text-white md:text-xl">July 2, 2021</span>
						<span class="md:text-white md:text-xl">Action/Sci-fi ‧</span>
						<span class="md:text-white md:text-xl">2.20 hours</span>
					</div>
					<div class="md:inline-flex md:justify-end md:space-x-3">
						<w-icon lg color="yellow">material-icons star</w-icon>
						<span class="md:text-white md:text-xl md:font-bold">4.3</span>
					</div>
					<div class="md:flex md:justify-end md:mx-4">
						<w-icon lg color="grey">material-icons bookmark</w-icon>
					</div>
				</div>
				<div class="md:mb-6">
					<div class="overflow-hidden md:inline-flex md:space-x-12">
						<img
							id="poster"
							class="transform scale-125 md:w-1/4 md:mx-9 md:shadow md:rounded md:border-none"
							src="../src/assets/Eternals.jpg"
						/>
						<iframe
							class="hidden md:block"
							width="789"
							height="521"
							src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
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
						<span id="movie-detail" class="md:hidden absolute left-4 text-sm font-semibold text-white"
							>July 2, 2021 Action/Sci-fi ‧ 2.20 hours</span
						>
					</div>
				</div>
				<div class="md:hidden grid grid-cols-2 text-white px-24 sticky top-0 bg-blackBlue">
					<button
						v-for="item in items"
						:key="item.message"
						class="px-4 py-2 m-2 text-white flex justify-center"
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
						The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message:
						thirty years in the future, mankind is losing a global war against a dead alien species. With a touch of the
						relentlessly gung-ho, alien- splattering wallop of Starship Troopers, and a cursory nod to the
						father-daughter connection mined in Interstellar, the Amazon Original production The Tomorrow War is not
						charting much in the way of new sci-fi territory. It is, however, a solid and at times spectacular action
						picture, starring Chris Pratt as an ex-soldier turned science teacher who is drafted to take part in a war
						against alien invaders, 30 years in the future. The world is stunned when a group of time travellers arrive
						from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war
						against a dead alien species. With a touch of the relentlessly gung-ho, alien- splattering wallop of
						Starship Troopers, and a cursory nod to the father-daughter connection mined in Interstellar, the Amazon
						Original production The Tomorrow War is not charting much in the way of new sci-fi territory. It is,
						however, a solid and at times spectacular action picture, starring Chris Pratt as an ex-soldier turned
						science teacher who is drafted to take part in a war against alien invaders, 30 years in the future.The
						world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message:
						thirty years in the future, mankind is losing a global war against a dead alien species. With a touch of the
						relentlessly gung-ho, alien- splattering wallop of Starship Troopers, and a cursory nod to the
						father-daughter connection mined in Interstellar, the Amazon Original production The Tomorrow War is not
						charting much in the way of new sci-fi territory. It is, however, a solid and at times spectacular action
						picture, starring Chris Pratt as an ex-soldier turned science teacher who is drafted to take part in a war
						against alien invaders, 30 years in the future.The world is stunned when a group of time travellers arrive
						from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war
						against a dead alien species. With a touch of the relentlessly gung-ho, alien- splattering wallop of
						Starship Troopers, and a cursory nod to the father-daughter connection mined in Interstellar, the Amazon
						Original production The Tomorrow War is not charting much in the way of new sci-fi territory. It is,
						however, a solid and at times spectacular action picture, starring Chris Pratt as an ex-soldier turned
						science teacher who is drafted to take part in a war against alien invaders, 30 years in the future.The
						world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message:
						thirty years in the future, mankind is losing a global war against a dead alien species. With a touch of the
						relentlessly gung-ho, alien- splattering wallop of Starship Troopers, and a cursory nod to the
						father-daughter connection mined in Interstellar, the Amazon Original production The Tomorrow War is not
						charting much in the way of new sci-fi territory. It is, however, a solid and at times spectacular action
						picture, starring Chris Pratt as an ex-soldier turned science teacher who is drafted to take part in a war
						against alien invaders, 30 years in the future.The world is stunned when a group of time travellers arrive
						from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war
						against a dead alien species. With a touch of the relentlessly gung-ho, alien- splattering wallop of
						Starship Troopers, and a cursory nod to the father-daughter connection mined in Interstellar, the Amazon
						Original production The Tomorrow War is not charting much in the way of new sci-fi territory. It is,
						however, a solid and at times spectacular action picture, starring Chris Pratt as an ex-soldier turned
						science teacher who is drafted to take part in a war against alien invaders, 30 years in the future.
					</span>
				</div>
			</div>
		</div>
	</w-app>
</template>

<script>
export default {
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
