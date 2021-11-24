import http from "../http-common";
import authHeader from "./auth-header";

class UserService {
	getWatchlist() {
		return http.get("/all");
	}

	// getUserBoard() {
	// 	return axios.get(API_URL + "user", { headers: authHeader() });
	// }

	// getModeratorBoard() {
	// 	return axios.get(API_URL + "mod", { headers: authHeader() });
	// }

	// getAdminBoard() {
	// 	return axios.get(API_URL + "admin", { headers: authHeader() });
	// }
	postComment(data) {
		return http.post("/api/comment/add", data, { headers: authHeader() });
	}
}

export default new UserService();
