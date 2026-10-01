<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <h2 class="fw-bold">請裁切圖片</h2>
      <!-- 滑桿控制縮放 -->
      <div>
        <cropper
          class="cropper"
          ref="cropperRef"
          :src="image"
          :stencil-props="{ aspectRatio: 1 }"
          :resizeImage="{ touch: false, wheel: false }"
        />
        <label for="range" class="form-label">點此縮放</label>
        <input
          type="range"
          class="form-range mb-3"
          id="range"
          min="1"
          max="15"
          step="1"
          v-model="zoomValue"
        />
      </div>

      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-secondary me-2" @click="close">關閉</button>
        <button type="button" class="btn btn-primary" @click="getCroppedImage">確定裁切</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

const zoomValue = ref(1)
const cropperRef = ref(null)
//防抖
let timer = null
let firstOld = null

const props = defineProps({
  isOpen: Boolean,
  image: String,
})

const emit = defineEmits(['close', 'cropSend'])

function close() {
  emit('close')
}

watch(
  () => props.image,
  () => {
    zoomValue.value = 1
  },
)

watch(
  () => zoomValue.value,
  (newVal, oldVal) => {
    if (firstOld === null) {
      firstOld = oldVal
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (newVal == 1) {
        cropperRef.value?.reset()
        firstOld = null
        return
      }
      if (newVal > firstOld) {
        const gap = newVal - firstOld
        const factor = Math.round(1.1 ** gap * 1000) / 1000
        cropperRef.value?.zoom(factor)
        firstOld = null
        return
      }
      if (newVal < firstOld) {
        const gap = firstOld - newVal
        const factor = Math.round(0.909 ** gap * 1000) / 1000
        cropperRef.value?.zoom(factor)
        firstOld = null
        return
      }
    }, 100)
  },
)

function getCroppedImage() {
  const result = cropperRef.value?.getResult()
  //轉換blob再轉換成file
  result.canvas.toBlob(
    (blob) => {
      const file = new File([blob], 'cropped.jpg', { type: 'image/jpeg' })
      emit('cropSend', file)
    },
    'image/jpeg',
    0.9,
  )
  // console.log('按鈕取得座標:', result.canvas)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.modal-content {
  background-color: #fff;
  width: max-content;
  height: 800px;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.cropbox {
  width: 550px;
  height: 550px;
}

.cropper {
  width: 550px;
  height: 550px;
  border: 1px solid #ccc;
  margin: 1rem 0;
}
</style>
