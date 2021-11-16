<template>
    <div class>
        <watch-list-block></watch-list-block>
        <user />
    </div>
</template>

<script>
import WatchListBlock from "@/components/WatchListBlock.vue";
import UserVue from "../components/User.vue";
export default {
    components: {
        'watch-list-block': WatchListBlock,
        'user': UserVue
    }
}
</script>
