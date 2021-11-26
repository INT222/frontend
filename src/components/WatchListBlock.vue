<template>
	<div class="w-full grid grid-cols-5 my-5 tb:grid-cols-1 md:grid-cols-1">
		<div class="col-span-3 mt-3 mx-4 tb:text-center md:text-center">
			<p class="text-white font-medium text-base mt-2 mb-3 tracking-wide tb:mb-2 md:mb-2">{{ title }}</p>
			<div class="hidden tb:space-x-2 tb:inline-flex tb:space-x-2 md:inline-flex">
				<p class="text-gray-400 text-xs tracking-wider mb-3 tb:mb-2 md:mb-2">{{ releaseDate }}</p>
				<div class="-mt-1">
					<w-icon lg color="amber-light1">mdi mdi-star</w-icon>
					<span class="text-white text-md font-medium">{{ rating }}</span>
				</div>
			</div>

			<p class="text-gray-400 text-xs tracking-wider mb-3 tb:overflow-hidden md:overflow-hidden">
				{{ genre }} ‧ {{ runtime }}
			</p>
			<div class="inline-flex space-x-2 tb:hidden md:hidden">
				<w-icon lg color="amber-light1">mdi mdi-star</w-icon>
				<span class="text-white text-md font-medium my-auto">{{ rating }}</span>
			</div>
			<div class="mx-auto">
				<w-button bg-color="transparent" height="40">
					<div
						class="
							inline-flex
							space-x-3
							border
							px-6
							py-1
							border-gray-300
							mt-5
							rounded-md
							text-center text-sm text-gray-300
							space-x-1
						"
					>
						<w-icon lg>mdi mdi-minus</w-icon>
						<p class="my-auto">Remove</p>
					</div>
				</w-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["title", "releaseDate", "genre", "runtime"],
};
</script>
