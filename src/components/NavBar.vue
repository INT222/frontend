<template>
	<div class="bg-blackBlue h-20">
		<div class="grid grid-cols-10 my-7 md:my-6 w-screen md:grid md:grid-cols-8">
			<div class="mx-4 md:hidden -mt-1">
				<button>
					<w-icon xs color="white">material-icons menu</w-icon>
				</button>
			</div>
			<div class="ml-6 col-span-8 md:col-span-1 md:flex md:justify-center tb:-ml-6">
				<a href="#">
					<img class="w-20 md:w-30" src="../src/assets/brm_logo.png" />
				</a>
			</div>
			<div class="hidden md:grid md:grid-cols-3 md:col-span-2">
				<div class="md:flex md:justify-start md:mt-2">
					<span class="uppercase text-xs text-white">watch list</span>
				</div>
				<div class="md:flex md:justify-start md:mt-2">
					<span class="uppercase text-xs text-white">genres</span>
					<w-icon size="16" color="white" class="ml-2">material-icons expand_more</w-icon>
				</div>
				<div class="md:flex md:justify-start md:mt-2">
					<span class="uppercase text-xs text-white md:col-span-3">view movie</span>
				</div>
			</div>
			<div class="mx-4 md:col-span-3 flex justify-self-end -mt-1 md:mt-0">
				<w-icon xs color="white">material-icons search</w-icon>
			</div>
			<div class="hidden md:col-span-2 md:mx-auto md:inline-flex md:space-x-6">
				<w-button id="signin" class="uppercase text-xs w-20 tracking-wider" outline color="white" bg-color="transparent"
					>sign in</w-button
				>
				<div class="">
					<span class="text-white uppercase text-xs tracking-wider mt-2">or</span>
				</div>
				<div class="">
					<w-button
						id="signup"
						class="uppercase text-xs w-20 tracking-wider flex justify-item-center"
						outline
						color="black"
						bg-color="white"
						>sign up</w-button
					>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#signup {
	height: 30px;
}

#signin {
	height: 30px;
}
</style>
