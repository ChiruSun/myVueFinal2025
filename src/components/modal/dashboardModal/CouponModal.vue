<template>
  <div class="modal fade" tabindex="-1" ref="modalRef">
    <!-- 請同學自行新增 v-model -->
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0 position-relative overflow-hidden">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>建立新的優惠劵</span>
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
            <div>
              <div class="mb-3">
                <label for="title" class="form-label">優惠卷標題</label>
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

              <div class="row mb-3">
                <div class="col-6">
                  <label for="percent" class="form-label">折扣比例</label>
                  <div class="input-group has-validation">
                    <input
                      type="text"
                      class="form-control"
                      v-model="modalData.percent"
                      id="percent"
                      placeholder="請輸入比例"
                      maxlength="2"
                      @input="correctionPercent"
                      required
                    />
                    <span class="input-group-text" id="basic-addon3">%</span>
                    <div class="invalid-feedback">折扣比例為必填</div>
                  </div>

                  <small class="text-body-tertiary">例:80%為8折</small>
                </div>
                <div class="col-6">
                  <label for="dueDate" class="form-label">優惠卷有效期限</label>
                  <input
                    type="datetime-local"
                    class="form-control"
                    v-model="modalData.due_date"
                    id="dueDate"
                    placeholder="請輸入標題"
                    required
                  />
                  <div class="invalid-feedback">有效期限為必填</div>
                </div>
              </div>
              <div class="mb-3">
                <label for="code" class="form-label">優惠卷代碼</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="modalData.code"
                  id="code"
                  placeholder="請輸入優惠卷代碼，英數混合"
                  required
                />
                <div class="invalid-feedback">優惠卷代碼為必填</div>
              </div>
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="modalData.is_enabled"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  />
                  <label class="form-check-label my-valid-style" for="is_enabled"> 是否啟用 </label>
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
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, computed } from 'vue'

import { useModal } from '@/composable/useModal'
import SectionLoading from '@/components/SectionLoading.vue'

const props = defineProps({ tempData: Object, loading: Boolean })
const emit = defineEmits(['emitModal'])
const modalData = ref({ title: '', percent: '', due_date: '', is_enabled: 0, code: '' })
const PModalLoading = ref(false)

const timestamp = computed(() => {
  if (!modalData.value.due_date) return ''
  // 1. 用 new Date() 解析
  const ms = new Date(modalData.value.due_date).getTime()
  // 2. 轉成秒數
  return Math.floor(ms / 1000)
})

//DOM本體
const modalRef = ref(null)
const formRef = ref(null)

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

//input限制輸入數字
function correctionPercent(e) {
  modalData.value.percent = e.target.value.replace(/\D/g, '')
}

//emit送出表單資料
function emitSendData() {
  //驗證表單
  const form = formRef.value
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
    return
  }
  //資料送出前放入timestamp和轉換數字
  const emitData = { ...modalData.value }
  emitData.due_date = timestamp.value
  emitData.percent = parseFloat(emitData.percent)
  //資料傳出
  emit('emitModal', emitData)
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
