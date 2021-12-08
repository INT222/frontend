<template>
	<div class="hidden md:block">
		<w-button
			@click="dialog.show = true"
			bg-color="transparent"
			color="white"
			class="uppercase font-medium tracking-wider hover:text-deepBlue py-5"
			>View profile</w-button
		>
		<w-dialog
			v-model="dialog.show"
			:persistent="dialog.persistent"
			:persistent-no-animation="dialog.persistentNoAnimation"
			title-class="primary-light1--bg white"
			:width="dialog.width"
		>
			<div class="space-y-4 text-black">
				<div class="justify-center divide-x">
					<w-divider class color="grey-dark5">
						<div class="bg-yellow-200 w-20 h-20 object-cover rounded-full p-1 mx-auto">
							<p>
								<img class="w-16 mx-auto" src="../assets/profile.png" />
							</p>
						</div>
					</w-divider>
				</div>
				<p class="text-center">@{{ dup_user.username }}</p>
				<p class="text-center">{{ dup_user.fullname }}</p>
				<div class="flex justify-center pt-4">
					<router-link to="/editprofile">
						<w-button bg-color="purple-light1" @click="dialog.show = false" color="white">Edit Profile</w-button>
					</router-link>
				</div>
			</div>
		</w-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialog: {
				show: false,
				persistent: false,
				persistentNoAnimation: false,
				width: 300,
			},
			dup_user: this.$store.state.auth.user.user,
		};
	},
	computed: {},
};
</script>
