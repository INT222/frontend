<template>
    <w-app>
        <!-- <genre-list-block></genre-list-block> -->
        <div class="relative flex w-1/4 flex-wrap items-stretch mt-10 mb-3 mx-auto">
            
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
        <!-- <div class="md:mt-10 md:flex md:justify-center">
            <input type="search" class="md:w-1/4 md:h-10 md:px-4 md:rounded-md md:text-lg"/>
            <w-icon>material-icons close</w-icon>
        </div>-->
    </w-app>
</template>

// <script>
// import GenreListBlock from '../components/GenreListBlock.vue'
// export default {
//     components: {
//         'genre-list-block': GenreListBlock
//     }
// }
// </script>

