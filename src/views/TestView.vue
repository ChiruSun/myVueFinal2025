<template>
  <div class="cropper-container">
    <!-- 上傳圖片 -->
    <input type="file" accept="image/*" @change="onFileChange" />

    <!-- 圖片裁剪 -->
    <cropper
      class="cropper"
      ref="cropperRef"
      :src="imageSrc"
      :transform="{ scale: scale }"
      :stencil-props="{ aspectRatio: 1 }"
      @change="onCropChange"
    />

    <!-- 縮放滑桿 -->
    <label>
      <p>滑桿值:{{ scale }}</p>
      <input type="range" min="1" max="10" step="1" v-model="scale" />
    </label>

    <!-- 裁剪按鈕 -->
    <button @click="getCroppedImage">取得裁剪結果</button>

    <!-- 裁剪後圖片預覽 -->
    <div v-if="croppedImage">
      <h3>裁剪後圖片：</h3>
      <img :src="croppedImage" alt="裁剪後圖片" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

const imageSrc = ref(null)
const scale = ref(1)
const coordinates = ref(null)
const canvasRef = ref(null)
const cropperRef = ref(null)
const croppedImage = ref(null)
//防抖
let timer = null
let firstOld = null

function onFileChange(event) {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = () => {
      imageSrc.value = reader.result
    }
    reader.readAsDataURL(file)
  }
  scale.value = 1
}

watch(
  () => scale.value,
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

function onCropChange({ coordinates: coords, canvas }) {
  coordinates.value = coords
  canvasRef.value = canvas
}

function getCroppedImage() {
  if (canvasRef.value && coordinates.value) {
    const croppedCanvas = canvasRef.value.crop(coordinates.value)
    croppedImage.value = croppedCanvas.toDataURL()
  }
}
</script>

<style scoped>
.cropper-container {
  max-width: 600px;
  margin: 0 auto;
}
.cropper {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  margin: 1rem 0;
}
input[type='range'] {
  width: 100%;
  margin-top: 0.5rem;
}
img {
  max-width: 100%;
  margin-top: 1rem;
  border: 1px solid #ddd;
}
</style>
