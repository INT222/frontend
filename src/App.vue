<template>
	<w-app>
		<!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
		<!-- <div class="mx-auto bg-red-300">
				<w-button bg-color="success">success</w-button>
				<w-button bg-color="error">error</w-button>
				<w-button bg-color="warning">warning</w-button>
				<w-button bg-color="info">info</w-button>
				<w-button bg-color="primary">primary</w-button>
				<w-button bg-color="secondary">secondary</w-button>
				<w-button bg-color="purple-light4">purple-light4</w-button>
				<w-icon color="primary">material-icons star</w-icon>
			</div> -->

		<div class="w-1/4 mx-auto my-auto  h-2/4 p-10 relative inline-block">
			<w-button class=" p-4  left-auto " @click="showDropDown = !showDropDown" bg-color="red" color="white">
				Click me <w-icon color="white" v-if="showDropDown == false">material-icons expand_more</w-icon>
				<w-icon color="white" v-if="showDropDown">material-icons expand_less</w-icon>
			</w-button>
			<div class=" absolute w-full " v-if="showDropDown">
				<a href="#" class="block bg-red-50 hover:bg-red-200 ">1</a>
				<a href="#" class="block bg-red-50 hover:bg-red-200 ">2</a>
				<a href="#" class="block bg-red-50 hover:bg-red-200 ">3</a>
				<a href="#" class="block bg-red-50 hover:bg-red-200 ">4</a>
			</div>

			<span class="m-3">{{ showDropDown }}</span>
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
