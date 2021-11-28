<template>
	<div>
		<w-button @click="showDrawer = true" bg-color="transparent">
			<w-icon lg color="white" class="-ml-1">mdi mdi-menu</w-icon>
		</w-button>
	</div>
	<div class="block mx-auto my-auto">
		<w-drawer v-model="showDrawer" left class="text-white" bg-color="grey-dark5" width="187">
			<w-button
				class="button--close"
				@click="showDrawer = false"
				sm
				outline
				round
				absolute
				color="white"
				icon="wi-cross"
			></w-button>
			<div class="space-y-6 mx-5 mt-10 w-96">
				<div class="space-y-1" v-if="this.loggedin === true">
					<div class="flex text-sm space-x-2 font-medium">
						<p>Qwanjai</p>
						<p>Deelertpradit</p>
					</div>
					<div class="text-xs text-gray-400 tracking-widest">
						<p>@admin_qwan_edit</p>
					</div>
				</div>
				<div v-if="this.loggedin === false">
					<router-link to="/signin">
						<w-button bg-color="transparent" class="text-sm text-white uppercase">sign in</w-button>
					</router-link>
				</div>
				<div v-if="this.loggedin === false">
					<router-link to="/signup">
						<w-button bg-color="transparent" class="text-sm text-white uppercase">sign up</w-button>
					</router-link>
				</div>
				<div class="space-y-2 -ml-2" v-if="this.loggedin === true">
					<router-link to="/editprofile">
						<w-button
							bg-color="transparent"
							color="info-light1"
							class="block uppercase text-xs w-auto tracking-wider"
						>edit profile</w-button>
					</router-link>
					<w-button
						@click="clickToLogOut"
						bg-color="transparent"
						color="red"
						class="block uppercase text-xs w-auto tracking-widest"
					>sign out</w-button>
				</div>
				<w-divider class="w-36" color="grey" />
				<div class="-ml-3">
					<genre-list-block></genre-list-block>
				</div>
				<div class="-ml-2">
					<router-link to="/watchlist">
						<w-button :height="40" bg-color="transparent">
							<w-icon class="-ml-1 -mt-1" :size="25" color="grey">mdi mdi-bookmark</w-icon>
							<p class="text-sm ml-3 text-white uppercase pr-6">watch list</p>
						</w-button>
					</router-link>
				</div>
				<div class="mt-6 -ml-4">
					<manage-list ></manage-list>
				</div>
			</div>
		</w-drawer>
	</div>
</template>

<script>
import GenreListBlock from "./GenreListBlock.vue";
import { auth } from "../services/auth-module";
// import User from "./User.vue";
import authService from "../services/auth-service";
import ManageList from './ManageList.vue';
export default {
	components: {
		"genre-list-block": GenreListBlock,
		"manage-list": ManageList,
		// 'user': User,
	},
	data() {
		return {
			showDrawer: false,
			loggedin: auth.state.status.loggedIn,
		};
	},
	methods: {
		clickToLogOut() {
			authService.logout();
			location.reload();
		},
		// showProfile() {
		// 	this.$emit("show-profile", "profile is click");
		// },
	},
};
</script>
