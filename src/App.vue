<script setup>
import { RouterView } from 'vue-router'
import ToastList from './components/ToastList.vue'
import BackToTop from './components/BackToTop.vue'

//任一使用toast範例
// emitter.emit('toast', {
//   message: '來自子元件的 Toast！',
//   type: 'danger',
//   delay:6000
// })
</script>

<template>
  <RouterView />
  <ToastList />
  <BackToTop />
</template>
