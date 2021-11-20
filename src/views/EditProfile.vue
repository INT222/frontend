<template>
    <signup-form :buttontext="'edit profile'" />
</template>

<script>

import SignupForm from "../components/SignupForm.vue";

export default {
    components:{
        'signup-form': SignupForm,
    },
}
</script>
