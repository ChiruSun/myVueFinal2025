<template>
  <div class="toast-container position-fixed top-0 end-0 pt-5 px-3">
    <div class="pt-3">
      <ToastItem v-for="toast in toasts" :key="toast.id" :toast="toast" @hidden="removeToast" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ToastItem from '@/components/ToastItem.vue'
import emitter from '@/emitter'

const toasts = ref([])

function showToast({ message, type = 'success', delay = 3000 }) {
  const id = Date.now()
  toasts.value.push({ id, message, type, delay })
}

function removeToast(id) {
  toasts.value = toasts.value.filter((toast) => toast.id !== id)
}

function handleToast(payload) {
  showToast(payload)
}

onMounted(() => {
  emitter.on('toast', handleToast)
})

onUnmounted(() => {
  emitter.off('toast', handleToast)
})
</script>
