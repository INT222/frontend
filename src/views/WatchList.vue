<template>
    <div class="mx-5 tb:mt-5">
        <h1 class="uppercase text-white text-xl font-semibold ml-2 mb-6 md:ml-9">my watch list</h1>
        <button @click="goRoute(m.movie_id)">
            <watch-list-block></watch-list-block>
        </button>
    </div>
</template>

<script>
import WatchListBlock from "@/components/WatchListBlock.vue";
export default {
    components: {
        'watch-list-block': WatchListBlock,
    },
    methods: {
        goRoute(movieId) {
            this.$router.push(`/movie/${movieId}`);
        },
    }
}
</script>
