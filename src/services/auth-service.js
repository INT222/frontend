import http from "../http-common";
http.defaults.headers["Content-type"] = "application/json";
class AuthService {
	login(user) {
		return http
			.post("login", {
				username: user.username,
				password: user.password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}

				return response.data;
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
