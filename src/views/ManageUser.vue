<template>
	<div class="mt-4">
		<p class="text-3xl text-white mx-auto text-center mb-5">Manage user</p>
		<div class>
			<div class="flex items-center justify-center">
				<div class="col-span-1 md:col-span-12">
					<div class="md:overflow-hidden">
						<table class="table text-gray-400 border-separate space-y-6 text-sm">
							<thead class="text-gray-500">
								<tr class="uppercase">
									<th class="bg-white p-3">no</th>
									<th class="bg-white p-1 md:p-3">user id</th>
									<th class="bg-white p-3">username</th>
									<th class="bg-white hidden p-3 tb:table-cell md:table-cell">firstname</th>
									<th class="bg-white hidden p-3 tb:table-cell md:table-cell">lastname</th>
									<!-- <th class="bg-white hidden p-3 tb:table-cell md:table-cell">release date</th> -->
								</tr>
							</thead>
							<tbody v-for="(l, index) in lists" :key="index.user_id">
								<tr class="text-white">
									<td class="bg-gray-600 p-3 text-center">
										<p class="text-center">{{ index }}</p>
									</td>
									<td class="bg-gray-600 p-3 text-center">{{ l.user_id }}</td>
									<td class="bg-gray-600 p-3">
										<p id="mname" class="text-center overflow-hidden truncate w-24">{{ l.username }}</p>
									</td>
									<td class="bg-gray-600 hidden tb:table-cell md:table-cell md:p-3 md:text-center">{{ l.firstname }}</td>
									<td class="bg-gray-600 hidden tb:table-cell md:table-cell md:p-3">
										<p id="genre" class="text-center overflow-hidden truncate w-24">{{ l.lastname }}</p>
									</td>
									<td>
										<w-button @click="removeUser(l.user_id)" height="44" width="44" bg-color="red-dark1" class="ml-7">
											<w-icon color="white" lg>mdi mdi-trash-can-outline</w-icon>
										</w-button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import userService from "../services/UserService";
export default {
	data() {
		return {
			lists: []
		}
	},
	methods: {
		async fetchData() {
			const response = await userService.getUserList();
			this.lists = response.data;
			// console.log(response.data)
			// console.log(this.lists)
		},
		removeUser(id) {
			userService
				.deleteUser(id)
				.then((res) => {
				this.$waveui.notify({ message: res.data, color: "success"});
				})
				.catch((error) => {
				this.$waveui.notify({ message: error.data, color: "error"});
				});
		}
	},
	created() {
		this.fetchData();
	},

};
</script>

<style scoped>
@media screen and (max-width: 768px) {
	#mname {
		width: 125px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	tr td:nth-child(n + 3),
	tr th:nth-child(n + 3) {
		border-radius: 0 0.625rem 0.625rem 0;
	}
}
@media screen and (max-width: 1280px) {
	#mname {
		width: 125px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	#genre {
		width: 125px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: 0.625rem 0 0 0.625rem;
	}
}

.table {
	border-spacing: 0 15px;
}

.table tr {
	border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
}
</style>
