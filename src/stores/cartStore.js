import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])
  const loading = ref(false)
  const APIUrl = import.meta.env.VITE_API_URL
  const APIPath = import.meta.env.VITE_API_PATH

  async function getCart() {
    loading.value = true
    try {
      const resp = await axios.get(`${APIUrl}/v2/api/${APIPath}/cart`)
      console.log('購物車回傳', resp)
    } catch (error) {
      console.log('請求購物車資料時發生錯誤', error)
    } finally {
      loading.value = false
    }
  }
  getCart()
  return {
    getCart,
  }
})
