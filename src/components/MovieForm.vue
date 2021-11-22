<template>
	<div>
		<h1
			class="mt-2 text-xl font-bold text-center text-white uppercase tracking-wide md:hidden"
		>add movie</h1>
		<div class="mt-5 mx-2 md:mt-10 md:mx-16 md:grid md:grid-cols-5">
			<div class="hidden md:block md:col-span-2">
				<!-- <img src="../assets/BlackWidow.jpg" class="rounded-l-3xl w-full h-5/6" /> -->
			</div>
			<div
				class="bg-white rounded-xl md:h-5/6 md:rounded-none md:mt-0 md:rounded-r-3xl md:col-span-3 md:overflow-auto"
			>
				<h1 class="hidden md:block md:text-xl md:px-12 md:font-bold md:mt-12 md:uppercase">add movie</h1>
				<w-form id="movieform" v-model="valid" class="py-7 px-7 space-y-8 md:px-12 md:py-12">
					<div name="moviename" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Movie name</label>
						<w-input
							:validators="[validators.required, validators.moviename]"
							type="text"
							placeholder="ex. Captain America"
							class="font-normal"
							color="black"
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
						></w-select>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div name="runningtime" class="space-y-4">
							<label class="block tracking-wide text-gray-600 text-md font-semibold">Running time</label>
							<w-input
								:validators="[validators.required]"
								type="text"
								placeholder="ex. 2.45 H(s)"
								class="font-normal"
								color="black"
							></w-input>
						</div>
						<div name="studio" class="space-y-4">
							<label class="block tracking-wide text-gray-600 text-md font-semibold">Studio</label>
							<w-select
								:validators="[validators.required]"
								:items="studios"
								placeholder="Can have only 1"
								color="black"
							></w-select>
						</div>
					</div>
					<div name="releaseddate" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Released date</label>
						<w-input :validators="[validators.required]" type="date" class="font-normal" color="black"></w-input>
					</div>
					<div name="status" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Movie status</label>
						<w-select
							:validators="[validators.required]"
							:items="status"
							placeholder="Can have only 1"
							color="black"
						></w-select>
					</div>
					<div name="poster" class="space-y-2">
						<div class>
							<label class="block tracking-wide text-gray-600 text-md font-semibold">Poster</label>
							<p class="text-gray-400 text-xs">Click on a line below to upload file</p>
						</div>
						<w-input
							type="file"
							accept=".jpg, .jpeg, .png"
							placeholder="Click here to upload file"
							color="black"
						></w-input>
					</div>
					<div name="link" class="space-y-4">
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Video link</label>
						<w-input
							:validators="[validators.required]"
							type="url"
							placeholder="ex. https//youtu.be/xxxx"
							class="font-normal"
							color="black"
						></w-input>
					</div>
					<div name="plot" class>
						<label class="block tracking-wide text-gray-600 text-md font-semibold">Plot</label>
						<w-textarea
							:validators="[validators.required]"
							placeholder="Write movie plot here !"
							class="font-normal"
							color="black"
						></w-textarea>
					</div>
					<div class="pt-5 flex justify-center space-x-32 md:justify-end md:space-x-12">
						<router-link to="/managemovie">
							<w-button @click="clearForm" bg-color="black" height="35" class="text-sm md:text-md">
								<p class="uppercase px-2 text-white">cancel</p>
							</w-button>
						</router-link>
						<w-button :disabled="valid === false" bg-color="info-light1" height="35" class="text-sm md:text-md">
							<p class="uppercase px-5 text-white">save</p>
						</w-button>
					</div>
				</w-form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			genres: [
				{ label: "Action" },
				{ label: "Avdenture" },
				{ label: "Comedy" },
				{ label: "Drama" },
				{ label: "Fantasy" },
				{ label: "Horror" },
				{ label: "Mystery" },
				{ label: "Romance" },
				{ label: "Sci-fi" },
				{ label: "Thriller" },
			],
			studios: [
				{ label: "20th Century Fox" },
				{ label: "A24" },
				{ label: "Amazon Studios" },
				{ label: "Aniplex" },
				{ label: "Lionsgate" },
				{ label: "Marvel Studios" },
				{ label: "New Line Cinema" },
				{ label: "Next Entertainment World" },
				{ label: "Paramount Pictures" },
				{ label: "Skydance Media" },
				{ label: "Sony Pictures Releasing" },
				{ label: "Summit Entertainment" },
				{ label: "The Weinstein Company" },
				{ label: "Universal Pictures" },
				{ label: "Walt Disney Pictures" },
				{ label: "Warner Bros.Pictures" },
			],
			status: [{ label: "General" }, { label: "On showing" }, { label: "Up coming" }],
			valid: null,
			validators: {
				required: (value) => !!value || "This field is required",
				// requiredSelect: (value) => value === true || "Choose at least one",
				minLength: (value) => value.length >= 8 || "Your password must be minimum 8 characters",
				moviename: (value) => {
					var usernames = ["About Time", "Eternals", "Dune", "Free Guy"];
					for (let i = 0; i < usernames.length; i++) {
						if (usernames[i].toLowerCase() === value.toLowerCase()) {
							return "This moive already exist";
						}
					}
				},
			},
		}
	},
	methods: {
		clearForm() {
			document.getElementById("movieform").reset();
		},
	}
};
</script>
