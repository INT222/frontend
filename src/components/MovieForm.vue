<template>
	<div class="w-full h-full bg-blackBlue">
		<h1
			class="mt-14 text-lg font-medium text-center text-white uppercase tracking-wide md:mt-14 md:text-xl md:font-medium"
		>add movie</h1>
		<form>
			<div class="w-full md:mx-auto md:w-8/12 p-5 md:bg-lightGray md:my-10 md:rounded-xl">
				<div class="md:mx-10">
					<div class="container mt-2 pt-6 pb-8 bg-blackBlue md:bg-lightGray md:mt-0">
						<div name="formsdetails">
							<div name="moviename" class="formsBlock mb-5">
								<label class="formsLable md:px-10 md:text-right md:py-3">movie name</label>
								<input type="text" class="formsInput md:col-span-3 md:py-0 md:text-lg" />
								<!-- <span v-if="errors" class="text-xl text-red-600">{{ errors.inputName }}</span> -->
							</div>
							<div class="grid grid-cols-2 gap-4 mb-5 md:grid md:grid-cols-2 md:gap-0">
								<div name="filmgenre" class="formsBlock">
									<label class="formsLable md:px-10 md:text-right md:col-span-2 md:py-2 md:mt-2">film genre</label>
									<select class="formsInput2">
										<option value="1">Action</option>
										<option value="2">Adventure</option>
										<option value="3">Comedy</option>
										<option value="4">Drama</option>
										<option value="5">Fantasy</option>
										<option value="6">Horror</option>
										<option value="7">Mystery</option>
										<option value="8">Romance</option>
										<option value="9">Sci-fi</option>
										<option value="10">Thriller</option>
									</select>
								</div>
								<div name="runtime" class="formsBlock">
									<label
										class="formsLable md:px-10 md:text-center md:col-span-2 md:py-2 md:mt-2"
									>running time</label>
									<input type="text" placeholder="mins" class="formsInput md:col-span-2" />
								</div>
							</div>
							<div class="mb-5 md:grid md:grid-cols-2 md:gap-0">
								<div name="releaseddate" class="formsBlock">
									<label
										class="formsLable md:px-10 md:text-right md:col-span-2 md:py-3 md:mt-1 md:text-xs"
									>relased date</label>
									<input type="date" placeholder="MM/DD/YYYY" class="formsInput2" />
								</div>
								<div name="poster" class="formsBlock grid grid-flow-row mt-6 md:mt-0">
									<label class="formsLable md:px-12 md:text-right md:col-span-2 md:py-3">poster</label>
									<input type="file" class="text-sm text-white md:col-span-2 md:pt-1" />
								</div>
							</div>
							<div name="plot" class="mb-5 formsBlock">
								<label class="formsLable md:px-10 md:text-right md:py-3">plot</label>
								<textarea rows="10" cols="39" class="formsInput md:col-span-3 md:py-0 md:text-lg" />
							</div>
						</div>
						<div class="space-y-5 md:space-x-4 md:space-y-0 md:flex md:justify-end">
							<button
								type="submit"
								class="w-full h-10 border bg-white font-medium text-xs rounded-xl uppercase md:w-24  md:rounded-lg md:h-8"
							>save</button>
							<button
								type="reset"
								class="w-full h-10 border bg-blackBlue text-white font-medium text-xs rounded-xl uppercase md:w-24 md:text-white md:rounded-lg md:bg-gray-700 md:h-8"
							>cancel</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
// <script>
// import axios from "axios";
// const constraints = {
// 	inputName: {
// 		presence: {
// 			message: "is required",
// 		},

// 	},
// 	// FilmGenre: {
// 	// 	presence: {
// 	// 		message: "is required",
// 	// 	},

// 	// },
// 	inputTime: {
// 		presence: {
// 			message: "is required",
// 		},

// 	},
// 	inputDate: {
// 		presence: {
// 			message: "is required",
// 		},

// 	},
// 	inputPlot: {
// 		presence: {
// 			message: "is required",
// 		},
// 		length: {
// 			maximum: 400,
// 			minimum: 10,
// 			message: "",
// 		}
// 	},
// 	inputImg: {
// 		presence: {
// 			message: "is required",
// 		},
// 	}


// }

// export default {
// 	name: "MovieForm",
// 	props: {

// 	}
// }
// </script>

