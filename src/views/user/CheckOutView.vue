<template>
  <div class="all-page mb-5">
    <div class="container py-4">
      <h2 class="mb-4 project-main-font fw-bold">結帳</h2>
      <p class="text-secondary">訂單建立時間：{{ orderCreateTime }}</p>
      <!-- 商品列表 -->
      <div class="card mb-4">
        <div class="card-header">商品資料</div>
        <div class="card-body">
          <div v-for="(item, key, index) in orderData?.products" :key="item.id">
            <div class="d-flex py-2" :class="{ 'border-top': index !== 0 }">
              <div class="productImg me-2">
                <img :src="item.product.imageUrl" class="img-fluid" alt="" />
              </div>
              <div>
                <p class="fs-4 fw-bold mb-2">{{ item.product.content }}</p>
                <p class="mb-2">數量：{{ item.qty }}</p>
                <p class="mb-0">價格：{{ getInteger(item.final_total) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-6">
          <div class="card h-100">
            <div class="card-header">金額摘要</div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <span>總金額</span>
                <strong>{{ orderData?.total }}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-header">個人資訊</div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <span>姓名</span>
                <strong>{{ orderData?.user?.name }}</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>e-mail</span>
                <strong>{{ orderData?.user?.email }}</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>電話</span>
                <strong>{{ orderData?.user?.tel }}</strong>
              </div>
              <div class="d-flex justify-content-between">
                <span>地址</span>
                <strong>{{ orderData?.user?.address }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 送出 -->
      <button type="button" class="btn btn-primary w-100" @click="compilePay">完成付款</button>
    </div>
  </div>
  <HomeFooter></HomeFooter>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import HomeFooter from '@/components/user/HomeFooter.vue'
import { useLoadingStore } from '@/stores/loadingStore'

const route = useRoute()
const router = useRouter()
const useloading = useLoadingStore()

const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH

const orderData = ref('')
const orderCreateTime = computed(() => {
  return new Date(orderData.value.create_at * 1000).toLocaleString('zh-TW')
})
// const total = computed(()=>{})

async function getOrder() {
  const id = route.params.id
  useloading.showLoading()
  const resp = await axios.get(`${APIUrl}/v2/api/${APIPath}/order/${id}`)
  orderData.value = resp.data.order
  console.log('訂單資料', orderData.value)

  useloading.hideLoading()
}

//取整數
function getInteger(val) {
  if (val == null) return ''
  return Math.floor(val)
}

async function compilePay() {
  const id = route.params.id
  useloading.showLoading()
  try {
    await axios.post(`${APIUrl}/v2/api/${APIPath}/pay/${id}`)
    router.push({ name: 'back_home' })
  } catch (error) {
    console.error('結帳錯誤', error)
  } finally {
    useloading.hideLoading()
  }
}

getOrder()
</script>
<style scoped>
.all-page {
  padding-top: 130px;
}

.productImg {
  width: 100px;
  height: 100px;
}
</style>
