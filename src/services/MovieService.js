import http from "../http-common";

class MovieService {
	getAllMovies() {
		// response = await http.get("/movies");
		return http.get("/movies");
	}

	getMovieById(id) {
		return http.get(`/movie/${id}`);
	}
	// addMovie(movie) {
	// 	return http.post("/admin/movie/add", movie, { headers: authHeader() });
	// }

	getMovieByGenre(id) {
		return http.get(`/view/genre/${id}`);
	}
}

export default new MovieService();
