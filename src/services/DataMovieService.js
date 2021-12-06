import http from "../http-common";
import authHeader from "./auth-header";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
http.defaults.headers["Content-type"] = "multipart/form-data";
http.defaults.headers.Authorization = authHeader();
class DataMovieService {
    addMovie(movie, file) {
        return http.post(`/admin/movie/add`, movie, file)
    }
}

export default new DataMovieService();