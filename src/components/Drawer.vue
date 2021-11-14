<template>
    <div>
        <w-button @click="showDrawer = true" bg-color="transparent">
            <w-icon lg color="white" class="-ml-1">mdi mdi-menu</w-icon>
        </w-button>
    </div>
    <div class="block mx-auto my-auto">
        <w-drawer v-model="showDrawer" left class="text-white" bg-color="grey-dark5" width="187">
            <w-button
                class="button--close"
                @click="showDrawer = false"
                sm
                outline
                round
                absolute
                color="white"
                icon="wi-cross">
            </w-button>
            <div class="space-y-6 mx-5 mt-10 w-96">
                <!-- <p class="text-white uppercase w-36 h-auto">sign in</p> -->
                <div>
                    <router-link to="/signin">
                    <w-button bg-color="transparent" class="text-sm text-white uppercase">sign in</w-button>
                    </router-link>
                </div>
                <div>
                    <router-link to="/signup">
                    <w-button bg-color="transparent" class="text-sm text-white uppercase">sign up</w-button>
                    </router-link>
                </div>
                <w-divider class="w-36" color="grey" />
                <div class="mt-6 -ml-2">
                    <router-link to="/managemovie">
                        <w-button :height="40" bg-color="transparent">
                            <w-icon class="-mt-1" :size="25" color="grey">mdi mdi-movie-open-edit</w-icon>
                            <p class="text-sm ml-2 text-white uppercase">manage movie</p>
                        </w-button>
                    </router-link>
                </div>
                <div class="-ml-2">
                    <router-link to="/watchlist">
                        <w-button :height="40" bg-color="transparent">
                            <w-icon class="-ml-1 -mt-1" :size="25" color="grey">mdi mdi-bookmark</w-icon>
                            <p class="text-sm ml-3 text-white uppercase pr-6">watch list</p>
                        </w-button>
                    </router-link>
                </div>

                <div class="-ml-1">
                    <genre-list-block></genre-list-block>
                    <!-- <button class="text-white uppercase">sign in</button> -->
                </div>
                <!-- <div class="absolute top-3/4 w-32">
                    <w-divider class="mt-14" width="50" color="grey" />
                    <div class="mt-6 -ml-2">
                        <router-link to="/managemovie">
                            <w-icon class="-mt-2" :size="30" color="grey">material-icons create</w-icon>
                            <button class="text-sm text-white uppercase">manage movie</button>
                        </router-link>
                    </div>
                </div>-->
            </div>
        </w-drawer>
    </div>
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
