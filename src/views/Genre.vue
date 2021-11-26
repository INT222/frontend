<template>
    <div>
        <h1 class="text-white text-3xl mx-10">{{ genrename }}</h1>
        <div>
            <find-list-block />
        </div>
    </div>
</template>

<script>
import FindListBlock from "../components/FindListBlock.vue";

export default {
    components: {
        "find-list-block": FindListBlock,
    },
    data() {
        return {
            genrename: "",
            genre: [
			{
				genre_id: 1,
				name: "Action",
			},
			{
				genre_id: 2,
				name: "Adventure",
			},
			{
				genre_id: 3,
				name: "Comedy",
			},
			{
				genre_id: 4,
				name: "Drama",
			},
			{
				genre_id: 5,
				name: "Fantacy",
			},
			{
				genre_id: 6,
				name: "Horror",
			},
			{
				genre_id: 7,
				name: "Mystery",
			},
			{
				genre_id: 8,
				name: "Romantic",
			},
			{
				genre_id: 9,
				name: "Sci-fi",
			},
			{
				genre_id: 10,
				name: "Thriller",
			},
		],
        };
    },
    methods: {
      matchGenreNameByGenreId() {
            for(let i = 0; i < this.genre.length; i++) {
                if(this.genre[i].genre_id === parseInt(this.$route.params.id)) {
                    //  console.log(this.genre[i].name)
                    this.genrename = this.genre[i].name
                }
               
            }
            // console.log(typeof(this.$route.params.id));
            return this.genrename
        }
    },
    created() {
        this.matchGenreNameByGenreId() 
    }
}
</script>