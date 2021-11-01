<template>
    <div class="text-white md:grid md:grid-col-4 md:px-7">
        <div class="mb-6">
            <p class="text-base mt-1 text-white font-medium md:text-lg uppercase">rates and comments</p>
        </div>
            <div class="md:inline-flex md:mr-72 md:space-x-10">
                <div class="md:w-4/5 md:text-center">
                    <div>
                        <p class="font-medium mx-4 tracking-widest">{{ username }}</p>
                    </div>
                    <div class="inline-flex md:flex-col">
                        <div>
                            <p class="text-gray-500 mx-4 text-sm md:my-2 tracking-widest">{{ commentDate }}</p>
                        </div>
                        <div>
                            <w-rating class="-mt-1" sm color="yellow" readonly></w-rating>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="my-2 md:my-0">
                        {{ commentText }}
                    </p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: [
        "username",
        "commentDate",
        "commentText"
    ]
}
</script>