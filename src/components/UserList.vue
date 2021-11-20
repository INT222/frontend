<template>
	<div class="-ml-1 mt-1 md:mt-0">
		<w-button
			bg-color="transparent"
			class="px-5 py-2 uppercase"
			@click="showDropDown = !showDropDown"
			color="white"
			:height="40"
		>
			<div class="inline-flex space-x-3 -ml-4 md:px-1 md:my-0">
				<p class="text-white my-auto md:my-2 text-sm uppercase">Fah{{ username }}</p>
				<div class="pl-2 pr-5 md:pr-1 md:pl-0 my-auto">
					<w-icon md color="white" v-if="showDropDown == false">mdi mdi-chevron-down</w-icon>
					<w-icon md color="white" v-if="showDropDown">mdi mdi-chevron-up</w-icon>
				</div>
			</div>
		</w-button>
		<div class="absolute mt-2 ml-14 md:w-28 md:ml-0 z-10 md:bg-blackBlue" v-if="showDropDown">
			<div class="text-white text-xs uppercase font-medium">
				<user></user>
				<w-button
                    @click="clickToLogOut"
                    bg-color="transparent"
                    class="md:mx-4 md:my-2 block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6"
                >Log out</w-button>	
			</div>
		</div>
	</div>
</template>

<script>
import User from "./User.vue";
import authService from '../services/auth-service';

export default {
    components: {
        'user': User
    },
    data() {
        return {
            props: ['username'],
            showDropDown: false,
        }
    },
    methods: {
        clickToLogOut() {
            authService.logout();
            console.log("Log out successful");
            location.reload();
        },
		documentClick(event) {
			if (!this.$el.contains(event.target)) {
				this.showDropDown = false;
			}
		},
	},
	created() {
		document.addEventListener('click', this.documentClick)
	},
	unmounted() {
		document.removeEventListener('click', this.documentClick)
	}
};
</script>

<style>
#dropdown {
	background-color: #20232a;
}
</style>