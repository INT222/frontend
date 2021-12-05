import http from "../http-common";
http.defaults.headers["Content-type"] = "application/json";
class AuthService {
	login(user) {
		return http.post("/auth/login", user).then((response) => {
			if (response.data.jwt) {
				localStorage.setItem("user", JSON.stringify(response.data));
				// localStorage.setItem("accessToken", JSON.stringify(response.data.jwt));
			}
			return response.data;
		}); // http.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
		// localStorage.setItem("user", JSON.stringify(response.data));
	}

	// axios.post('login', this.user)
	// .then(r=>
	// {
	// 	 axios.defaults.headers.common['Authorization'] = 'Bearer ' + r.data.token;

	// 	 localStorage.setItem( 'token', JSON.stringify(r.token) );
	// }

	logout() {
		localStorage.removeItem("user");
	}

	register(user) {
		return http.post("/auth/signup", user);
	}
	getUsernameList() {
		return http.get("/view/userlist");
	}
}

export default new AuthService();
