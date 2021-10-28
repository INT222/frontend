<template
    >
    <w-app>
        <div class="block mx-auto my-auto">
            <w-button @click="showDrawer = true" outline color="primary">Click to pull div left side</w-button>
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
                        <w-icon class="-mt-1" :size="30" color="grey">material-icons bookmark</w-icon>
                        <button class="text-sm text-white uppercase">watch list</button>
                    </div>
                    <div class="-ml-3">
                        <genre-list-block></genre-list-block>
                        <!-- <button class="text-white uppercase">sign in</button> -->
                    </div>
                    <div class="absolute top-3/4">
                        <w-divider width="50" color="grey" />
                        <div class="mt-6 -ml-2 space-x-2">
                        <w-icon :size="30" color="grey">material-icons bookmark</w-icon>
                        <button class="text-sm text-white uppercase">manage movie</button>
                        </div>
                    </div>
                </div>
                <!-- <span class="bg-yellow-400 w-2/4">
                Test inside drawer
            </span>
            <span class="bg-green-300 w-2/4">
                Test inside drawer
                </span>-->
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