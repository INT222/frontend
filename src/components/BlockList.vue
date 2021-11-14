<template>
	<div class>
		<div class="w-full grid grid-cols-5 my-3 tb:w-44 tb:grid-cols-1 md:grid-cols-1">
			<img
				src="../assets/BlackWidow.jpg"
				class="h-48 col-span-2 flex-none bg-cover rounded-md tb:h-52 tb:rounded-md tb:mx-auto md:rounded-lg md:h-60 md:mx-auto"
			/>
			<div class="col-span-3 mt-3 mx-4 tb:mx-auto md:mx-auto">
				<p
					class="text-white font-medium text-base mt-2 mb-4 tracking-wide tb:text-center tb:mb-2 md:text-center md:mb-2"
				>{{ title }}</p>
				<p
					class="text-gray-400 text-sm tracking-wider mb-3 tb:text-center tb:mb-2 md:text-center md:mb-2"
				>{{ releaseDate }}</p>
				<p
					class="text-gray-400 text-sm tracking-wider mb-1 tb:text-center md:text-center"
				>{{ genre }} ‧ {{ runtime }}</p>
				<fav-button />
			</div>
			<hr class="w-80 mx-3 border border-gray-500 mb-3 mt-3 tb:hidden md:hidden" />
		</div>
	</div>
</template>

<script>import FavButton from "./FavButton.vue";

export default {
	components: {
		'fav-button': FavButton
	},
	props: [
		"title",
		"releaseDate",
		"genre",
		"runtime",
		"poster"
	],
	
}
</script>