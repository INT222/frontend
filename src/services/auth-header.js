export default function authHeader() {
	// return authorization header with jwt token
	let user = JSON.parse(localStorage.getItem("user"));

	if (user && user.jwt) {
		return "Bearer " + user.jwt;
	} else {
		return {};
	}
}
