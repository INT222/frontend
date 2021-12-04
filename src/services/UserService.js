// import axios from "axios";
import http from "../http-common";
// import axios from "axios";
import authHeader from "./auth-header";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.Authorization = authHeader();
// const API_URL = process.env.VUE_APP_BACKEND_URL;

class UserService {
	getWatchlist() {
		return http.get("/api/user/favlist", { headers: authHeader() });
	}

	getUserProfile() {
		return http.get("/api/user", { headers: authHeader() });
	}

	addToWatchlist(movieId) {
		return http.post(`/movie/${movieId}/fav`, { headers: authHeader() });
	}
	removeToWatchlist(movieId) {
		return http.delete(`/movie/fav/${movieId}`, { headers: authHeader() });
	}
	// getModeratorBoard() {
	// 	return axios.get(API_URL + "mod", { headers: authHeader() });
	// }

	// getAdminBoard() {
	// 	return axios.get(API_URL + "admin", { headers: authHeader() });
	// }
	// postComment(data) {
	// 	return http.post("/api/comment/add", data, { headers: authHeader() });
	// }
	// getUsernameList() {
	// 	return http.get("/view/userlist");
	// }
}

export default new UserService();
