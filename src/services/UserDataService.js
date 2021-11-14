import http from "../http-common";

http.defaults.headers["Content-type"] = "application/json";
class UserDataService {
	getAll() {
		return http.get("/users");
	}

	get(id) {
		return http.get(`/users/${id}`);
	}

	create(data) {
		return http.post("/auth/signup", data);
	}

	update(id, data) {
		return http.put(`/users/${id}`, data);
	}
}

export default new UserDataService();
