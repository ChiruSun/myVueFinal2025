<template>
  <div class="container">
    <button type="button" class="btn btn-primary mt-3" @click="addProductModal">新增資料</button>
    <table class="table mt-4 mb-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!loading && dataList">
          <tr v-for="p in dataList" :key="p.id">
            <td>{{ p.category }}</td>
            <td>{{ p.title }}</td>
            <td class="text-right">{{ formatNumber(p.origin_price) }}</td>
            <td class="text-right">{{ formatNumber(p.price) }}</td>
            <td>
              <span v-if="p.is_enabled === 1" class="text-success">啟用</span>
              <span v-else-if="p.is_enabled === 0" class="text-danger">未啟用</span>
              <span v-else class="text-body-tertiary">載入中</span>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="editProductModal(p)">
                  編輯
                </button>
                <button class="btn btn-outline-danger btn-sm" @click="deleteProductModal(p)">
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
          <p class="h2 text-center text-secondary mb-3">沒有任何資料</p>
          <p class="h5 text-center text-secondary">請點擊新增資料按鈕</p>
        </div>
      </div>
    </div>
  </div>
  <Pagination :pages="paginationData" @change-page="getProductData"></Pagination>
  <SectionLoading v-show="loading"></SectionLoading>

  <ProductsModal
    ref="modalRef"
    :temp-data="singleProductData"
    :loading="modalLoading"
    @emit-modal="modalPut"
  ></ProductsModal>
  <DeleteModal
    ref="delModalRef"
    :temp-data="singleProductData"
    :loading="modalDelLoading"
    @emit-del="deleteProduct"
  ></DeleteModal>
</template>
<script setup>
import { ref } from 'vue'

import ProductsModal from '@/components/modal/ProductsModalDash.vue'
import DeleteModal from '@/components/modal/DeleteProductModal.vue'
import SectionLoading from '@/components/SectionLoading.vue'
import Pagination from '@/components/PaginationDash.vue'

import { useFormatNumber } from '@/composable/useFormat'
import { getProducts, addProduct, editProduct, delProduct } from '@/composable/axiosDashAPI'
import emitter from '@/emitter'

const { formatNumber } = useFormatNumber()
const dataList = ref([{ title: '' }])
const singleProductData = ref({ title: '原始標題' })
const loading = ref(false)
const modalRef = ref(null)
const delModalRef = ref(null)
const modalType = ref('')
const modalLoading = ref(false)
const modalDelLoading = ref(false)
const paginationData = ref({ current_page: 1, total_pages: 1 })

//請求商品list
async function getProductData(page = 1) {
  paginationData.value.current_page = page
  loading.value = true
  const resp = await getProducts(page)
  dataList.value = resp.data.products
  paginationData.value = resp.data.pagination
  loading.value = false
}

//接收modal子元件emit的資料並執行"新增商品"要求
function modalPut(e) {
  postAddData(e)
}

//新增商品/編輯商品
async function postAddData(data) {
  modalLoading.value = true
  const tempData = { ...data }
  tempData.origin_price = Number(tempData.origin_price)
  tempData.price = Number(tempData.price)
  const sendData = { data: { ...tempData } }
  //新增商品
  if (modalType.value === 'add') {
    try {
      const resp = await addProduct(sendData)
      //開啟toast
      emitter.emit('toast', { message: resp.data.message })
      //請求商品清單
      getProductData()
    } catch (error) {
      const errMsg = error.response.data.message.join('、')
      emitter.emit('toast', { message: errMsg, type: 'danger' })
    }
    modalRef.value?.hideModal()
    modalLoading.value = false
    return
  }
  //編輯商品
  if (modalType.value === 'edit') {
    try {
      const resp = await editProduct(sendData)
      emitter.emit('toast', { message: resp.data.message })
      getProductData(paginationData.value.current_page)
    } catch (error) {
      const errMsg = error.response.data.message.join('、')
      emitter.emit('toast', { message: errMsg, type: 'danger' })
    }
    modalRef.value?.hideModal()
    modalLoading.value = false
    return
  }
}

//刪除商品
async function deleteProduct(id) {
  modalDelLoading.value = true
  try {
    const resp = await delProduct(id)
    emitter.emit('toast', { message: resp.data.message })
    //關閉刪除的modal
    delModalRef.value?.hideModal()
    modalDelLoading.value = false
    //請求商品清單(停留在刪除page)
    getProductData(paginationData.value.current_page)
  } catch (error) {
    console.log('刪除商品失敗', error)
  }
}

//開啟新增商品modal
function addProductModal() {
  singleProductData.value = { is_enabled: 0 }
  modalType.value = 'add'
  if (modalRef.value) {
    modalRef.value.showModal()
  }
}

//開啟編輯商品modal
function editProductModal(item) {
  singleProductData.value = { ...item }
  modalType.value = 'edit'
  if (modalRef.value) {
    modalRef.value.showModal()
  }
}

//開啟刪除資料modal
function deleteProductModal(item) {
  singleProductData.value = { ...item }
  if (delModalRef.value) {
    delModalRef.value.showModal()
  }
}

//開場執行 "請求商品清單"
getProductData()
</script>
