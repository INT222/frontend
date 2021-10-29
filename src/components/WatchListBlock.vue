<template>
	<div class="w-full grid grid-cols-5 my-5 tb:grid-cols-1 md:grid-cols-1">
		<img
			src="../assets/BlackWidow.jpg"
			class="h-48 col-span-2 flex-none bg-cover rounded-md tb:rounded-lg tb:object-center tb:h-52 tb:mx-auto md:rounded-lg md:object-center md:h-60 md:mx-auto"
		/>
		<div class="col-span-3 mt-3 mx-4 tb:text-center md:text-center">
			<p
				class="text-white font-medium text-base mt-2 mb-3 tracking-wide tb:mb-2 md:mb-2"
			>The Tomorrow War</p>
			<div class="hidden tb:space-x-2 tb:inline-flex tb:space-x-2 md:inline-flex">
				<p class="text-gray-400 text-xs tracking-wider mb-3 tb:mb-2 md:mb-2">July 2, 2021</p>
				<div class="-mt-1">
					<w-icon lg color="amber-light1">material-icons star</w-icon>
					<span class="text-white text-md font-medium">4.5</span>
				</div>
			</div>

			<p
				class="text-gray-400 text-xs tracking-wider mb-3 tb:overflow-hidden md:overflow-hidden"
			>Action/Sci-fi ‧ 2h13m</p>
			<div class="inline-flex space-x-2 tb:hidden md:hidden">
				<w-icon lg color="amber-light1">material-icons star</w-icon>
				<span class="text-white text-md font-medium my-auto">4.5</span>
			</div>
			<div class="mx-auto">
				<button>
					<div
						class="inline-flex space-x-3 border px-6 py-1 border-gray-300 mt-5 rounded-md text-center text-sm text-gray-300 space-x-1"
					>
						<w-icon lg>material-icons remove</w-icon>
						<p class="my-auto">Remove</p>
					</div>
				</button>
			</div>
		</div>
	</div>
</template>
