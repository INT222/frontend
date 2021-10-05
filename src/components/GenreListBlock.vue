<template>
	<div class="flex flex-row h-screen w-4/5 md:w-full">
		<div class="w-4/5 bg-midGray ">
			<nav class="px-4 pb-4 ">
				<div class="relative">
					<button class="genreButton">
						<!-- <img src="./assets/movie.png" class="w-7 h-8"/> -->
						<span class="text-center text-white text-sm font-medium md:text-หท">film genre</span>
						<img src="./assets/dropdown.png" class="w-4 h-3 pl-1" />
					</button>
					<div class="absolute w-full mt-1 rounded-md md:w-1/5 md:bg-midGray">
						<div class="md:grid md:grid-cols-2 md:gap-4">
							<div class="genreColumn">
								<div class="md:grid md:grid-rows-5 ">
									<a class="menuBlock" href="">action </a>
									<a class="menuBlock" href="">adventure</a>
									<a class="menuBlock" href="">comedy</a>
									<a class="menuBlock" href="">drama</a>
									<a class="menuBlock" href="">fantasy</a>
								</div>
							</div>
							<div class="genreColumn">
								<div class="md:grid md:grid-rows-5 ">
									<a class="menuBlock" href="">horror</a>
									<a class="menuBlock" href="">mystery</a>
									<a class="menuBlock" href="">romance</a>
									<a class="menuBlock" href="">sci-fi</a>
									<a class="menuBlock" href="">thriller</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
</template>
