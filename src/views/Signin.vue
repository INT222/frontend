<template>
    <div class="md:space-y-6 space-y-20 h-full md:h-screen">
        <div class="mx-auto w-36 mt-20 md:my-4">
        <img src="../assets/brm_logo.png" alt="">
        </div>
        <div class=" invisible md:visible"> 
            <p class="text-white text-3xl text-center">Sign in</p>
        </div>
        <div class="bottom-0">
        <sign-in />
        </div>
    </div>
</template>

<script>
import SigninForm from '../components/SigninForm.vue'
export default {
    name: 'Home',
    components: {
        'sign-in': SigninForm
    }
}
</script>
