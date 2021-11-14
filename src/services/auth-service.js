import http from "../http-common";
http.defaults.headers["Content-type"] = "application/json";
class AuthService {
	login(user) {
		return http.post("/auth/login", user).then((response) => {
			localStorage.setItem("user", JSON.stringify(response.data));
		});
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(user) {
		return http.post("/auth/signup", user);
	}
}

export default new AuthService();
