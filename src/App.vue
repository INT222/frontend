<template>
	<w-app>
		<!-- <div id="nav">
			<router-link to="/">Home</router-link>|
			<router-link to="/about">About</router-link>
			<div class="mx-auto bg-red-300">
				<w-button bg-color="success">success</w-button>
				<w-button bg-color="error">error</w-button>
				<w-button bg-color="warning">warning</w-button>
				<w-button bg-color="info">info</w-button>
				<w-button bg-color="primary">primary</w-button>
				<w-button bg-color="secondary">secondary</w-button>
				<w-button bg-color="purple-light4">purple-light4</w-button>
				<w-icon color="primary">material-icons star</w-icon>
			</div>
		</div>-->
		<!-- <router-view /> -->
		<div class="block mx-auto my-auto">
			<w-button @click="showDrawer = true" outline color="primary">
				Click to pull div left side
			</w-button>

			<w-drawer v-model="showDrawer" left class="text-red-600 ">
				<w-button
					class="button--close"
					@click="showDrawer = false"
					sm
					outline
					round
					absolute
					color="primary"
					icon="wi-cross"
				>
				</w-button>
				<span class="bg-yellow-400 w-2/4">
					Test inside drawer
				</span>
				<span class="bg-green-300 w-2/4">
					Test inside drawer
				</span>
			</w-drawer>
		</div>
	</w-app>
</template>

<script>
export default {
	data() {
		return {
			showDrawer: false,
		};
	},
};
</script>
