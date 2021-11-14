import http from "../http-common";
import authHeader from "./auth-header";

class UserService {
	getWatchlist() {
		return http.get("/all");
	}

	getUserBoard() {
		return axios.get(API_URL + "user", { headers: authHeader() });
	}

	getModeratorBoard() {
		return axios.get(API_URL + "mod", { headers: authHeader() });
	}

	getAdminBoard() {
		return axios.get(API_URL + "admin", { headers: authHeader() });
	}
}

export default new UserService();
