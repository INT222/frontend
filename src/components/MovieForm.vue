<template>
	<div>
		<h1 class="mt-2 text-xl font-bold text-center text-white uppercase tracking-wide md:hidden">add movie</h1>
		<div class="mt-5 mx-2 md:mt-10 md:mx-16 md:grid md:grid-cols-5">
			<div class="hidden md:block md:col-span-2"></div>
			<div class="bg-white rounded-xl md:h-5/6 md:rounded-none md:mt-0 md:rounded-r-3xl md:col-span-3 md:overflow-auto">
				<h1 class="hidden md:block md:text-xl md:px-12 md:font-bold md:mt-12 md:uppercase">add movie</h1>
				<w-form id="movieform" name="movieform" v-model="valid" class="py-7 px-7 space-y-8 md:px-12 md:py-12">
					<div name="moviename" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Movie name</label>
						<w-input
							:validators="[validators.required]"
							type="text"
							placeholder="ex. Captain America"
							class="font-normal"
							color="black"
							v-model="movie.moviename"
						></w-input>
					</div>
					<div name="genre" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Genre</label>
						<w-select
							:items="genres"
							:validators="[validators.required]"
							multiple
							placeholder="Can have more than 1"
							selection-color="grey"
							color="black"
							v-model="movie.movieGenre"
							return-object
						>
							<template #item="{ item, selected }">
								<w-icon v-if="selected" class="primary">wi-check</w-icon>
								<span v-else></span>
								<span>{{ item.genre }}</span>
							</template>
						</w-select>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div name="runningtime" class="space-y-4">
							<label class="block tracking-wide text-gray-600 text-md font-semibold">Running time</label>
							<w-input
								name="time"
								:validators="[validators.required]"
								type="number"
								placeholder="ex. 2.45 H(s)"
								class="font-normal"
								color="black"
								v-model="movie.runtime"
							></w-input>
						</div>
						<div name="studio" class="space-y-4">
							<label class="block tracking-wide text-gray-600 text-md font-semibold">Studio</label>
							<w-select
								:validators="[validators.required]"
								:items="studios"
								placeholder="Can have only 1"
								color="black"
								v-model="movie.studio"
								return-object
							>
								<template #item="{ item, selected }" :no-unselect="true">
									<w-icon v-if="selected" class="primary">wi-check</w-icon>
									<span v-else></span>
									<span>{{ item.studioname }}</span>
								</template>
							</w-select>
						</div>
					</div>
					<div name="releaseddate" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Released date</label>
						<w-input
							:validators="[validators.required]"
							type="date"
							class="font-normal"
							color="black"
							v-model="movie.releasedate"
						></w-input>
					</div>
					<div name="status" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Movie status</label>
						<w-select
							:validators="[validators.required]"
							:items="status"
							placeholder="Can have only 1"
							color="black"
							v-model="movie.status"
							return-object
						>
							<template #item="{ item, selected }">
								<w-icon v-if="selected" class="primary">wi-check</w-icon>
								<span v-else></span>
								<span>{{ item.statusname }}</span>
							</template>
						</w-select>
					</div>
					<div name="poster" class="space-y-2">
						<div class>
							<label class="block tracking-wide text-gray-600 text-md font-semibold">Poster</label>
							<p class="text-gray-400 text-xs">Click on a line below to upload file</p>
						</div>
						<w-input type="file" @change="imageHandler" :modelValue="poster"></w-input>
					</div>
					<div name="link" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Video link</label>
						<w-input
							:validators="[validators.required]"
							type="url"
							placeholder="ex. https//youtu.be/xxxx"
							class="font-normal"
							color="black"
							v-model="movie.trailer"
						></w-input>
					</div>
					<div name="plot" class>
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Plot</label>
						<w-textarea
							:validators="[validators.required]"
							placeholder="Write movie plot here !"
							class="font-normal"
							color="black"
							v-model="movie.plot"
						></w-textarea>
					</div>
					<div class="pt-5 flex justify-center space-x-32 md:justify-end md:space-x-12">
						<w-button type="reset" bg-color="black" height="35" class="text-sm md:text-md">
							<p class="uppercase px-2 text-white">cancel</p>
						</w-button>
						<w-button @click="saveMovie" bg-color="info-light1" height="35" class="text-sm md:text-md">
							<p class="uppercase px-5 text-white">save</p>
						</w-button>
					</div>
				</w-form>
			</div>
		</div>
	</div>
</template>
<script>
import movieDataService from "../services/movie-data-service";
export default {
	props: {
		moviename: String,
		movieGenre: Array,
		runtime: Number,
		studio: Object,
		releasedate: String,
		moviestatus: Object,
		poster: String,
		trailer: String,
		plot: String,
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
		saveMovie() {
			const bodyFormData = new FormData();
			bodyFormData.append("imgFile", this.fileUpload);
			bodyFormData.append("movie", JSON.stringify(this.movie));
			movieDataService.createMovie(bodyFormData).catch((error) => {
				this.errorText = JSON.stringify(error.response.data.message);
				this.$waveui.notify({ message: this.errorText, color: "error", timeout: 0 });
				console.log(this.errorText);
			});
		},
		imageHandler(event) {
			const input = event.target.files[0];
			this.fileUpload = input;
		},
	},
};
</script>
