<template>
  <div class="all-page mb-5">
    <div class="container">
      <h1 class="title mb-4">購物車</h1>
      <div class="row">
        <div class="col-8">
          <div v-for="item in useCart.cartItems" v-show="useCart.hasCart" :key="item.id">
            <div class="d-flex justify-content-between py-4 border-bottom border-secondary-subtle">
              <div class="d-flex">
                <div class="d-flex align-items-center me-4">
                  <a
                    href="#"
                    class="fs-5 fw-bold text-secondary"
                    title="刪除商品"
                    @click="DeleteProduct(item.id)"
                    ><i class="bi bi-x-lg"></i
                  ></a>
                </div>
                <div class="img-box rounded-3 overflow-hidden me-4">
                  <img class="img-fluid" :src="item.product.imageUrl" :alt="item.product.content" />
                </div>
                <div class="d-flex flex-column justify-content-between">
                  <div>
                    <p class="fs-5">{{ item.product.title }}</p>
                    <p class="text-secondary">{{ item.product.content }}</p>
                  </div>
                  <p class="fs-4 fw-bold text-danger mb-0">NT${{ item.total }}</p>
                </div>
              </div>
              <div class="d-flex align-items-end">
                <div class="d-flex align-items-baseline">
                  <p class="me-2 mb-0">數量：</p>
                  <div class="product-qty">
                    <ChangeQuantity
                      :input-disabled="true"
                      :model-value="item.qty"
                      @api-change-qty="changeQty(item.id, $event)"
                    ></ChangeQuantity>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="!useCart.hasCart" class="fs-5">購物車目前無商品</div>
        </div>
        <div class="col-4">
          <div class="bg-white h-100 rounded-2">
            <div class="p-4">
              <p class="fs-4 mb-0 pb-3 border-bottom border-dark-subtle">小計明細</p>
              <div class="d-flex justify-content-between pt-3">
                <p class="text-secondary mb-0">商品金額</p>
                <p class="mb-0">NT${{ useCart.cartTotal }}</p>
              </div>
              <div class="d-flex justify-content-between pt-3">
                <p class="text-secondary">折扣金額</p>
                <p>-NT${{ useCart.cartDiscount }}</p>
              </div>
              <div v-if="useCart.hasCoupon">
                <p class="coupon-text">
                  已套用優惠：{{ useCart.cartItems[0]?.coupon.title }}，{{
                    useCart.cartItems[0]?.coupon.percent
                  }}折
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-baseline pt-3">
                <p class="text-secondary">總計</p>
                <p class="text-danger fw-bold">
                  NT$ <span class="fs-3">{{ useCart.cartFinalTotal }}</span>
                </p>
              </div>
              <div>
                <p>使用優惠卷</p>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    v-model="couponCode"
                    class="form-control"
                    placeholder="請輸入優惠碼"
                    :disabled="btnloading"
                    @keyup.enter="getCoupon"
                  />
                  <button
                    type="button"
                    @click="getCoupon"
                    class="btn btn-secondary"
                    :disabled="btnloading || !couponCode"
                  >
                    <span :class="{ invisible: btnloading }"> 套用 </span>
                    <span
                      v-if="btnloading"
                      class="position-absolute top-50 start-50 translate-middle"
                      ><span class="spinner-border spinner-border-sm"></span
                    ></span>
                  </button>
                </div>
                <div>
                  <p
                    :class="{
                      'text-danger': !couponResp?.success,
                      'text-success': couponResp?.success,
                    }"
                  >
                    {{ couponResp?.message }}
                  </p>
                </div>
                <div>
                  <p class="fw-bold">基本資料</p>
                  <div class="mb-3">
                    <label>姓名</label>
                    <input v-model="userForm.name" class="form-control" />
                  </div>

                  <div class="mb-3">
                    <label>Email</label>
                    <input v-model="userForm.email" class="form-control" />
                  </div>

                  <div class="mb-3">
                    <label>電話</label>
                    <input v-model="userForm.tel" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label>地址</label>
                    <input v-model="userForm.address" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label>給店家的訊息</label>
                    <textarea
                      name="content"
                      v-model="message"
                      class="form-control"
                      cols="30"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-danger w-100"
                  @click.prevent="goCheckOut"
                  :disabled="!useCart.hasCart"
                >
                  結帳
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HomeFooter></HomeFooter>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

import HomeFooter from '@/components/user/HomeFooter.vue'
import ChangeQuantity from '@/components/user/ChangeQuantity.vue'
import { useCartStore } from '@/stores/cartStore'
import { useLoadingStore } from '@/stores/loadingStore'
const useCart = useCartStore()
const useLoding = useLoadingStore()

const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH

const btnloading = ref(false)
const couponCode = ref('')
const couponResp = ref(null)
const userForm = ref({
  name: '',
  tel: '',
  email: '',
  address: '',
})
const message = ref('')

const router = useRouter()

async function getCart() {
  await useLoding.withLoading(useCart.getCart)
}

async function getCoupon() {
  console.log('使用了優惠劵')
  couponResp.value = null
  btnloading.value = true
  const resp = await axios.post(`${APIUrl}/v2/api/${APIPath}/coupon`, {
    data: { code: couponCode.value },
  })
  btnloading.value = false
  couponResp.value = resp.data
  console.log('優惠劵回傳', resp)
  await new Promise((r) => setTimeout(r, 500))
  getCart()
}

async function DeleteProduct(id) {
  await useLoding.withLoading(() => useCart.delCart(id))
  await useLoding.withLoading(() => useCart.getCart())
}

async function changeQty(id, qty) {
  await useLoding.withLoading(() => useCart.changeCartQty(id, qty))
  await useLoding.withLoading(() => useCart.getCart())
}

function goCheckOut() {
  router.push({ name: 'checkout' })
}

getCart()
</script>
<style scoped>
.all-page {
  padding-top: 130px;
}
.title {
  font-family: 'Zen Old Mincho', serif;
  font-weight: 700;
  color: rgb(61, 61, 61);
}

.NT-font {
  font-family: Arial;
}

.img-box {
  width: 150px;
  height: 150px;
}

.product-qty {
  width: 120px;
}

.coupon-text {
  color: rgb(210, 95, 0);
}
</style>
