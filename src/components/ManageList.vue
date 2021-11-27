<template>
	<div class="ml-1 mt-1 md:mt-0">
		<w-button
			bg-color="transparent"
			class="px-5 py-2 uppercase"
			@click="showDropDown = !showDropDown"
			color="white"
			:height="40"
		>
			<div class="inline-flex space-x-3 -ml-4 md:px-1 md:my-0">
				<div class="md:hidden -mt-1">
					<w-icon color="grey" :size="25">mdi mdi-filmstrip</w-icon>
				</div>
				<p class="text-white my-auto md:my-2 text-sm uppercase">manage</p>
				<div class="pl-2 pr-5 md:pr-1 md:pl-0 my-auto">
					<w-icon md color="white" v-if="showDropDown == false">mdi mdi-chevron-down</w-icon>
					<w-icon md color="white" v-if="showDropDown">mdi mdi-chevron-up</w-icon>
				</div>
			</div>
		</w-button>
		<div class="absolute mt-2 ml-14 md:w-24 md:ml-3 z-10 md:bg-blackBlue" v-if="showDropDown">
			<div class="text-white text-xs uppercase font-medium">
				<router-link @click="showDropDown = false"
					to="/manageuser"
					class="block hover:text-deepBlue py-2 md:pl-8"
				>user</router-link>
				<router-link @click="showDropDown = false"
					to="/managemovie"
					class="block hover:text-deepBlue py-2 md:pl-8"
				>movie</router-link>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }],
		showDropDown: false,
	}),
	methods: {
		documentClick(event) {
			if (!this.$el.contains(event.target)) {
				this.showDropDown = false;
			}
		},
	},
	created() {
		document.addEventListener('click', this.documentClick)
	},
	unmounted() {
		document.removeEventListener('click', this.documentClick)
	}
};
</script>

<style>
#dropdown {
	background-color: #20232a;
}
</style>
