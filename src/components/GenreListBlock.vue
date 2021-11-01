<template>
	<div>
		<div class="flex space-x-2 tb:space-x-0">
			<button
				class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 uppercase"
			>genre</button>
			<div class="pl-5 md:pl-0 tb:pl-0 my-auto">
				<w-icon md color="white" v-if="showDropDown == false">material-icons expand_more</w-icon>
				<w-icon md color="white" v-if="showDropDown">material-icons expand_less</w-icon>
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
