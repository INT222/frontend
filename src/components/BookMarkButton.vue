<template>
	<div class="relative">
		<!-- <img class="block h-44 md:h-60 tb:h-52" src="../src/assets/LoveSimon.jpg"> -->
		<div v-if="seen == false">
			<w-button bg-color="transparent" class="grey-light2 absolute left-20 tb:left-24 md:left-28 -top-1" @click="toggleSeen">
				<w-icon xl>mdi mdi-bookmark-outline</w-icon>
			</w-button>
		</div>
		<div v-if="seen">
			<w-button bg-color="transparent" class="info-light1 absolute left-20 tb:left-24 md:left-28 -top-1" @click="toggleSeen">
				<w-icon xl>mdi mdi-bookmark</w-icon>
			</w-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			button: [{ text: "Hide" }],
			seen: false,
		};
	},
	methods: {
		toggleSeen() {
			this.seen = !this.seen;
			this.button.push({ text: "Show" });
		},
	},
};
</script>
