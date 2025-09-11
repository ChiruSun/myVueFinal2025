<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary mt-3" @click="addCouponModal">
        建立新的優惠劵
      </button>
    </div>
    <table class="table mt-4 mb-4">
      <thead>
        <tr>
          <th width="120">優惠卷代碼</th>
          <th>優惠卷標題</th>
          <th width="120">折扣比例</th>
          <th>優惠卷有效期限</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!loading && dataList">
          <tr v-for="p in dataList" :key="p.id">
            <td>{{ p.code }}</td>
            <td>{{ p.title }}</td>
            <td class="text-right">{{ p.percent }}折</td>
            <td class="text-right">{{ formatTimestamp(p.due_date) }}</td>
            <td>
              <span v-if="p.is_enabled === 1" class="text-success">啟用</span>
              <span v-else-if="p.is_enabled === 0" class="text-danger">未啟用</span>
              <span v-else class="text-body-tertiary">載入中</span>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="editCouponModal(p)">
                  編輯
                </button>
                <button class="btn btn-outline-danger btn-sm" @click="deleteCouponModal(p)">
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
          <p class="h2 text-center text-secondary mb-3">沒有任何優惠卷</p>
          <p class="h5 text-center text-secondary">請點擊建立新的優惠劵按鈕</p>
        </div>
      </div>
    </div>
  </div>
  <Pagination :pages="paginationData" @change-page="getCouponData"></Pagination>
  <SectionLoading v-show="loading"></SectionLoading>
  <CouponModal
    ref="modalRef"
    :temp-data="modalData"
    :loading="modalLoading"
    @emit-modal="postCoupon"
  ></CouponModal>
  <DeleteCouponModal
    ref="DelModal"
    :order-data="modalData"
    :loading="modalLoading"
    @emit-del="delCoponData"
  ></DeleteCouponModal>
</template>
<script setup>
import { ref } from 'vue'

import CouponModal from '@/components/modal/CouponModal.vue'
import DeleteCouponModal from '@/components/modal/DeleteCouponModal.vue'
import SectionLoading from '@/components/SectionLoading.vue'
import Pagination from '@/components/dashboard/PaginationDash.vue'

import { getCoupons, addCoupon, editCoupon, delCoupon } from '@/composable/axiosDashAPI'
import { useToast } from '@/composable/useToast'

const dataList = ref('')
const modalData = ref(null)
const loading = ref(false)
const modalType = ref('')
const modalLoading = ref(false)
const paginationData = ref({ current_page: 1, total_pages: 1 })
//DOM
const modalRef = ref(null)
const DelModal = ref(null)

//取得優惠卷清單
async function getCouponData(page = 1) {
  paginationData.value.current_page = page
  loading.value = true
  const resp = await getCoupons(page)
  dataList.value = resp.data.coupons
  paginationData.value = resp.data.pagination
  loading.value = false
}

//打開新增優惠卷modal
function addCouponModal() {
  modalData.value = { is_enabled: 0 }
  modalType.value = 'add'
  modalRef.value?.showModal()
}

//開啟編輯優惠卷modal
function editCouponModal(item) {
  const temData = { ...item }
  //轉換時間戳為2025-09-19T20:08格式
  const newTime = formatTimestamp(temData.due_date, 'forEditModal')
  temData.due_date = newTime
  modalData.value = { ...temData }
  modalType.value = 'edit'
  modalRef.value?.showModal()
}

//開啟刪除優惠卷modal
function deleteCouponModal(p) {
  modalData.value = p
  DelModal.value?.showModal()
}

//上傳新增優惠卷資料
async function postCoupon(data) {
  const postData = { data: { ...data } }
  modalLoading.value = true
  if (modalType.value === 'add') {
    try {
      const resp = await addCoupon(postData)
      useToast(resp.data.message)
    } catch (error) {
      console.log('回傳錯誤優惠卷', error)
    } finally {
      modalLoading.value = false
      modalRef.value?.hideModal()
      getCouponData()
    }
  }
  if (modalType.value === 'edit') {
    try {
      const resp = await editCoupon(postData)
      useToast(resp.data.message)
    } catch (err) {
      useToast('編輯商品失敗，請稍後再試', 'danger')
      console.log(err)
    } finally {
      modalLoading.value = false
      modalRef.value?.hideModal()
      getCouponData(paginationData.value.current_page)
    }
  }
}

//刪除優惠卷資料
async function delCoponData(data) {
  modalLoading.value = true
  try {
    const resp = await delCoupon(data)
    useToast(resp.data.message)
  } catch (error) {
    console.log('沒刪除', error)
  } finally {
    modalLoading.value = false
    DelModal.value?.hideModal()
    getCouponData(paginationData.value.current_page)
  }
}

//計算timestamp
function formatTimestamp(timestamp, type = 'show') {
  const date = new Date(timestamp * 1000) // 轉換為毫秒
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  if (type === 'show') {
    return `${year}/${month}/${day}\n${hour}:${minute}`
  }
  if (type === 'forEditModal') {
    //範例2025-09-19T20:08
    return `${year}-${month}-${day}T${hour}:${minute}`
  }
}

getCouponData()
</script>
