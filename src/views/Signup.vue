<template>
     <div class="md:space-y-6 h-full md:h-screen">
        <div class="mx-auto w-36 mt-14 md:my-4">
        <img src="../assets/brm_logo.png" alt="">
        </div>
        <div class="invisible md:visible mt-10"> 
            <p class="text-white text-3xl text-center">Sign up</p>
        </div>
        <div>
        <sign-up />
        </div>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
export default {
    name: 'Home',
    components: {
        'sign-up': SignupForm
    }
}
</script>