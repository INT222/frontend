<template>
    <w-app>
        <div>
            <BackButton></BackButton>
            <w-icon xl color="white">material-icons search</w-icon>
            <w-icon color="white" size="30">material-icons add</w-icon>
        </div>

        <!-- <div class="inline-flex mt-10 justify-center space-x-5">
            <div class="relative flex w-1/4 flex-wrap items-stretch ">
                <input
                    type="text"
                    placeholder="Search"
                    class="px-3 py-3 placeholder-gray-400 text-gray-500 relative bg-white rounded-lg text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full pl-10"
                />
                <span
                    class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 bg-transparent rounded text-base items-end justify-end w-8 pl-3 py-3"
                >
                    <w-icon>material-icons search</w-icon>
                </span>
            </div>
            <div class="my-auto">
                <button
                    type="button"
                    class="w-full h-10 border bg-white font-medium text-xs rounded-xl uppercase md:w-24 md:rounded-lg md:h-8"
                >Add movie</button>
            </div>
        </div>-->

        <!-- <div class="md:mt-10 md:flex md:justify-center">
            <input type="search" class="md:w-1/4 md:h-10 md:px-4 md:rounded-md md:text-lg"/>
            <w-icon>material-icons close</w-icon>
        </div>-->
    </w-app>
</template>

// <script>
// import GenreListBlock from '../components/GenreListBlock.vue'
import BackButton from '../components/BackButton.vue'
export default {
    components: {
        BackButton
    }
}
</script>

