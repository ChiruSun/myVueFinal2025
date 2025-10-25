<template>
  <OnlyDelay />
  <HomeBanner class="mb-3" />
  <HomeSwipper />
  <div>
    <div class="introduceImg"></div>
  </div>
  <footer>
    <div class="bg-white">
      <div class="container"><div class="p-3">這是footer</div></div>
    </div>
  </footer>
</template>
<script setup>
//components
import OnlyDelay from '@/components/user/OnlyDelay.vue'
import HomeBanner from '@/components/user/HomeBanner.vue'
import HomeSwipper from '@/components/user/HomeSwipper.vue'
</script>
<style scoped>
.introduceImg {
  height: 200px;
  width: 200px;
  background-color: #ffc1f2;
}
</style>
