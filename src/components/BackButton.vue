<template>
	<div>
		<w-button bg-color="transparent" class="inline-flex" @click="$router.go(-1)">
			<w-icon :color="iconcolor" xl>mdi mdi-arrow-left</w-icon>
			{{ typeTest }}
		</w-button>
	</div>
</template>
<script>
export default {
	props: {
		iconcolor: {
			type: String,
			default: "yellow",
		},
		typeTest: {
			type: String,
		},
	},

};
</script>
