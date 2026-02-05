<template>
  <OnlyDelay />
  <HomeBanner />
  <HomeSwipper class="mb-5" />
  <HomeIntroduce />
  <HomeAward />
  <div class="area-greenery">
    <div class="d-flex flex-column justify-content-between h-100">
      <img src="@/img/wave_up.png" class="img-fluid my-wave-up" alt="" />
      <div class="container d-flex justify-content-center align-items-center greenery-content">
        <div class="greenery-slogan">
          <p class="mb-0">用植物的方式<br />照顧毎天</p>
        </div>
        <div class="greenery-can">
          <img src="@/img/greenery_can.png" class="img-fluid" alt="greenery-can" />
        </div>
      </div>

      <img src="@/img/wave_down.png" class="my-wave-down" alt="" />
    </div>
  </div>
  <HomeFooter isHome />
</template>
<script setup>
//components
import OnlyDelay from '@/components/user/OnlyDelay.vue'
import HomeBanner from '@/components/user/HomeBanner.vue'
import HomeSwipper from '@/components/user/HomeSwipper.vue'
import HomeIntroduce from '@/components/user/HomeIntroduce.vue'
import HomeAward from '@/components/user/HomeAward.vue'
import HomeFooter from '@/components/user/HomeFooter.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
</script>
<style scoped>
.area-greenery {
  /* height: 1000px; */
  background-image: url('@/img/greeneryBG.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.my-wave-up {
  margin-top: -2px;
}

.my-wave-down {
  margin-bottom: -1px;
}

.greenery-content {
  margin-top: -50px;
  margin-bottom: -50px;
}

.greenery-slogan {
  font-size: 80px;
  font-family: 'Zen Old Mincho', serif;
  font-weight: 900;
  text-wrap: nowrap;
  color: rgb(63, 93, 63);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px 60px;
  border-radius: 30px;
  margin-right: 200px;
}

.greenery-can {
  width: 30%;
}
@media (max-width: 1200px) {
  .greenery-slogan {
    margin-right: 100px;
  }
}

@media (max-width: 992px) {
  .greenery-slogan {
    font-size: 60px;
    padding: 20px 40px;
  }
}
@media (max-width: 768px) {
  .greenery-slogan {
    font-size: 40px;
  }
  .greenery-content {
    margin-top: -20px;
    margin-bottom: -20px;
  }
}

@media (max-width: 576px) {
  .greenery-slogan {
    font-size: clamp(16px, 7vw, 36px);

    padding: 16px;
    margin-right: 30px;
  }
}
</style>
