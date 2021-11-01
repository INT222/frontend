<template>
	<div>
		<!--Box 1-->
		<div class="rounded-md overflow-hidden shadow-lg">
			<img class="w-full h-48 border-2 border-b-0 border-gray-400 object-cover" src="../assets/Eternals.jpg">
			<div class="px-6 py-4 bg-gray-700">
				<div class="font-bold text-xl mb-2 text-white">{{ title }}</div>
				<p class="h-24 text-white text-base overflow-hidden">
					{{ plot }}
				</p>
				<div>
					<span class="pt-2 text-sm font-medium flex justify-end text-deepBlue tb:pt-1 tb:text-base md:focus:text-blue-500">Read More</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		"title",
		"plot"
	]
}
</script>
