<template>
  <div class="modal fade" tabindex="-1" ref="modalRef">
    <div class="modal-dialog">
      <div class="modal-content position-relative overflow-hidden">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-white">刪除資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            你確定要刪除email為<span class="text-danger fw-bold"
              >「{{ delModalData?.user?.email }}」</span
            >的訂單資料嗎？(刪除後將無法恢復)
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="emitDelData">確定刪除</button>
        </div>
        <SectionLoading v-if="loading"></SectionLoading>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useModal } from '@/composable/useModal'
import SectionLoading from '../SectionLoading.vue'
const props = defineProps({ orderData: Object, loading: Boolean })
const delModalData = ref()
// const loading = ref(false)

const modalRef = ref(null)
const { showModal, hideModal } = useModal(modalRef)

const emit = defineEmits(['emitDel'])

//偵測props進來的資料是否改變
watch(
  () => props.orderData,
  (newVal) => {
    delModalData.value = { ...newVal }
  },
)

function emitDelData() {
  emit('emitDel', delModalData.value.id)
}

defineExpose({
  showModal,
  hideModal,
})
</script>
