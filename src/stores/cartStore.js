import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])
  const cartTotal = ref(0)
  const isAddCartSuccess = ref(false)
  const hasCart = computed(() => cartItems.value.length > 0)
  const discountTotal = computed(() => {
    return cartItems.value.reduce((sum, item) => {
      return sum + Math.floor(item.final_total)
    }, 0)
  })
  const discountPrice = computed(() => cartTotal.value - discountTotal.value)

  const APIUrl = import.meta.env.VITE_API_URL
  const APIPath = import.meta.env.VITE_API_PATH

  async function getCart() {
    try {
      const resp = await axios.get(`${APIUrl}/v2/api/${APIPath}/cart`)
      cartItems.value = resp.data.data.carts
      cartTotal.value = resp.data.data.total
    } catch (error) {
      console.error('請求購物車資料時發生錯誤', error)
    }
  }

  async function addCart(id, qty = 1) {
    const sentData = { data: { product_id: id, qty: qty } }
    const resp = await axios.post(`${APIUrl}/v2/api/${APIPath}/cart`, sentData)
    isAddCartSuccess.value = resp.data.success
  }

  async function delCart(id) {
    try {
      await axios.delete(`${APIUrl}/v2/api/${APIPath}/cart/${id}`)
    } catch (error) {
      console.log('刪除購物車錯誤', error)
    }
  }

  async function delAllCart() {
    try {
      await axios.delete(`${APIUrl}/v2/api/${APIPath}/carts`)
    } catch (error) {
      console.log('刪除全部購物車錯誤', error)
    }
  }

  async function changeCartQty(id, qty) {
    const changeData = { data: { product_id: id, qty: qty } }
    try {
      await axios.put(`${APIUrl}/v2/api/${APIPath}/cart/${id}`, changeData)
    } catch (error) {
      console.log('更改購物車數量錯誤', error)
    }
  }

  return {
    cartItems,
    hasCart,
    cartTotal,
    isAddCartSuccess,
    discountTotal,
    discountPrice,
    getCart,
    addCart,
    delCart,
    delAllCart,
    changeCartQty,
  }
})
