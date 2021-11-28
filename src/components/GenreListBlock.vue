<template>
	<div>
		<div class="hidden md:block -ml-1 mt-1 md:mt-0">
			<w-button
				bg-color="transparent"
				class="px-5 py-2 uppercase"
				@click="showDropDown = !showDropDown"
				color="white"
				:height="40"
			>
				<div class="inline-flex space-x-3 -ml-4 md:px-1 md:my-0">
					<div class="md:hidden">
						<w-icon color="grey" :size="25">mdi mdi-filmstrip</w-icon>
					</div>
					<p class="text-white my-auto md:my-2 text-sm uppercase">genre</p>
					<div class="pl-2 pr-5 md:pr-1 md:pl-0 my-auto">
						<w-icon md color="white" v-if="showDropDown == false">mdi mdi-chevron-down</w-icon>
						<w-icon md color="white" v-if="showDropDown">mdi mdi-chevron-up</w-icon>
					</div>
				</div>
			</w-button>
			<div class="absolute mt-2 ml-14 md:w-24 md:ml-0 z-10 md:bg-blackBlue" v-if="showDropDown">
				<div class="text-white text-xs uppercase font-medium">
					<div v-for="g in genre" :key="g.genre_id" class="md:px-3">
						<w-button
							class="block hover:text-deepBlue pr-4 py-2"
							bg-color="transparent"
							@click="goRoute(g.genre_id), showDropDown = false"
						>
							{{
								g.genre
							}}
						</w-button>
					</div>
				</div>
			</div>
		</div>
		<w-accordion :items="1" expand-icon-right class="md:hidden block">
			<template #item-title>
				<w-icon color="grey" :size="25">mdi mdi-filmstrip</w-icon>
				<div class="ml-3 text-sm uppercase">Genre</div>
			</template>
			<template #item-content>
				<div class="text-white text-sm uppercase font-medium">
					<div v-for="g in genre" :key="g.genre_id" class="md:px-3">
						<w-button
							class="block hover:text-deepBlue pr-4 py-2 mx-9"
							bg-color="transparent"
							@click="goRoute(g.genre_id), showDropDown = false"
						>
							{{
								g.genre
							}}
						</w-button>
					</div>
				</div>
			</template>
		</w-accordion>
	</div>
</template>

<script>
export default {
	data: () => ({
		genre: [
			{
				genre_id: 1,
				genre: "Action",
			},
			{
				genre_id: 2,
				genre: "Adventure",
			},
			{
				genre_id: 3,
				genre: "Comedy",
			},
			{
				genre_id: 4,
				genre: "Drama",
			},
			{
				genre_id: 5,
				genre: "Fantacy",
			},
			{
				genre_id: 6,
				genre: "Horror",
			},
			{
				genre_id: 7,
				genre: "Mystery",
			},
			{
				genre_id: 8,
				genre: "Romantic",
			},
			{
				genre_id: 9,
				genre: "Sci-fi",
			},
			{
				genre_id: 10,
				genre: "Thriller",
			},
		],
		showDropDown: false,
	}),
	methods: {
		documentClick(event) {
			if (!this.$el.contains(event.target)) {
				this.showDropDown = false;
			}
		},
		goRoute(genreId) {
			this.$router.push(`/genre/${genreId}`);
		},
		checkShowDropDown() {
			if (this.showDropDown === true)
				console.log("Success ja")
		}
	},
	created() {
		document.addEventListener("click", this.documentClick);
	},
	unmounted() {
		document.removeEventListener("click", this.documentClick);
	},
};
</script>

<style>
#dropdown {
	background-color: #20232a;
}
</style>
