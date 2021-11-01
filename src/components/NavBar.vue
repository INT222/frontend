<template>
	<nav class="bg-gray-800">
		<div class="w-screen mx-auto px-2 md:px-8">
			<div class="relative inline-flex items-center justify-between h-16">
				<div name="drawer" class="absolute inset-y-0 left-0 flex items-center">
					<div class="md:hidden">
						<drawer />
					</div>
				</div>
				<div name="logo" class="flex-1 flex px-12">
					<div class="flex-shrink-0 flex items-start">
						<router-link to="/">
							<img class="w-20 md:w-30" src="../assets/brm_logo.png" />
						</router-link>
					</div>
				</div>
				<div class="hidden tb:block md:block tb:-ml-5">
					<div class="ml-3 flex items-center space-x-10 tb:space-x-5">
						<button
							class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 uppercase"
						>watch list</button>
						<genre-list-block />
						<button
							class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 uppercase"
						>manage movie</button>
					</div>
				</div>
				
				<div name="search" class="inset-y-0 right-0 flex items-center justify-end pr-2">
					<div class="ml-3 relative">
						<div>
							<w-icon xl color="white">material-icons search</w-icon>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import Drawer from "./Drawer.vue";
import GenreListBlock from './GenreListBlock.vue';
export default {
	components: {
		"genre-list-block": GenreListBlock,
		drawer: Drawer,
GenreListBlock,
	},
};
</script>

<!-- <style lang="scss">
#signup {
    height: 30px;
}

#signin {
    height: 30px;
}
</style> -->


