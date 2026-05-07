<template>
  <div class="modal fade" tabindex="-1" ref="modalRef">
    <div class="modal-dialog">
      <div class="modal-content position-relative overflow-hidden">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-white">刪除商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="delModalData?.id === 'all'">
            <p class="mb-0">你確定要刪除<span class="text-danger fw-bold">全部商品</span>嗎</p>
          </div>
          <div v-else>
            <p class="mb-0">你確定要刪除商品「{{ delModalData?.product?.content }}」嗎？</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="emitDelData">確定刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useModal } from '@/composable/useModal'
const props = defineProps({ productData: Object })
const delModalData = ref(null)

const modalRef = ref(null)
const { showModal, hideModal } = useModal(modalRef)

const emit = defineEmits(['emitDel'])

//偵測props進來的資料是否改變
watch(
  () => props.productData,
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
