<template>
    <w-app>
        <div>
            <button
					class="grey-light2 absolute left-20 top-0"
					:class="{
						'info-light1': changeColor == true,
					}"
					@click="changeColor = !changeColor"
				>
					<w-icon xs>material-icons bookmark</w-icon>
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
