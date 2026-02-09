<template>
  <div>
    <div class="banner mb-3 mb-md-5"></div>
    <div v-show="!loading">
      <div class="container mb-5">
        <div class="mb-5 d-block d-md-none fs-5">
          <a href="#" class="my-filter-link" title="篩選" @click.prevent="filterPhone"
            ><i class="bi bi-funnel me-2"></i>篩選</a
          >
          <!-- 手機版篩選塊黑底  -->
          <div class="blackBG" :class="{ 'blackBG-show': SideIsShow }" @click="closefilter"></div>
        </div>
        <div class="row">
          <div class="col-0 col-md-3">
            <div class="sticky-top list-sticky" :class="{ 'list-ani': SideIsShow }">
              <div class="close-btn">
                <a href="#" @click.prevent="closefilter" title="關閉"><i class="bi bi-x-lg"></i></a>
              </div>
              <ul class="my-list-style p-0 p-md-3">
                <li>
                  <a
                    href="#"
                    class="my-list-link"
                    :class="{ 'category-active': isActive('all') }"
                    @click.prevent="changePage({ category: 'all' })"
                    >全部商品</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="my-list-link"
                    :class="{ 'category-active': isActive('洗髮精') }"
                    @click.prevent="changePage({ category: '洗髮精' })"
                    >洗髮精</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="my-list-link"
                    :class="{ 'category-active': isActive('洗面乳') }"
                    @click.prevent="changePage({ category: '洗面乳' })"
                    >洗面乳</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="my-list-link border-0"
                    :class="{ 'category-active': isActive('乳霜') }"
                    @click.prevent="changePage({ category: '乳霜' })"
                    >護膚乳霜</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-9 container">
            <div class="row g-3 gy-5 mb-5">
              <div class="col-6 col-md-4" v-for="item in showProduct" :key="item.id">
                <div class="my-card d-flex flex-column justify-content-between h-100">
                  <div class="w-100">
                    <div class="mycard-img-box overflow-hidden">
                      <RouterLink
                        :to="{ name: 'single_product', params: { id: item.id } }"
                        class="mycard-img w-100 h-100"
                        :style="{ backgroundImage: `url(${getImage(item.imageUrl)})` }"
                      ></RouterLink>
                    </div>
                    <p class="fs-5 mb-2 text-center">{{ item.title }}</p>
                  </div>
                  <div class="text-center">
                    <p class="text-danger fs-4 fw-bold mb-0">NT${{ item.price }}</p>
                    <p class="text-secondary text-decoration-line-through mb-2">
                      NT${{ item.origin_price }}
                    </p>
                    <button type="button" class="btn btn-dark px-3">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <nav v-if="productPageData">
                <ul class="my-page fs-4">
                  <li class="me-3">
                    <a
                      class="my-page-link"
                      :class="{ 'my-page-disabled': !productPageData?.has_pre }"
                      href="#"
                      title="上一頁"
                      @click.prevent="changePage({ page: productPageData?.current_page - 1 })"
                      >&#x276e;</a
                    >
                  </li>
                  <li v-for="i in productPageData?.total_pages" :key="i">
                    <a
                      class="my-page-link hover-deco"
                      :class="{ 'page-active': productPageData.current_page === i }"
                      href="#"
                      @click.prevent="changePage({ page: i })"
                      >{{ i }}</a
                    >
                  </li>
                  <li class="ms-3">
                    <a
                      class="my-page-link"
                      :class="{ 'my-page-disabled': !productPageData?.has_next }"
                      href="#"
                      title="下一頁"
                      @click.prevent="changePage({ page: productPageData?.current_page + 1 })"
                      >&#x276f;</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter></HomeFooter>
    </div>
  </div>
  <div class="loadingBG" v-show="loading"></div>
  <SectionLoading v-show="loading" />
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

import SectionLoading from '@/components/SectionLoading.vue'
import HomeFooter from '@/components/user/HomeFooter.vue'

const APIUrl = import.meta.env.VITE_API_URL
const APIPath = import.meta.env.VITE_API_PATH
const productUrl = `${APIUrl}v2/api/${APIPath}/products?page=`

const showProduct = ref(null)
const productPageData = ref(null)
const loading = ref(true)
const SideIsShow = ref(false)
const route = useRoute()
const router = useRouter()

const productDefaultImage = '/src/img/NoImage.jpg'

//監聽query
watch(
  () => [route.query.category, route.query.page],
  ([category, page]) => askProduct(category, page),
)

//請求資料
async function askProduct(category = 'all', page = 1) {
  loading.value = true
  SideIsShow.value = false
  let apiUrl = productUrl + page

  if (category !== 'all') {
    apiUrl = apiUrl + '&category=' + category
  }
  const resp = await axios.get(apiUrl)
  showProduct.value = resp.data.products
  productPageData.value = resp.data.pagination
  loading.value = false
}

function changePage({ category, page = 1 } = {}) {
  router.push({
    query: { ...route.query, category: category ?? route.query.category, page },
  })
}

function isActive(category) {
  return route.query.category === category
}

const getImage = (url) => {
  return url || productDefaultImage
}

function filterPhone() {
  SideIsShow.value = true
}

function closefilter() {
  SideIsShow.value = false
}

// changePage({ category: 'all' })

onMounted(() => {
  askProduct()
})
</script>
<style scoped>
.banner {
  width: 100%;
  aspect-ratio: 1920 / 354;
  background-image: url('@/img/product_banner.png');
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}

.loadingBG {
  position: absolute;
  inset: 0;
  background-color: rgb(233, 241, 235);
}

.my-filter-link {
  color: rgb(85, 103, 88);
  text-decoration: none;
  border: 1px solid rgb(85, 103, 88);
  border-radius: 6px;
  padding: 10px 15px;
}

.close-btn {
  display: none;
}

.close-btn a {
  color: rgb(85, 103, 88);
}

.blackBG {
  visibility: hidden;
  z-index: 12;
  background-color: black;
  opacity: 0%;
  position: fixed;
  inset: 0;
  transition: opacity 0.2s;
}

.blackBG-show {
  visibility: visible;
  opacity: 50%;
}

.list-sticky {
  top: 100px;
}

.my-list-style {
  list-style: none;
  border-radius: 10px;
}

.my-list-link {
  display: block;
  width: 100%;
  padding: 10px 0;
  color: rgb(85, 103, 88);
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  border-bottom: solid 1px rgba(85, 103, 88, 0.6);
  transition: background-color 0.2s;
}

.my-list-link:hover {
  color: white;
  background-color: rgba(85, 103, 88, 0.6);
}

.category-active {
  font-weight: bold;
  pointer-events: none;
}

.my-card {
  padding-bottom: 16px;
  border-radius: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.my-card:hover {
  background-color: rgba(255, 255, 255, 0.6);
}

.mycard-img-box {
  position: relative;
  width: 100%;
  border-radius: 10px;
  padding-top: 100%;
  margin-bottom: 12px;
}

.mycard-img {
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}

.mycard-img:hover {
  transform: scale(1.05);
}

.my-page {
  display: flex;
  list-style: none;
}

.my-page-link {
  color: rgb(122, 135, 125);
  text-decoration: none;
  padding: 0 8px;
}

.hover-deco:hover {
  text-decoration: underline;
}

.page-active {
  color: rgb(64, 90, 67);
  font-weight: bold;
  pointer-events: none;
}

.my-page-disabled {
  color: rgb(207, 207, 207);
  pointer-events: none;
}

@media (max-width: 992px) {
  .banner {
    aspect-ratio: 1920 / 500;
    background-size: cover;
  }
}

@media (max-width: 768px) {
  .banner {
    aspect-ratio: 768 / 350;
    background-image: url('@/img/product_banner2.png');
    background-size: contain;
    background-position: center bottom;
  }

  .list-sticky {
    background-color: white;
    position: fixed;
    z-index: 13;
    top: 0;
    left: -200px;
    bottom: 0;
    padding: 0 10px;
    transition: left 0.2s;
  }
  .list-ani {
    left: 0px;
  }
  .my-list-link {
    padding: 10px 30px;
  }
  .close-btn {
    display: flex;
    justify-content: end;
    padding: 10px 10px 4px 10px;
    font-size: 22px;
  }
}
</style>
