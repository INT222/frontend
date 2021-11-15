<template>
    <div class="bg-white">
        <w-button @click="dialog.show = true">Open dialog</w-button>
        <w-dialog
            v-model="dialog.show"
            :persistent="dialog.persistent"
            :persistent-no-animation="dialog.persistentNoAnimation"
            title-class="primary-light1--bg white"
            :width="dialog.width"
        >
            <div class="space-y-4">
                    <div class="flex justify-center divide-x">
                    <div class="bg-yellow-100 w-16 h-16 object-cover rounded-full p-1 mx-auto"></div>
                    </div>
                    
                <p class="text-center">@Test</p>
                <p class="text-center">firstname lastname</p>
                <div class="flex justify-center pt-4">
                    <w-button bg-color="purple-light3" color="white">Edit Profile</w-button>
                </div>
            </div>
        </w-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            dialog: {
                show: false,
                persistent: false,
                persistentNoAnimation: false,
                width: 300
            }
        }

    }
}
</script>
