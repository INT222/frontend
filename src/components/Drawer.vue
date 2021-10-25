<template
    ><div class="block mx-auto my-auto">
        <w-button @click="showDrawer = true" outline color="primary">
            Click to pull div left side
        </w-button>
        <w-drawer v-model="showDrawer" left class="text-red-600 ">
            <w-button
                class="button--close"
                @click="showDrawer = false"
                sm
                outline
                round
                absolute
                color="primary"
                icon="wi-cross"
            >
            </w-button>
            <span class="bg-yellow-400 w-2/4">
                Test inside drawer
            </span>
            <span class="bg-green-300 w-2/4">
                Test inside drawer
            </span>
        </w-drawer>
    </div>
</template>

<script>

export default {

    data() {

        return {

            showDrawer: false,

        };

    },

};

</script>