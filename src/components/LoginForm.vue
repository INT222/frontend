<template>
	<div id="nav" class="bg-blackBlue w-screen h-screen">
		<div class="bg-white border h-96 rounded-t-lg md:w-2/5 md:mx-auto md:rounded-lg md:h-96 md:mt-10">
			<div class="mx-6 mt-4">
				<p class="font-bold text-xl">Welcome back!</p>
				<p class="text-gray-400 text-xs">Enter your information</p>
				<form class="my-4 grid grid-flow-row">
					<label class="inputInfo">username</label>
					<input type="text"  class="border-b-2 focus:border-blackBlue" placeholder="XXXXXXX" />
					<br />
					<label class="inputInfo">password</label>
					<input type="text" class="border-b-2 focus:border-blackBlue" placeholder="*******" />
				</form>
			</div>
			<div class="flex justify-end mx-6 mt-5">
				<button class="underline font-semibold text-xs">Create an account</button>
			</div>
			<div class="flex justify-center mt-10 mx-6">
				<button class="rounded-full bg-blackBlue text-white w-screen h-12 text-sm uppercase">log in</button>
			</div>
		</div>
	</div>
</template>

