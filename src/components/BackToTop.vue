<template>
  <button
    v-show="visible"
    class="btn btn-dark rounded-circle fs-3 back-to-top"
    @click="scrollToTop"
  >
    <i class="bi bi-arrow-bar-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

// 超過多少高度才顯示
const showHeight = 300

function handleScroll() {
  visible.value = window.scrollY > showHeight
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 54px;
  height: 54px;
  cursor: pointer;
  color: #fff;
}
</style>
