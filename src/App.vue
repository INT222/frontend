<template>
	<!-- <w-app>
		<div id="nav">
			<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
			<div class="mx-auto bg-red-300">
				<w-button bg-color="success">success</w-button>
				<w-button bg-color="error">error</w-button>
				<w-button bg-color="warning">warning</w-button>
				<w-button bg-color="info">info</w-button>
				<w-button bg-color="primary">primary</w-button>
				<w-button bg-color="secondary">secondary</w-button>
				<w-button bg-color="purple-light4">purple-light4</w-button>
				<w-icon color="primary">material-icons star</w-icon>
			</div>
		</div>
		<router-view />
		<div class="h-3/5 w-auto bg-red-700 overflow-hidden ">
    <img src="../AboutTime.jpg" class="block  object-none  " />
   </div>
	</w-app>-->
	<w-app>
		<div class="bg-blackBlue">
			<div class="md:mb-4">
					<span class="md:font-medium md:text-6xl text-white">Love, Simon</span>
				</div>
			<div
				class="hidden md:bg-lightGray md:rounded-md md:mb-6 md:py-4 md:grid md:grid-cols-8 md:w-screen"
			>
				
				<div class="md:inline-flex md:col-span-6 md:space-x-4 md:mx-4">
					<span class="md:text-white md:text-xl">July 2, 2021</span>
					<span class="md:text-white md:text-xl">Action/Sci-fi ‧</span>
					<span class="md:text-white md:text-xl">2.20 hours</span>
				</div>
				<div class="md:inline-flex md:justify-end md:space-x-3">
					<w-icon xs color="yellow">material-icons star</w-icon>
					<span class="md:text-white md:text-xl md:font-bold">4.3</span>
				</div>
				<div class="md:flex md:justify-end md:mx-4">
					<w-icon xs color="grey">material-icons bookmark</w-icon>
				</div>
			</div>
			<div class="h-2/5 md:mb-6">
				<div class="md:bg-red-700 overflow-hidden">
					<img class="transform scale-125 md:block md:object-none" src="../src/assets/TheMazeRunner.jpg" />
					<!-- <img id="image" class="transform scale-125 md:block md:object-none" src="../src/assets/LoveSimon.jpg" /> -->
				</div>
				<!-- <img class="transform scale-125 md:block md:object-none" src="../src/assets/Eternals.jpg" /> -->
				<!-- <img class="transform scale-125" src="../src/assets/LaLaLand.jpg" /> -->
				<!-- <img class="transform scale-125" src="../src/assets/TheMazeRunner.jpg" /> -->
				<!-- <img class="transform scale-125" src="../src/assets/AboutTime.jpg"> -->
				<!-- <img class="transform scale-125" src="../src/assets/BlackWidow.jpg"> -->
				<span class="md:hidden absolute top-72 left-2 text-4xl font-semibold text-white">Love, Simon</span>
				<span
					class="md:hidden absolute top-80 left-2 text-sm font-semibold text-white"
				>July 2, 2021 Action/Sci-fi ‧ 2.20 hours</span>
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

			<div class>
				<span class="text-white text-sm md:text-xl">
					The world is stunned when a group of time
					travellers arrive from the year 2051 to deliver
					an urgent message: thirty years in the future,
					mankind is losing a global war against a dead
					alien species.
					With a touch of the relentlessly gung-ho, alien-
					splattering wallop of Starship Troopers, and a
					cursory nod to the father-daughter connection
					mined in Interstellar, the Amazon Original
					production The Tomorrow War is not charting
					much in the way of new sci-fi territory. It is,
					however, a solid and at times spectacular
					action picture, starring Chris Pratt as an
					ex-soldier turned science teacher who is
					drafted to take part in a war against alien
					invaders, 30 years in the future.
					The world is stunned when a group of time
					travellers arrive from the year 2051 to deliver
					an urgent message: thirty years in the future,
					mankind is losing a global war against a dead
					alien species.
					With a touch of the relentlessly gung-ho, alien-
					splattering wallop of Starship Troopers, and a
					cursory nod to the father-daughter connection
					mined in Interstellar, the Amazon Original
					production The Tomorrow War is not charting
					much in the way of new sci-fi territory. It is,
					however, a solid and at times spectacular
					action picture, starring Chris Pratt as an
					ex-soldier turned science teacher who is
					drafted to take part in a war against alien
					invaders, 30 years in the future.The world is stunned when a group of time
					travellers arrive from the year 2051 to deliver
					an urgent message: thirty years in the future,
					mankind is losing a global war against a dead
					alien species.
					With a touch of the relentlessly gung-ho, alien-
					splattering wallop of Starship Troopers, and a
					cursory nod to the father-daughter connection
					mined in Interstellar, the Amazon Original
					production The Tomorrow War is not charting
					much in the way of new sci-fi territory. It is,
					however, a solid and at times spectacular
					action picture, starring Chris Pratt as an
					ex-soldier turned science teacher who is
					drafted to take part in a war against alien
					invaders, 30 years in the future.The world is stunned when a group of time
					travellers arrive from the year 2051 to deliver
					an urgent message: thirty years in the future,
					mankind is losing a global war against a dead
					alien species.
					With a touch of the relentlessly gung-ho, alien-
					splattering wallop of Starship Troopers, and a
					cursory nod to the father-daughter connection
					mined in Interstellar, the Amazon Original
					production The Tomorrow War is not charting
					much in the way of new sci-fi territory. It is,
					however, a solid and at times spectacular
					action picture, starring Chris Pratt as an
					ex-soldier turned science teacher who is
					drafted to take part in a war against alien
					invaders, 30 years in the future.The world is stunned when a group of time
					travellers arrive from the year 2051 to deliver
					an urgent message: thirty years in the future,
					mankind is losing a global war against a dead
					alien species.
					With a touch of the relentlessly gung-ho, alien-
					splattering wallop of Starship Troopers, and a
					cursory nod to the father-daughter connection
					mined in Interstellar, the Amazon Original
					production The Tomorrow War is not charting
					much in the way of new sci-fi territory. It is,
					however, a solid and at times spectacular
					action picture, starring Chris Pratt as an
					ex-soldier turned science teacher who is
					drafted to take part in a war against alien
					invaders, 30 years in the future.The world is stunned when a group of time
					travellers arrive from the year 2051 to deliver
					an urgent message: thirty years in the future,
					mankind is losing a global war against a dead
					alien species.
					With a touch of the relentlessly gung-ho, alien-
					splattering wallop of Starship Troopers, and a
					cursory nod to the father-daughter connection
					mined in Interstellar, the Amazon Original
					production The Tomorrow War is not charting
					much in the way of new sci-fi territory. It is,
					however, a solid and at times spectacular
					action picture, starring Chris Pratt as an
					ex-soldier turned science teacher who is
					drafted to take part in a war against alien
					invaders, 30 years in the future.
				</span>
			</div>
		</div>
	</w-app>
</template>

<script>
export default {
	data() {
		return {
			reason: '',
			items: [
				{ message: 'details' },
				{ message: 'reviews' },
			]
		}
	},
	methods: {
		say(message) {
			this.reason = message;
		}
	}
}

</script>


<style lang="scss">
div img {
	// margin-top: -650px;
}

img {
	height: 500px;
}
</style>
