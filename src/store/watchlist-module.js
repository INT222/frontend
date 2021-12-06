import UserService from "../services/user-service.js";

const watchlist = JSON.parse(localStorage.getItem("watchlist"));
const initialState = watchlist
	? { status: { getlist: true }, watchlist }
	: { status: { getlist: false }, watchlist: null };

export const favlist = {
	namespaced: true,
	state: initialState,
	actions: {
		getWatchlist({ commit }) {
			return UserService.getWatchlist().then(
				(res) => {
					commit("getWactchlistSuccess", res);
					return Promise.resolve(res);
				},
				(error) => {
					commit("getWactchlistFailure");
					return Promise.reject(error);
				}
			);
		},
		// logout({ commit }) {
		// 	AuthService.logout();
		// 	commit("logout");
		// },
		addToWatchlist({ commit }, id) {
			return UserService.addToWatchlist(id).then(
				(response) => {
					commit("addSuccess");
					return Promise.resolve(response.data);
				},
				(error) => {
					commit("addFailure");
					return Promise.reject(error);
				}
			);
		},
	},
	mutations: {
		getWactchlistSuccess(state, watchlist) {
			state.status.getlist = true;
			state.watchlist = watchlist;
		},
		getWactchlistFailure(state) {
			state.status.getlist = false;
			state.watchlist = null;
		},
		// logout(state) {
		// 	state.status.loggedIn = false;
		// 	state.user = null;
		// },
		addSuccess(state) {
			state.status.getlist = true;
		},
		addFailure(state) {
			state.status.getlist = false;
		},
	},
};
