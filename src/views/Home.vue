<template>
  <div class="space-y-4">
    <banner />
    <div class="mx-4">
    <div>
      <p style="font-size: 5vw;" class="text-white uppercase ">popular in this month</p>
    </div>
    <router-link to="/content"><slide-list-block class="mt-4" /></router-link>
    <div>
      <p style="font-size: 5vw;" class="text-white uppercase">coming soon movie</p>
    </div>
    <block-list />
    <div>
      <p style="font-size: 5vw;" class="text-white uppercase">explore more</p>
    </div>
    <div>
    <explore-list-block />
    </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import BlockList from '../components/BlockList.vue'
import ExploreListBlock from '../components/ExploreListBlock.vue'
import SlideListBlock from '../components/SlideListBlock.vue'
export default {
  name: 'Home',
  components: {
    'banner': Banner,
    'slide-list-block': SlideListBlock,
    'block-list': BlockList,
    'explore-list-block': ExploreListBlock
  }
}
</script>
