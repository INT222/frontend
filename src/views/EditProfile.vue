<template>
    <div class="space-y-2">
        <p class="uppercase text-white text-center text-lg font-bold mt-2">edit profile</p>
        <signup-form :buttontext="'edit profile'" />
    </div>
</template>

<script>

import SignupForm from "../components/SignupForm.vue";

export default {
    components: {
        'signup-form': SignupForm,
    },
}
</script>
