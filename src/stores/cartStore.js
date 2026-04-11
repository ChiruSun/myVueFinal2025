import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])
  const hasCart = computed(() => cartItems.value.length > 0)
  const cartTotal = ref(0)
  const cartFinalTotal = ref(0)
  const cartDiscount = computed(() => {
    return cartTotal.value - cartFinalTotal.value
  })
  const hasCoupon = computed(() => {
    return Boolean(cartItems.value[0]?.coupon)
  })
  const isAddCartSuccess = ref(false)

  const APIUrl = import.meta.env.VITE_API_URL
  const APIPath = import.meta.env.VITE_API_PATH

  async function getCart() {
    try {
      const resp = await axios.get(`${APIUrl}/v2/api/${APIPath}/cart`)
      cartItems.value = resp.data.data.carts
      cartTotal.value = resp.data.data.total
      cartFinalTotal.value = Math.trunc(resp.data.data.final_total)
    } catch (error) {
      console.log('請求購物車資料時發生錯誤', error)
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
    cartFinalTotal,
    cartDiscount,
    hasCoupon,
    isAddCartSuccess,
    getCart,
    addCart,
    delCart,
    changeCartQty,
  }
})
