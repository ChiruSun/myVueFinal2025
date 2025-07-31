<template>
  <div class="container">
    <table class="table mt-4 mb-4">
      <thead>
        <tr>
          <th width="140">購買時間</th>
          <th width="300">Email</th>
          <th>購買款項</th>
          <th width="120">應付金額</th>
          <th width="160">是否付款</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!loading && dataList">
          <tr v-for="p in dataList" :key="p.id">
            <td>{{ useFormatDate(p.create_at) }}</td>
            <td>{{ p.user.email }}</td>
            <td class="text-right">
              <p v-for="content in p.products" :key="content.id" class="mb-2">
                {{ content.product.title }} 數量：{{ content.qty }}{{ content.product.unit }}
              </p>
            </td>
            <td class="text-right">
              {{ reduceOrderPrice(p) }}
            </td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  v-model="p.is_paid"
                />
                <label
                  class="form-check-label"
                  :class="p.is_paid ? '' : 'text-danger'"
                  for="flexSwitchCheckDefault"
                  >{{ p.is_paid ? '已付款' : '未付款' }}</label
                >
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="viewOrderModal(p)">
                  檢視
                </button>
                <button class="btn btn-outline-danger btn-sm" @click="deleteOrderModal(p)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div v-show="!dataList && !loading">
      <div class="d-flex justify-content-center">
        <div>
          <p class="h2 text-center text-secondary">目前沒有訂單</p>
        </div>
      </div>
    </div>
  </div>
  <SectionLoading v-show="loading"></SectionLoading>
  <OrderModal ref="detailModal" :order-data="singleOrderData"></OrderModal>
</template>
<script setup>
import { ref } from 'vue'
import SectionLoading from '@/components/SectionLoading.vue'
import OrderModal from '@/components/modal/OrderModal.vue'

import { getOrders } from '@/composable/axiosDashAPI'
import { useFormatDate, useFormatTime } from '@/composable/useFormat'

const dataList = ref([{ title: '' }])
const singleOrderData = ref({})
const loading = ref(false)
const detailModal = ref(null)

//取得訂單資料
async function getOrderData() {
  loading.value = true
  try {
    const resp = await getOrders()
    // console.log('訂單回傳', resp.data.orders)
    dataList.value = resp.data.orders
    console.log('資料', dataList.value)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

//加總商品
function reduceOrderPrice(single) {
  return Object.values(single.products).reduce((sum, single) => sum + single.total, 0)
}

//開啟檢視訂單modal
function viewOrderModal(p) {
  const temp = p
  temp.create_date = useFormatDate(temp.create_at)
  temp.create_time = useFormatTime(temp.create_at)
  singleOrderData.value = temp
  detailModal.value?.showModal()
}

getOrderData()
</script>
