<template>
  <div class="all-page">
    <div class="container">
      <div class="row mb-5">
        <div class="col-5 rounded-5 overflow-hidden">
          <img :src="productData?.imageUrl" class="img-fluid" :alt="productData?.content" />
        </div>

        <div class="col-7">
          <h2>{{ productData?.content }}</h2>
        </div>
      </div>
      <div>
        <h4>你可能會喜歡：</h4>
      </div>
    </div>

    <HomeFooter></HomeFooter>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

import HomeFooter from '@/components/user/HomeFooter.vue'

const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH
const { id } = defineProps({
  id: String,
})

const productData = ref(null)

async function getSingleProduct() {
  const resp = await axios.get(`${APIUrl}v2/api/${APIPath}/product/${id}`)
  productData.value = resp.data.product
  console.log('單一商品回傳', productData.value)
}

async function getSameCategoryPr(category) {
  console.log('ABC')
}
getSingleProduct()
</script>
<style scoped>
.all-page {
  padding-top: 120px;
}
</style>
