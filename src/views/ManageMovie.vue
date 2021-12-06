<template>
	<div class="mt-4">
		<p class="text-3xl text-white mx-auto text-center mb-5">Manage Movie</p>
		<div class>
			<div class="flex items-center justify-center">
				<div class="col-span-1 md:col-span-12">
					<div class="md:overflow-hidden">
						<table class="table text-gray-400 border-separate space-y-6 text-sm">
							<thead class="text-gray-500">
								<tr class="uppercase">
									<th class="bg-white p-3">no</th>
									<th class="bg-white p-1 md:p-3">movie id</th>
									<th class="bg-white p-3">moviename</th>
									<th class="bg-white hidden p-3 tb:table-cell md:table-cell">runtime</th>
									<th class="bg-white hidden p-3 tb:table-cell md:table-cell">genres</th>
									<th class="bg-white hidden p-3 tb:table-cell md:table-cell">release date</th>
									<th>
										<router-link to="/movieform">
											<w-button height="44" bg-color="info-light1" class="ml-3">
												<w-icon color="black" md>mdi mdi-plus</w-icon>
												<p class="px-1 uppercase text-black">add</p>
											</w-button>
										</router-link>
									</th>
								</tr>
							</thead>
							<tbody v-for="(m, index) in movies" :key="m.movie_id">
								<tr class="text-white">
									<td class="bg-gray-600 p-3 text-center">
										<p class="text-center">{{ index }}</p>
									</td>
									<td class="bg-gray-600 px-3 py-2 text-center">{{ m.movie_id }}</td>
									<td class="bg-gray-600 px-3 py-2">
										<p id="mname" class="overflow-hidden truncate w-36 tb:w-44">{{ m.moviename }}</p>
									</td>
									<td
										class="bg-gray-600 hidden tb:table-cell tb:text-center md:table-cell md:px-3 md:py-2 md:text-center"
									>
										{{ m.runtime }}
									</td>
									<div
										class="bg-gray-600 hidden tb:table-cell md:table-cell overflow-hidden truncate w-36 tb:px-3 tb:py-2"
									>
										<td v-for="g in m.movieGenre" :key="g.genre_id">
											<p id="genre">{{ g.genre }}/</p>
										</td>
									</div>
									<td class="bg-gray-600 hidden tb:table-cell tb:text-center md:table-cell md:text-center">
										<p>{{ releaseDate(m.releasedate) }}</p>
									</td>
									<td>
										<w-button @click="removeMovie(m.movie_id)" height="44" width="44" bg-color="red-dark1" class="ml-7">
											<w-icon color="white" lg>mdi mdi-trash-can-outline</w-icon>
										</w-button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import movieService from "../services/movie-service";
import dateFormat from "dateformat";
import userService from "../services/user-service";
export default {
	data() {
		return {
			movies: [],
		};
	},
	methods: {
		async fetchData() {
			const response = await movieService.getAllMovies();
			this.movies = response.data;
		},
		releaseDate(date) {
			return dateFormat(date, "mmm dS, yyyy");
		},
		removeMovie(id) {
			userService
				.deleteMovie(id)
				.then((res) => {
					this.$waveui.notify({ message: res.data, color: "success" });
				})
				.catch((error) => {
					this.$waveui.notify({ message: error.data, color: "error" });
				});
		},
	},
	created() {
		// this.fetchData();
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
	async mounted() {
		if (this.loggedIn) {
			this.fetchData();
		}
	},
};
</script>

<style>
@media screen and (max-width: 768px) {
	/* #mname {
		width: 125px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	} */
	tr td:nth-child(n + 3),
	tr th:nth-child(n + 3) {
		border-radius: 0 0.625rem 0.625rem 0;
	}
}
@media screen and (max-width: 1280px) {
	/* #mname {
		width: 20px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	} */

	/* #genre {
		width: 125px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	} */
	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: 0.625rem 0 0 0.625rem;
	}
}

.table {
	border-spacing: 0 15px;
}

.table tr {
	border-radius: 20px;
}

tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
}
</style>
