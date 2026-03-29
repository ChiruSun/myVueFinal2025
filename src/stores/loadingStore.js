import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  function showLoading() {
    isLoading.value = true
  }

  function hideLoading() {
    isLoading.value = false
  }

  //前後加上loading
  async function withLoading(fn) {
    try {
      showLoading()
      await fn()
    } finally {
      hideLoading()
    }
  }

  return {
    isLoading,
    showLoading,
    hideLoading,
    withLoading,
  }
})
