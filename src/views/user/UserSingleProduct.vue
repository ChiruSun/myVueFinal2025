<template>
  <div class="all-page" v-show="!loading">
    <div class="container">
      <div class="d-flex">
        <a class="me-2 my-list-link" @click.prevent="goHome" href="#">首頁</a>
        <p class="me-2">></p>
        <a class="me-2 my-list-link" @click.prevent="goCategory" href="#">{{
          productData?.category
        }}</a>
        <p class="me-2">></p>
        <p class="fw-bold my-theme-color">{{ productData?.content }}</p>
      </div>

      <div class="row gy-4 mb-5">
        <div class="col-12 col-md-5 rounded-5 overflow-hidden">
          <img :src="productData?.imageUrl" class="img-fluid" :alt="productData?.content" />
        </div>

        <div class="col-12 col-md-7">
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

          <div class="d-flex flex-column flex-lg-row justify-content-between">
            <div>
              <div class="d-flex align-items-baseline">
                <p>數量({{ productData?.unit }})：</p>
                <div class="input-group mb-3 me-2 my-quantity-box">
                  <button class="btn btn-outline-secondary" type="button" @click="decrease">
                    -
                  </button>
                  <input
                    type="text"
                    class="form-control text-center"
                    v-model="productQuantity"
                    @input="limitNumber"
                  />
                  <button class="btn btn-outline-secondary" type="button" @click="increase">
                    +
                  </button>
                </div>
              </div>
              <p class="text-danger" v-show="quantityIsZero">數量最低為1</p>
              <p class="text-danger" v-show="quantityIsOver">數量上限為99</p>
            </div>

            <div class="d-flex">
              <button class="btn btn-dark fs-5 px-4 me-2" type="button">立即結帳</button
              ><button class="btn btn-outline-dark px-4 fs-5" type="button">
                加入購物車<i class="bi bi-cart-fill ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-md px-0 px-md-2 mb-5">
      <div class="container"><h4 class="mb-4">您可能會喜歡這些：</h4></div>

      <swiper
        :slidesPerView="1.5"
        :spaceBetween="10"
        :breakpoints="{
          '576': {
            slidesPerView: 2.5,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="item in showsimilarProducts" :key="item.id"
          ><div class="card similar-card">
            <img :src="item.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ item.content }}</h5>
              <div class="d-flex align-items-baseline">
                <p class="fw-bold me-2 text-danger">NT${{ item.price }}</p>
                <p class="smaller-money">NT${{ item.origin_price }}</p>
              </div>
              <!-- <a href="#" class="similar-btn">去看看</a> -->
              <RouterLink
                :to="{ name: 'single_product', params: { id: item.id } }"
                class="similar-btn"
                >去看看</RouterLink
              >
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
    <p class="text-danger text-center fs-5 mb-5">※注意：此為網頁練習作品，商品不存在，為捏造內容</p>
    <HomeFooter></HomeFooter>
  </div>
  <SectionLoading v-show="loading" />
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

import SectionLoading from '@/components/SectionLoading.vue'
import HomeFooter from '@/components/user/HomeFooter.vue'

const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH
const { id } = defineProps({
  id: String,
})
const router = useRouter()

const productData = ref(null)
const loading = ref(false)
const similarProducts = ref(null)
const showsimilarProducts = ref(null)
//商品數量
const productQuantity = ref(1)
const quantityIsZero = ref(false)
const quantityIsOver = ref(false)

watch(
  () => id,
  (newId) => {
    getSingleProduct()
  },
)

async function getSingleProduct() {
  let nowCategory
  loading.value = true
  const resp = await axios.get(`${APIUrl}v2/api/${APIPath}/product/${id}`)
  productData.value = resp.data.product
  nowCategory = productData.value.category

  const similarResp = await axios.get(`${APIUrl}v2/api/${APIPath}/products?category=${nowCategory}`)
  similarProducts.value = similarResp.data.products
  arrangeProduct()
  loading.value = false
  console.log('單一商品回傳', productData.value)
  console.log(similarProducts.value)

  console.log('相似類型商品顯示', showsimilarProducts.value)
}

//類似商品
function arrangeProduct() {
  let nowProductName = null
  nowProductName = productData.value.content
  //去除該商品頁面的商品
  similarProducts.value = similarProducts.value.filter((item) => item.content !== nowProductName)
  //其中取3項商品
  const result = [...similarProducts.value].sort(() => Math.random() - 0.5).slice(0, 3)
  showsimilarProducts.value = result
}

//數字輸入
function limitNumber(e) {
  productQuantity.value = normalize(e.target.value)
}

//數字增加
function increase() {
  productQuantity.value = normalize(Number(productQuantity.value) + 1)
}

//數字減少
function decrease() {
  productQuantity.value = normalize(Number(productQuantity.value) - 1)
}

//商品數量變化整合
function normalize(val) {
  // 只留數字
  val = String(val).replace(/\D/g, '')
  quantityIsZero.value = false
  quantityIsOver.value = false
  // 空值處理
  if (val === '') return '1'
  //下限 1
  if (val === '0') {
    quantityIsZero.value = true
    return '1'
  }
  //上限 99
  if (Number(val) > 99) {
    quantityIsOver.value = true
    return '99'
  }

  return val
}

function goCategory() {
  router.push({
    path: '/products',
    query: {
      category: productData.value.category,
    },
  })
}

function goHome() {
  router.push({
    path: '/',
  })
}

getSingleProduct()
</script>
<style scoped>
.all-page {
  padding-top: 120px;
}

.my-list-link {
  color: gray;
  text-decoration: none;
}

.my-list-link:hover {
  text-decoration: underline;
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

.smaller-money {
  font-size: 12px;
  color: rgb(152, 152, 152);
  text-decoration: line-through;
}

.similar-card {
  background-color: rgba(255, 255, 255, 0.7);
  border: 0;
}

.my-quantity-box {
  width: 115px;
}
</style>
