<template>
	<div class="mx-auto">
		<div class="w-32 tb:w-40 md:w-44">
			<!-- <img src="../assets/Lucy.jpg" class="h-44 rounded-md mx-auto mb-2 tb:h-52 md:h-60" /> -->
			<img :src="img" class="h-44 rounded-md mx-auto mb-2 tb:h-52 md:h-60" />
			<p class="text-white text-center text-base font-bold leading-snug overflow-hidden uppercase mb-2 mt-2">
				{{ moviename }}
			</p>
			<div class="mx-2 tb:mx-7 md:mx-9">
				<w-rating md color="amber-light1" :modelValue="avg_rating" readonly></w-rating>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		img: String,
		moviename: String,
		avg_rating: Number,
	},
};
</script>
