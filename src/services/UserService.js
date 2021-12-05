import http from "../http-common";
import authHeader from "./auth-header";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.Authorization = authHeader();
class UserService {
	getWatchlist() {
		return http.get("/api/user/favlist");
	}

	getUserProfile() {
		return http.get("/api/user");
	}

	addToWatchlist(movieId) {
		// console.log(authHeader(), movieId);
		return http.post(`/movie/${movieId}/fav`);
	}
	removeToWatchlist(movieId) {
		// return http.delete(`/movie/fav/${movieId}`, { headers: authHeader() });
		return http.delete(`/movie/fav/${movieId}`);
	}
	// getModeratorBoard() {
	// 	return axios.get(API_URL + "mod", { headers: authHeader() });
	// }

	// getAdminBoard() {
	// 	return axios.get(API_URL + "admin", { headers: authHeader() });
	// }
	postComment(id, data) {
		return http.post(`/api/comment/add/${id}`, data);
	}
}

export default new UserService();
