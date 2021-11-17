<template>
    <div class="bg-green-300">
        <w-button @click="dialog.show = true" bg-color="transparent" color="black">Open dialog</w-button>
        <w-dialog
            v-model="dialog.show"
            :persistent="dialog.persistent"
            :persistent-no-animation="dialog.persistentNoAnimation"
            title-class="primary-light1--bg white"
            :width="dialog.width"
        >
            <div class="space-y-4">
                <div class="justify-center divide-x">
                    <w-divider class color="grey-dark5">
                        <div class="bg-yellow-200 w-20 h-20 object-cover rounded-full p-1 mx-auto">
                            <p v-if="selectedImage">
                                <img class="w-16 mx-auto" :src="selectedImage" />
                            </p>
                        </div>
                    </w-divider>
                </div>

                <p class="text-center">@Test</p>
                <p class="text-center">firstname lastname</p>
                <div class="flex justify-center pt-4">
                    <router-link to="/editprofile">
                        <w-button bg-color="purple-light1" color="white">Edit Profile</w-button>
                    </router-link>
                </div>
            </div>
        </w-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            images: [
                '../assets/avatar1.png',
                '../assets/avatar2.png',
            ],
            selectedImage: "",
            dialog: {
                show: false,
                persistent: false,
                persistentNoAnimation: false,
                width: 300
            }
        }
    },
    methods: {
        randomItem(items) {
            return items[Math.floor(Math.random() * items.length)];
        }
    },
    created() {
        this.selectedImage = this.randomItem(this.images);
        console.log(this.selectedImage);
    }
}
</script>
