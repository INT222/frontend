import axios from "axios";

export default axios.create({
	baseURL: "http://104.215.144.82/backend/api",
	headers: {
		"Content-type": "application/json",
	},
});
