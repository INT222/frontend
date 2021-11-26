<template>
    <!-- <comment-form></comment-form> -->
    <comment-block />
</template>
<script>
import CommentBlock from "./CommentBlock.vue";
// import CommentForm from './CommentForm.vue';

export default {
    components: {
        'comment-block': CommentBlock,
        // 'comment-form': CommentForm
    },
    data() {
        return {
            comment: [],

        }
    }
}
</script>