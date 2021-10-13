<template>
	<w-app>
		<div class="relative">
			<!-- <img class="block h-44 md:h-60" src="../src/assets/LoveSimon.jpg"> -->
			<div v-if="seen == false">
				<button class="grey-light2 absolute left-20 md:left-28 -top-1" @click="toggleSeen">
					<w-icon xl>material-icons bookmark_border</w-icon>
				</button>
			</div>
			<div v-if="seen">
				<button class="info-light1 absolute left-20 md:left-28 -top-1" @click="toggleSeen">
					<w-icon xl>material-icons bookmark</w-icon>
				</button>
			</div>
		</div>
	</w-app>
</template>

<script>
export default {
	data() {
		return {
			button: [
				{ text: 'Hide' }
			],
			seen: false
		}
	},
	methods: {
		toggleSeen() {
			this.seen = !this.seen
			this.button.push({ text: 'Show' })
		}

	}
}
</script>
