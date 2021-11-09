import axios from "axios";

const API_URL = "http://104.215.144.82/backend/auth/";

class AuthService {
	login(user) {
		return axios
			.post(API_URL + "login", {
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
		return axios.post(API_URL + "signup", {
			username: user.username,
			password: user.password,
			firstname: user.firstname,
			lastname: user.lastname,
		});
	}
}

export default new AuthService();
