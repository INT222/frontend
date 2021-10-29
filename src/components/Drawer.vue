<template
    >
    <w-app>
        <div>
            <w-button @click="showDrawer = true" bg-color="transparent">
                <w-icon xl color="white">material-icons menu</w-icon>
            </w-button>
        </div>
        <div class="block mx-auto my-auto">
            <w-drawer v-model="showDrawer" left class="text-white" bg-color="black" width="187">
                <w-button
                    class="button--close"
                    @click="showDrawer = false"
                    sm
                    outline
                    round
                    absolute
                    color="white"
                    icon="wi-cross"
                ></w-button>
                <div class="space-y-6 mx-7 mt-10 w-96">
                    <!-- <p class="text-white uppercase w-36 h-auto">sign in</p> -->
                    <div>
                        <button class="text-sm text-white uppercase">sign in</button>
                    </div>
                    <div>
                        <button class="text-sm text-white uppercase">sign up</button>
                    </div>
                    <w-divider color="grey" />
                    <div class="space-x-3">
                        <router-link to="/watchlist">
                        <w-icon class="-mt-1" :size="30" color="grey">material-icons bookmark</w-icon>
                        <button class="text-sm text-white uppercase">watch list</button>
                        </router-link>
                    </div>
                    <div class="-ml-3">
                        <genre-list-block></genre-list-block>
                        <!-- <button class="text-white uppercase">sign in</button> -->
                    </div>
                    <div class="absolute top-3/4">
                        <w-divider class="mt-14" width="50" color="grey" />
                        <div class="mt-6 -ml-2 space-x-2">
                            <router-link to="/managemovie">
                            <w-icon :size="30" color="grey">material-icons bookmark</w-icon>
                            <button class="text-sm text-white uppercase">manage movie</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </w-drawer>
        </div>
    </w-app>
</template>

<script>
import GenreListBlock from './GenreListBlock.vue';
export default {
    components: {
        'genre-list-block': GenreListBlock
    },
    data() {
        return {
            showDrawer: false,
        };
    },
};

</script>