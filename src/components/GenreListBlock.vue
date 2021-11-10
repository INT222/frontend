<template>
	<div class="-ml-1 mt-1 md:mt-0">
		<w-button
            bg-color="transparent"
            class="px-5 py-2 uppercase"
            @click="showDropDown = !showDropDown"
            color="white"
			:height="40"
        >

		<div class="inline-flex space-x-3 -ml-1 md:px-1 md:my-0 ">
			<div class="md:hidden">
				<w-icon color="grey" :size="30">material-icons theaters</w-icon>
			</div>
			<p class="text-white my-auto md:my-2 text-sm uppercase">genre</p>
			<div class="pl-2 pr-5 md:pr-1 md:pl-0 my-auto">
				<w-icon md color="white" v-if="showDropDown == false">mdi mdi-chevron-down</w-icon>
				<w-icon md color="white" v-if="showDropDown">mdi mdi-chevron-up</w-icon>
			</div>
		</div>
		</w-button>
		<div class="absolute mt-2 ml-14 md:w-28 md:ml-0 z-10 md:bg-blackBlue" v-if="showDropDown">
			<div class="text-white text-xs uppercase font-medium">
				<router-link to="/genre" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">action</router-link>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">adventure</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">comedy</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">drama</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">fantacy</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">horror</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">mystery</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">romance</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">sci-fi</a>
				<a href="#" class="block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">thriller</a>
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
