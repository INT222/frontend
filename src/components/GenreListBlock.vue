<template>
	<div class="w-1/2 absolute inline-block md:-mx-4">
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
		<div class="absolute mt-2 md:w-28" v-if="showDropDown">
			<div class="text-white text-xs uppercase font-medium">
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pl-20 pr-4 py-2 md:pl-6">action</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">adventure</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">comedy</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">drama</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">fantacy</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">horror</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">mystery</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">romance</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">sci-fi</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pl-20 pr-4 py-2 md:pl-6">thriller</a>
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
