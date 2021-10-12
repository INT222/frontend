<template>
    <w-app>
        <div class="relative">
				<!-- <img class="block h-44 md:h-60" src="../src/assets/LoveSimon.jpg"> -->
			<button
				class="grey-light2 absolute left-20 md:left-28 -top-2"
				:class="{
					'info-light1': changeColor == true,
				}"
				@click="changeColor = !changeColor"
			>
				<w-icon sm>material-icons bookmark</w-icon>
			</button>
			</div>
    </w-app>
</template>

<script>
export default {
	data() {
		return {
			changeColor: false
		}
	}
}
</script>
