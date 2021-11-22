<template>
    <div v-for="g in movieMatchGenre" :key="g.genre_id" class="inline-flex p-4 ml-6">
        <find-list-block :imgPoster="getImage(g.poster)" :genre="g.genre" />
    </div>
</template>

<script>
import FindListBlock from "../components/FindListBlock.vue";
import movieService from "../services/MovieService";

export default {
    components: {
        "find-list-block": FindListBlock,
    },
    data() {
        return {
            movieMatchGenre: [],
        };
    },
    methods: {
        async fecthData() {
            const movie = await movieService.getMovieByGenre(this.$route.params.id);
            // console.log(`This is banner :${banner.data}`);
            this.movieMatchGenre = movie.data;
            console.log(this.movieMatchGenre);
        },
        getImage(imgName) {
            return `${process.env.VUE_APP_BACKEND_URL}/view/img/${imgName}`;
        },
    },
    created() {
        this.fecthData();
    },
};
</script>
