<template>
    <div class="bg-white">
        <w-button class="px4" @click="dialog.show = true">Open dialog</w-button>

        <w-dialog
            v-model="dialog.show"
            :fullscreen="dialog.fullscreen"
            :width="dialog.width"
            :persistent="dialog.persistent"
            :persistent-no-animation="dialog.persistentNoAnimation"
            title-class="primary-light1--bg white"
        >
            <template #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>Control panel
            </template>

            <w-checkbox class="d-flex mt2" v-model="dialog.fullscreen" label="Fullscreen"></w-checkbox>
            <w-checkbox
                class="d-flex mt2"
                v-model="dialog.persistent"
                label="Persistent (try to click outside)"
            ></w-checkbox>
            <w-checkbox
                class="d-flex mt2"
                v-model="dialog.persistentNoAnimation"
                :disabled="!dialog.persistent"
                label="Persistent with no animation"
            ></w-checkbox>

            <div class="w-flex mt6 no-grow">
                <span class="mr2">Width:</span>
                <w-radios
                    v-model="dialog.width"
                    :items="[{ value: 300, label: '300px' }, { value: 500, label: '500px' }]"
                    inline
                />
            </div>

            <template #actions>
                <div class="spacer" />
                <w-button @click="dialog.show = false">Close</w-button>
            </template>
        </w-dialog>
    </div>
</template>

<script>

export default{
    data() {
        return {
            dialog: {
                show: false,
                fullscreen: false,
                persistent: false,
                persistentNoAnimation: false,
                width: 300
            }
        }

    }
}
</script>
