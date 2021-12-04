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
	getUpcommingMovie() {
		return http.get(`/view/status/22`);
	}
	getTop5Movie() {
		return http.get(`/movies/top5`);
	}
	getCommentByMovieId(movieId) {
		return http.get(`/view/comment/${movieId}`);
	}
}

export default new MovieService();
