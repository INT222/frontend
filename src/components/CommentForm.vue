<template>
	<div class="bg-black">
		<div class="inline-flex space-x-3 mb-1">
			<p class="text-base mt-1 text-white font-medium md:text-lg">Rate this :</p>
			<w-rating md color="amber-light1"></w-rating>
		</div>
		<div class="">
			<textarea
				rows="6"
				class="mt-1 w-full bg-deepBrownGray rounded-md p-4 text-white mb-1 md:focus:ring-2 md:focus:ring-gray-400"
				placeholder="Write your comment here..."
			></textarea>
			<div class="flex justify-end">
				<input
					type="submit"
					class="bg-white text-gray-700 text-sm font-medium py-1 px-4 rounded tracking-wider uppercase mb-1 md:px-10 md:py-2 md:hover:bg-gray-500 md:hover:text-white "
					value="post"
				/>
			</div>
		</div>
	</div>
</template>
