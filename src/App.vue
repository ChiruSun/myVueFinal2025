<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ToastList from './components/ToastList.vue'
import './assets/all.scss'

//任一使用toast範例
// emitter.emit('toast', {
//   message: '來自子元件的 Toast！',
//   type: 'danger',
//   delay:6000
// })
</script>

<template>
  <!-- <RouterLink to="/about">About</RouterLink> -->
  <RouterView />
  <ToastList />
</template>
