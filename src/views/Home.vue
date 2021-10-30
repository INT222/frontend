<template>
	<div class="md:space-y-11 space-y-6 bg-indigo-800 ">
		<banner />
		<div class="md:mx-4 md:space-y-11 space-y-6 bg-yellow-400">
			<div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">popular in this month</p>
				<router-link to="/content"><slide-list-block class="md:mt-6 mt-3"/></router-link>
			</div>
			<div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">coming soon movie</p>
				<block-list class="md:mt-6 mt-3" />
			</div>
			<div>
				<p class="text-white uppercase text-xl tb:text-2xl md:text-3xl font-medium">explore more</p>
				<explore-list-block class="md:mt-6 mt-3" />
			</div>
			<div></div>
		</div>
	</div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import BlockList from "../components/BlockList.vue";
import ExploreListBlock from "../components/ExploreListBlock.vue";
import SlideListBlock from "../components/SlideListBlock.vue";
export default {
	name: "Home",
	components: {
		banner: Banner,
		"slide-list-block": SlideListBlock,
		"block-list": BlockList,
		"explore-list-block": ExploreListBlock,
	},
};
</script>
