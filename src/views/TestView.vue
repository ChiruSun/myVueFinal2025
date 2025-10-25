<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :freeMode="true"
    :speed="7000"
    :loop="true"
    :autoplay="{
      delay: 0,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="[FreeMode, Autoplay]"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
  </swiper>
</template>

<script setup>
//Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
// import required modules
import { FreeMode, Autoplay } from 'swiper/modules'
</script>

<style>
.swiper {
  width: 100%;
  height: 400px;
}
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
