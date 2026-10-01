<template>
  <div class="my-bg">
    <div class="box rounded-2">
      <div class="d-flex justify-content-center mb-4">
        <checkSuccessAnimation></checkSuccessAnimation>
      </div>
      <div>
        <slot><p class="fs-5 mb-0">已加入購物車</p></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import checkSuccessAnimation from '../checkSuccessAnimation.vue'

const emit = defineEmits(['suceessClose'])
onMounted(() => {
  setTimeout(() => {
    emit('suceessClose')
  }, 1500)
})
</script>
<style scoped>
.my-bg {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
  position: fixed;
  inset: 0;
}
.box {
  position: fixed;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 32px;
}
</style>
