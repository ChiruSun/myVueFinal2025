<template>
  <Navbar class="position-absolute my-nav-ani"></Navbar>
  <router-view></router-view>
</template>
<script setup>
import Navbar from '@/components/user/Navbar.vue'
</script>
<style scoped>
.my-nav-ani {
  animation: navAni 0.5s ease-out 0.5s both;
}
@keyframes navAni {
  from {
    top: -100px;
  }
  to {
    top: 0px;
  }
}
</style>
