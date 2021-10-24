<template>
	<w-app>
		<!-- <router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>-->
		<!-- <div class="mx-auto bg-red-300">
				<w-button bg-color="success">success</w-button>
				<w-button bg-color="error">error</w-button>
				<w-button bg-color="warning">warning</w-button>
				<w-button bg-color="info">info</w-button>
				<w-button bg-color="primary">primary</w-button>
				<w-button bg-color="secondary">secondary</w-button>
				<w-button bg-color="purple-light4">purple-light4</w-button>
				<w-icon color="primary">material-icons star</w-icon>
		</div>-->

		<div class="w-1/2 relative inline-block">
			<w-button id="dropdown" class="px-5 py-2 space-x-2 uppercase" @click="showDropDown = !showDropDown" color="white">
				<div class=" md:hidden">
					<w-icon color="white" :size="30">material-icons theaters</w-icon>
				</div>

				<p class="text-sm font-medium px-2">genres</p>
				<div class="pl-5 md:pl-4">
					<w-icon color="white" v-if="showDropDown == false">material-icons expand_more</w-icon>
					<w-icon color="white" v-if="showDropDown">material-icons expand_less</w-icon>
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

		<!-- <router-view /> -->
	</w-app>
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
