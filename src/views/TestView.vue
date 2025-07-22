<template>
  <button type="button" class="btn btn-primary" ref="liveToastBtn" @click="openToast">
    開啟toast
  </button>
</template>
<script setup>
import { ref } from 'vue'
import emitter from '@/emitter'

const liveToastBtn = ref(null)
function openToast() {
  emitter.emit('toast', {
    message: '來自子元件的 Toast！',
    type: 'danger',
  })
}
</script>
