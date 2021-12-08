<template>
	<div>
		<h1 class="mt-2 text-xl font-bold text-center text-white uppercase tracking-wide md:hidden">add movie</h1>
		<movie-form></movie-form>
	</div>
</template>
<script>
import movieDataService from "../services/movie-data-service";
import MovieForm from "../components/MovieForm.vue";
export default {
	components: {
		"movie-form": MovieForm,
	},
	data() {
		return {
			genres: [
				{ genre_id: 1, genre: "Action" },
				{ genre_id: 2, genre: "Adventure" },
				{ genre_id: 3, genre: "Comedy" },
				{ genre_id: 4, genre: "Drama" },
				{ genre_id: 5, genre: "Fantasy" },
				{ genre_id: 6, genre: "Horror" },
				{ genre_id: 7, genre: "Mystery" },
				{ genre_id: 8, genre: "Romance" },
				{ genre_id: 9, genre: "Sci-fi" },
				{ genre_id: 10, genre: "Thriller" },
			],
			studios: [
				{ studio_id: 30, studioname: "20th Century Fox" },
				{ studio_id: 31, studioname: "A24" },
				{ studio_id: 45, studioname: "Amazon Studios" },
				{ studio_id: 43, studioname: "Aniplex" },
				{ studio_id: 32, studioname: "Lionsgate" },
				{ studio_id: 33, studioname: "Marvel Studios" },
				{ studio_id: 34, studioname: "New Line Cinema" },
				{ studio_id: 35, studioname: "Next Entertainment World" },
				{ studio_id: 36, studioname: "Paramount Pictures" },
				{ studio_id: 37, studioname: "Skydance Media" },
				{ studio_id: 42, studioname: "Sony Pictures Releasing" },
				{ studio_id: 44, studioname: "Summit Entertainment" },
				{ studio_id: 38, studioname: "The Weinstein Company" },
				{ studio_id: 39, studioname: "Universal Pictures" },
				{ studio_id: 40, studioname: "Walt Disney Pictures" },
				{ studio_id: 41, studioname: "Warner Bros.Pictures" },
			],
			status: [
				{ status_id: 20, statusname: "General" },
				{ status_id: 21, statusname: "On showing" },
				{ status_id: 22, statusname: "Up coming" },
			],
			valid: null,
			validators: {
				required: (value) => !!value || "This field is required",
			},
			movie: {
				moviename: "",
				runtime: 0.0,
				releasedate: "",
				plot: "",
				avg_rating: "",
				trailer: "",
				studio: null,
				status: null,
				movieGenre: [],
			},
			fileUpload: null,
		};
	},
	methods: {
		newMovie() {
			const bodyFormData = new FormData();
			bodyFormData.append("imgFile", this.fileUpload);
			bodyFormData.append("movie", JSON.stringify(this.movie));
			movieDataService
				.createMovie(bodyFormData)
				.then((response) => {
					if (response.status == 200) {
						this.$waveui.notify("add movie successfully", "success");
					}
					if(response.status == 401) {
						this.$waveui.notify("Strict access for admin only", "error");
					}
				})
				// .catch((error) => {
				// 	this.errorText = JSON.stringify(error.response.data.message);
				// 	this.$waveui.notify(this.errorText, "error");
				// });
		},
		imageHandler(event) {
			const input = event.target.files[0];
			this.fileUpload = input;
		},
	},
};
</script>
