<template>
	<div class="w-1/2 relative inline-block md:-mx-4">
		<w-button
			bg-color="transparent"
			class="px-5 py-2 space-x-2 md:space-x-0 uppercase"
			@click="showDropDown = !showDropDown"
			color="white"
		>
			<div class=" md:hidden">
				<w-icon color="white" :size="30">material-icons theaters</w-icon>
			</div>

			<p class="text-xs font-medium px-2">genres</p>
			<div class="pl-5 md:pl-0">
				<w-icon md color="white" v-if="showDropDown == false">material-icons expand_more</w-icon>
				<w-icon md color="white" v-if="showDropDown">material-icons expand_less</w-icon>
			</div>
		</w-button>
		<div class="absolute mt-2 md:w-1/5" v-if="showDropDown">
			<div class="text-white text-sm uppercase font-medium bg-blackBlue">
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">action</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">adventure</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">comedy</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">drama</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">fantacy</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">horror</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">mystery</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">romance</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">sci-fi</a>
				<a href="#" class="block hover:bg-gray-600 pl-20 pr-4 py-2 md:pl-12">thriller</a>
			</div>
		</div>

		<!-- <span class="m-3">{{ showDropDown }}</span> -->
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }],
		showDropDown: false,
	}),
};
</script>

<style>
#dropdown {
	background-color: #20232a;
}
</style>
