<template>
    <div class="-ml-1 mt-1 md:mt-0">
        <w-button
            bg-color="transparent"
            class="px-5 py-2 uppercase"
            @click="showDropDown = !showDropDown"
            color="white"
            :height="40"
        >
            <div class="inline-flex space-x-3 md:px-1 md:my-0">
                <p class="text-white my-auto md:my-2 text-sm uppercase">Fah {{ username }}</p>
                <div class="pl-2 pr-5 md:pr-1 md:pl-0 my-auto">
                    <w-icon md color="white" v-if="showDropDown == false">mdi mdi-chevron-down</w-icon>
                    <w-icon md color="white" v-if="showDropDown">mdi mdi-chevron-up</w-icon>
                </div>
            </div>
        </w-button>
        <div class="absolute mt-2 md:w-20 md:ml-0 md:mt-0 z-10 md:bg-blackBlue" v-if="showDropDown">
            <div class="text-white text-sm uppercase font-medium">
                <user></user>
                <w-button bg-color="transparent" class="md:w-20 block hover:bg-gray-500 hover:bg-opacity-40 pr-4 py-2 md:pl-6">
                Log out</w-button>
            </div>
        </div>
    </div>
</template>

<script>
import User from "./User.vue";

export default {
    components: {
        'user': User
    },
    data() {
        return {
            props: [ 'username'],
            items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }],
            showDropDown: false,
        }
    }
};
</script>