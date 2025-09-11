<template>
  <div class="modal fade" tabindex="-1" ref="modalRef">
    <!-- 請同學自行新增 v-model -->
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0 position-relative overflow-hidden">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close icon-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <form class="needs-validation" @submit.prevent="emitSendData" ref="formRef" novalidate>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="modalData.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label"
                    >或 上傳圖片

                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control mb-2"
                    ref="imgInput"
                    @change="cropImg"
                  />
                  <p v-if="exceedSize" class="text-danger">
                    圖片容量超過3MB，無法上傳，請選擇較小圖片
                  </p>
                </div>
                <img class="img-fluid" :src="modalData.imageUrl" />
                <!-- 延伸技巧，多圖 -->
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="modalData.title"
                    id="title"
                    placeholder="請輸入標題"
                    required
                  />
                  <div class="invalid-feedback">標題為必填</div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="modalData.category"
                      id="category"
                      placeholder="請輸入分類"
                      required
                    />
                    <div class="invalid-feedback">分類為必填</div>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位*</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="modalData.unit"
                      id="unit"
                      placeholder="請輸入單位(個/件/張..等等)"
                      required
                    />
                    <div class="invalid-feedback">單位為必填</div>
                  </div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價*</label>
                    <input
                      type="text"
                      class="form-control"
                      id="origin_price"
                      v-model="modalData.origin_price"
                      @input="correctionOriginPrice"
                      placeholder="請輸入原價"
                      required
                    />
                    <div class="invalid-feedback">原價請以數字輸入</div>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價*</label>
                    <input
                      type="text"
                      class="form-control"
                      id="price"
                      v-model="modalData.price"
                      @input="correctionPrice"
                      placeholder="請輸入售價"
                      required
                    />
                    <div class="invalid-feedback">售價請以數字輸入</div>
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="modalData.description"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="modalData.content"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      v-model="modalData.is_enabled"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label my-valid-style" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="submit" class="btn btn-primary">確認</button>
          </div>
        </form>
        <SectionLoading v-if="loading || PModalLoading"></SectionLoading>
        <ImgCropModal
          :isOpen="isCropOpen"
          :image="imgToUrl"
          @close="cropClose"
          @crop-send="uploadCropImg"
        ></ImgCropModal>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'

import { useModal } from '@/composable/useModal'
import ImgCropModal from './ImgCropModal.vue'
import SectionLoading from '../SectionLoading.vue'

const props = defineProps({ tempData: Object, loading: Boolean })
const emit = defineEmits(['emitModal'])
const modalData = ref({ title: '', category: '', unit: '', origin_price: '', price: '' })
const PModalLoading = ref(false)

//DOM本體
const modalRef = ref(null)
const formRef = ref(null)
const imgInput = ref(null)
//裁切圖片
const exceedSize = ref(false)
const isCropOpen = ref(false)
const imgToUrl = ref(null)
let previousUrl = null // 用來釋放舊的 object URL

const { showModal, hideModal } = useModal(modalRef)

//偵測props進來的資料是否改變
watch(
  () => props.tempData,
  (newVal) => {
    modalData.value = { ...newVal }
    //防止再開modal出現invaild樣式
    if (formRef.value.classList.contains('was-validated')) {
      formRef.value.classList.remove('was-validated')
    }
  },
)

//裁剪後圖片上傳
async function uploadCropImg(cropFile) {
  PModalLoading.value = true
  cropClose()
  const ImgAPI = `${import.meta.env.VITE_API_URL}v2/api/${import.meta.env.VITE_API_PATH}/admin/upload`
  const formData = new FormData()
  formData.append('file-to-upload', cropFile)
  try {
    const resp = await axios.post(ImgAPI, formData)
    modalData.value.imageUrl = resp.data.imageUrl
  } catch (error) {
    console.log('裁剪圖片上傳失敗', error)
  } finally {
    PModalLoading.value = false
  }
}

//input限制輸入數字
function correctionOriginPrice(e) {
  modalData.value.origin_price = e.target.value.replace(/\D/g, '')
}
function correctionPrice(e) {
  modalData.value.price = e.target.value.replace(/\D/g, '')
}

//emit送出表單資料
function emitSendData() {
  const form = formRef.value
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
    return
  }
  emit('emitModal', modalData.value)
}

//開啟cropModal
function cropImg(event) {
  exceedSize.value = false
  const file = event.target.files[0]
  if (file) {
    const maxSize = 2 * 1024 * 1024 // 圖片檔案限制3MB
    if (file.size > maxSize) {
      exceedSize.value = true
      imgInput.value.value = ''
      return
    }

    isCropOpen.value = true
    // 釋放舊的 Object URL
    if (previousUrl) {
      URL.revokeObjectURL(previousUrl)
    }
    const objectUrl = URL.createObjectURL(file)
    previousUrl = objectUrl
    imgToUrl.value = objectUrl
  }
}

//關閉crop視窗
function cropClose() {
  isCropOpen.value = false
  imgInput.value.value = ''
}

defineExpose({
  showModal,
  hideModal,
})
</script>

<style scoped>
/* 關閉按鈕改成白色 */
.icon-white {
  filter: invert(1);
}
</style>
