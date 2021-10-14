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
		<div>
			<w-button class="ma1" @click="showDrawer = 'left'" outline color="primary">Show left drawer</w-button>
			<w-drawer :value="!!showDrawer" :[position]="true" @close="showDrawer = false">
				<w-button
					class="button--close"
					@click="showDrawer = false"
					sm
					outline
					round
					absolute
					color="primary"
					icon="wi-cross"
				></w-button>
			</w-drawer>
		</div>
	</w-app>
</template>

<script>
export default {
	data() {
		return {
			showDrawer: false
		}
	},
	computed: {
		position() {
			return this.showDrawer || 'right'
		}
	}
}

</script>

<style lang="scss">
</style>
