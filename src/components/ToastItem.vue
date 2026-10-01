<template>
  <div ref="ToastEl" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <div :class="`me-2 text-${toast.type}`">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-square-fill mb-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
        </svg>
      </div>
      <strong class="h5 me-auto mb-0 text-bold">{{ toast.message }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <!-- <div class="toast-body">{{ toast.message }}</div> -->
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Toast } from 'bootstrap'

const props = defineProps({ toast: Object })
const emit = defineEmits(['hidden'])
const ToastEl = ref(null)
onMounted(() => {
  const myToast = Toast.getOrCreateInstance(ToastEl.value)
  ToastEl.value.addEventListener('hidden.bs.toast', () => {
    emit('hidden', props.toast.id)
  })
  myToast.show()
})
</script>
<style scoped>
.toast-square {
  height: 100%;
}
</style>
