import http from "../http-common";

class MovieService {
	getAllMovies() {
		// response = await http.get("/movies");
		return http.get("/movies");
	}

	// addMovie(movie) {
	// 	return http.post("/admin/movie/add", movie, { headers: authHeader() });
	// }
}

export default new MovieService();
