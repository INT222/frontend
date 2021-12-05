// import axios from "axios";
import http from "../http-common";
// import axios from "axios";
import authHeader from "./auth-header";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.Authorization = authHeader();
class UserService {
	getWatchlist() {
		return http.get("/api/user/favlist");
	}

	getUserProfile() {
		return http.get("/api/user", { headers: authHeader() });
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

	getUserList() {
		return http.get("/api/admin/view/user");
	}
	// postComment(data) {
	// 	return http.post("/api/comment/add", data, { headers: authHeader() });
	// }
	// getUsernameList() {
	// 	return http.get("/view/userlist");
	// }
	deleteMovie(movieId) {
		return http.delete(`/admin/movie/delete/${movieId}`)
	}
	deleteUser(id) {
		return http.delete(`/api/user/${id}`)
	}
}

export default new UserService();
