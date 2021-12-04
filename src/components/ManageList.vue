<template>
	<div>
		<div class="mt-1 md:mt-0 hidden md:block">
			<w-button
				bg-color="transparent"
				class="px-5 py-2 uppercase"
				@click="showDropDown = !showDropDown"
				color="white"
				:height="40"
			>
				<div class="inline-flex space-x-3 -ml-4 md:px-1 md:my-0">
					<div class="md:hidden -mt-1">
						<w-icon color="grey" :size="25">mdi mdi-clipboard-edit</w-icon>
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
					<router-link
						@click="showDropDown = false"
						to="/manageuser"
						class="block hover:text-deepBlue py-2 md:pl-8"
					>user</router-link>
					<router-link
						@click="showDropDown = false"
						to="/managemovie"
						class="block hover:text-deepBlue py-2 md:pl-8"
					>movie</router-link>
				</div>
			</div>
		</div>
		<w-accordion :items="1" expand-icon-right class="md:hidden blok">
			<template #item-title>
				<w-icon color="grey" :size="25">mdi mdi-clipboard-edit</w-icon>
				<div class="ml-3 text-sm uppercase">Manage</div>
			</template>
			<template #item-content>
				<router-link
					@click="showDropDown = false"
					to="/manageuser"
					class="mx-11 hover:text-deepBlue"
				>user</router-link>
				<router-link
					@click="showDropDown = false"
					to="/managemovie"
					class="block hover:text-deepBlue py-2 md:pl-8 mx-11"
				>movie</router-link>
			</template>
		</w-accordion>
	</div>
</template>

<script>
export default {
	data: () => ({
		// items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }],
		showDropDown: false,
		items: [
			{
				title: 'Manage',
				content: "<p>User</p>"
			},
			{
				title: 'Item 2',
				content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'
			},
			{
				title: 'Item 3',
				content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'
			}
		],
		accordion: []
	}),
	methods: {
		documentClick(event) {
			if (!this.$el.contains(event.target)) {
				this.showDropDown = false;
			}
		},
		myDropFunc() {
			var x = document.getElementById("demoDrop");
			if (x.className.indexOf("w3-show") == -1) {
				x.className += " w3-show";
				x.previousElementSibling.className += " w3-green";
			} else {
				x.className = x.className.replace(" w3-show", "");
				x.previousElementSibling.className =
					x.previousElementSibling.className.replace(" w3-green", "");
			}
		}
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
