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

	getMovieByGenre(genreId) {
		return http.get(`/view/genre/${genreId}`);
	}
	getImage(imgName) {
		return http.get(`/view/img/${imgName}`);
	}
	getUpcommingMovie() {
		return http.get(`/view/status/22`);
	}
}

export default new MovieService();
