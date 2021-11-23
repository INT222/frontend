<template>
	<div class="bg-green-500">
		<div>
			<img :src="imgPoster" class="h-48 tb:h-52 md:h-60 rounded-md md:rounded-lg overflow-hidden" />
		</div>
	</div>
</template>
<script>
export default {
	props: { imgPoster: String },
};
</script>
