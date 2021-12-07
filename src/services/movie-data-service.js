import http from "../http-common";
import authHeader from "./auth-header";
// http.defaults.headers["Content-type"] = "multipart/form-data";
// http.defaults.headers["Content-type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
http.defaults.headers.Authorization = authHeader();
class MovieDataService {
	createMovie(data) {
		http.defaults.headers["Content-type"] = "multipart/form-data";
		return http.post("/admin/movie/add", data);
	}

	update(id, data) {
		return http.put(`/users/${id}`, data);
	}
}

export default new MovieDataService();
