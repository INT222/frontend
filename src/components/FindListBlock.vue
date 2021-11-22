<template>
	<div class="w-full">
		<img :src="imgPoster" class="h-48 rounded-md tb:h-52 md:h-60 md:rounded-lg md:mx-auto" />
	</div>
</template>
<script>
export default {
	props: { imgPoster: String },
};
</script>
