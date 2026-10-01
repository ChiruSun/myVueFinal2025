<template>
  <OnlyDelay />
  <HomeBanner />
  <HomeSwipper class="mb-5" />
  <HomeIntroduce />
  <HomeAward />
  <HomeGreen />
  <HomeFooter isHome />
</template>
<script setup>
//components
import OnlyDelay from '@/components/user/OnlyDelay.vue'
import HomeBanner from '@/components/user/HomeBanner.vue'
import HomeSwipper from '@/components/user/HomeSwipper.vue'
import HomeIntroduce from '@/components/user/HomeIntroduce.vue'
import HomeAward from '@/components/user/HomeAward.vue'
import HomeGreen from '@/components/user/HomeGreen.vue'
import HomeFooter from '@/components/user/HomeFooter.vue'

import * as AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>
