<template>
	<w-app>
		<div class="mt-4">
			<p class="text-3xl text-white mx-auto text-center mb-5">Manage movie</p>
			<div class>
				<div class="flex items-center justify-center">
					<div class="col-span-1 md:col-span-12">
						<div class="md:overflow-hidden">
							<table class="table text-gray-400 border-separate space-y-6 text-sm">
								<thead class="text-gray-500">
									<tr class="uppercase">
										<th class="bg-white p-3">no</th>
										<th class="bg-white p-1 md:p-3">movie id</th>
										<th class="bg-white p-3">movie name</th>
										<th class="bg-white hidden p-3 tb:table-cell md:table-cell">runtime</th>
										<th class="bg-white hidden p-3 tb:table-cell md:table-cell">genre</th>
										<th class="bg-white hidden p-3 tb:table-cell md:table-cell">release date</th>
										<th>
											<router-link to="/movieform">
												<w-button height="44" bg-color="info-light1" class="ml-3">
													<w-icon color="black">material-icons add</w-icon>
													<p class="px-1 uppercase text-black">add</p>
												</w-button>
											</router-link>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr class="text-white">
										<td class="bg-gray-600 p-3 text-center">
											<p class="text-center">100</p>
										</td>
										<td class="bg-gray-600 p-3 text-center">100</td>
										<td class="bg-gray-600 p-3">
											<p id="mname">Shang-Chi and the Legend of the Ten Rings</p>
										</td>
										<td class="bg-gray-600 hidden tb:table-cell md:table-cell md:p-3 md:text-center">100</td>
										<td class="bg-gray-600 hidden tb:table-cell md:table-cell md:p-3">
											<p id="genre">Adventure Sci-fi Thriller</p>
										</td>
										<td class="bg-gray-600 hidden tb:table-cell md:table-cell md:text-center">
											<p>Oct 3, 2021</p>
										</td>
										<td>
											<w-button height="44" width="44" bg-color="red-dark1" class="ml-7">
												<w-icon color="white">material-icons delete</w-icon>
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
	</w-app>
</template>

<script>
export default {
	// props: {
	//     title,
	//     movieid,
	//     movieno,
	//     runtime,
	//     genre,
	//     releasedate,
	// }
};
</script>

<style>
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

tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
	border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
	border-radius: 0.625rem 0 0 0.625rem;
}
</style>
