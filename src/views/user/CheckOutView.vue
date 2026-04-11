<template>
  <div class="all-page mb-5">
    <div class="container py-4">
      <h2 class="mb-4 title">結帳</h2>

      <!-- 商品列表 -->
      <div class="card mb-4">
        <div class="card-header">商品資料</div>
        <div class="card-body">
          <div
            v-for="item in useCart.cartItems"
            :key="item.id"
            class="d-flex justify-content-between align-items-center mb-3"
          >
            <div>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 訂單摘要 -->
      <div class="card mb-4">
        <div class="card-header">金額摘要</div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <span>商品總數</span>
            <span>{{ totalQty }}</span>
          </div>

          <div class="d-flex justify-content-between">
            <span>總金額</span>
            <strong>${{ totalPrice }}</strong>
          </div>
        </div>
      </div>

      <!-- 基本資料 -->
      <div class="card mb-4">
        <div class="card-header">基本資料</div>

        <div class="card-body">
          <div class="mb-3">
            <label>姓名</label>
            <input v-model="form.name" class="form-control" />
          </div>

          <div class="mb-3">
            <label>Email</label>
            <input v-model="form.email" class="form-control" />
          </div>

          <div class="mb-3">
            <label>地址</label>
            <input v-model="form.address" class="form-control" />
          </div>
        </div>
      </div>

      <!-- 送出 -->
      <button class="btn btn-primary w-100" :disabled="!isValid" @click="submitOrder">
        送出訂單
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

import { useCartStore } from '@/stores/cartStore'

const useCart = useCartStore()
const cart = ref([
  { id: 1, title: 'Vue 課程', price: 1200, qty: 1 },
  { id: 2, title: 'JavaScript 書籍', price: 800, qty: 2 },
])

/* -------------------------
   數量控制
------------------------- */

const increase = (item) => {
  item.qty++
}

const decrease = (item) => {
  if (item.qty > 1) item.qty--
}

/* -------------------------
   computed 金額計算
------------------------- */

const totalQty = computed(() => cart.value.reduce((sum, item) => sum + item.qty, 0))

const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.qty, 0))

/* -------------------------
   表單資料
------------------------- */

const form = ref({
  name: '',
  email: '',
  address: '',
})

/* -------------------------
   表單驗證
------------------------- */

const isValid = computed(() => {
  return form.value.name && form.value.email && form.value.address && totalQty.value > 0
})

/* -------------------------
   送出訂單
------------------------- */

const submitOrder = () => {
  const order = {
    customer: form.value,
    items: cart.value,
    total: totalPrice.value,
  }

  console.log('送出訂單:', order)

  alert('訂單送出成功！')
}
</script>
<style scoped>
.all-page {
  padding-top: 130px;
}

.title {
  font-family: 'Zen Old Mincho', serif;
  font-weight: bold;
}
</style>
