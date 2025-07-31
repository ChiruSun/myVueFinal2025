<template>
  <div>
    <input type="file" accept="image/*" @change="onFileChange" />

    <div v-if="image" style="width: 500px; height: 400px; margin-top: 20px">
      <cropper
        :src="image"
        :stencil-props="{ aspectRatio: 1 }"
        :autoZoom="false"
        :resizeImage="true"
        class="cropper"
        @change="onCropChange"
        ref="cropperRef"
      />
    </div>

    <button v-if="image" @click="getCropped">取得裁切圖</button>

    <div v-if="croppedImage" style="width: 500px; margin-top: 20px">
      <h3>裁切結果：</h3>
      <img :src="croppedImage" alt="裁切後圖片" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

const image = ref(null)
const croppedImage = ref(null)
const cropperRef = ref(null)

const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      image.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const onCropChange = () => {
  // 可以在這裡即時獲得位置資料
  // const coordinates = cropperRef.value.getResult().coordinates
}

const getCropped = () => {
  const result = cropperRef.value?.getResult()
  if (result?.canvas) {
    croppedImage.value = result.canvas.toDataURL()
  }
}
</script>

<style scoped>
.cropper {
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
}
</style>
