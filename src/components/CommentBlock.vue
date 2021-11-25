<template>
	<div class="text-white md:grid md:grid-col-4 md:px-7 md:mx-12 tb:mx-6">
		<!-- <div class="mb-6">
			<p class="text-base mt-1 text-white font-medium md:text-lg uppercase">rates and comments</p>
		</div> -->
		<div class="md:grid md:grid-flow-col md:justify-self-start md:space-x-10">
			<div class="md:text-center md:grid md:grid-row-2 fle md:justify-start">
				<div>
					<p class="font-medium mx-4 tracking-widest">{{ username }}</p>
				</div>
				<div class="inline-flex md:flex-col">
					<div>
						<p class="text-gray-500 mx-4 text-sm md:my-2 tracking-widest">{{ commentDate }}</p>
					</div>
					<div>
						<w-rating class="-mt-1" sm color="yellow" :modelValue="rating" readonly></w-rating>
					</div>
				</div>
			</div>
			<div>
				<p class="my-2 md:my-0">
					{{ commentText }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		username: String,
		commentDate: String,
		commentText: String,
		rating: Number,
	},
};
</script>
