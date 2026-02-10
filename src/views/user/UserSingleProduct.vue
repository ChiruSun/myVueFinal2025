<template>
  <div class="all-page">
    <div class="container">
      <div class="row mb-5">
        <div class="col-5 rounded-5 overflow-hidden">
          <img :src="productData?.imageUrl" class="img-fluid" :alt="productData?.content" />
        </div>

        <div class="col-7">
          <p class="subtitle fw-bold">沁心</p>
          <h2 class="title">{{ productData?.content }}</h2>
          <div>
            <p>{{ productData?.description }}</p>
          </div>
          <div class="d-flex align-items-baseline">
            <p class="price me-2">
              NT$ <span class="fs-1">{{ productData?.price }}</span>
            </p>
            <p class="origin-price">NT${{ productData?.origin_price }}</p>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <h4>你可能會喜歡這些：</h4>
        <div class="d-flex justify-content-around">
          <div v-for="item in showsimilarProducts" :key="item.id">
            <div class="card" style="width: 18rem">
              <img :src="item.imageUrl" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ item.content }}</h5>
                <p class="card-text">價格：NT${{ item.price }}</p>
                <a href="#" class="similar-btn">去看看</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-danger text-center fs-5 mb-5">
        ※注意：此為網頁練習作品，商品不存在，為捏造內容
      </p>
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
const similarProducts = ref(null)
const showsimilarProducts = ref(null)

async function getSingleProduct() {
  let nowCategory

  const resp = await axios.get(`${APIUrl}v2/api/${APIPath}/product/${id}`)
  productData.value = resp.data.product
  nowCategory = productData.value.category

  const similarResp = await axios.get(`${APIUrl}v2/api/${APIPath}/products?category=${nowCategory}`)
  similarProducts.value = similarResp.data.products
  arrangeProduct()
  console.log('單一商品回傳', productData.value)
  console.log(similarProducts.value)

  console.log('相似類型商品顯示', showsimilarProducts.value)
}

function arrangeProduct() {
  let nowProductName = null
  nowProductName = productData.value.content
  //去除該商品頁面的商品
  similarProducts.value = similarProducts.value.filter((item) => item.content !== nowProductName)
  //其中取3項商品
  const result = [...similarProducts.value].sort(() => Math.random() - 0.5).slice(0, 3)
  showsimilarProducts.value = result
}

getSingleProduct()
</script>
<style scoped>
.all-page {
  padding-top: 120px;
}
.subtitle {
  color: rgb(120, 144, 125);
  font-size: 20px;
  margin-bottom: 8px;
}

.title {
  font-family: 'Zen Old Mincho', serif;
  font-weight: 700;
  color: rgb(61, 61, 61);
  margin-bottom: 24px;
}

.price {
  color: rgb(201, 59, 59);
  font-weight: bold;
  font-size: 24px;
}
.origin-price {
  color: rgb(152, 152, 152);
  text-decoration: line-through;
}

.similar-btn {
  background-color: rgb(120, 144, 125);
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>
