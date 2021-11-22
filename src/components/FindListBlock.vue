<template>
	<div>
		<h1>{{ genre }}</h1>
		<div class="rounded-md md:rounded-lg overflow-hidden">
		<img :src="imgPoster" class="h-48 tb:h-52 md:h-60" />
		</div>
	</div>
</template>
<script>
export default {
	props: { genre: String, imgPoster: String },
};
</script>
