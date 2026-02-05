<template>
  <div>
    <p class="h1 fw-bold text-center mb-2 mb-sm-4">心動商品</p>
    <swiper v-bind="swiperOptions" @swiper="onSwiperInit" class="pt-3">
      <swiper-slide v-for="i in cardData" :key="i.id" class="my-card-out">
        <a :href="i.link" class="text-decoration-none"
          ><div class="card rounded-4 my-card" :style="{ '--item-bg-img': `url(${i.bgImgUrl})` }">
            <div class="card-body rounded-4 mycard-bg">
              <div class="d-flex justify-content-center">
                <div class="ms-0 ms-sm-4 me-3 me-sm-5">
                  <img :src="i.imgUrl" class="my-card-img" alt="lavender_shampoo" />
                </div>
                <div class="d-flex flex-column justify-content-between mt-2 mt-sm-3 me-0 me-sm-2">
                  <p class="card-title h4 fw-bold text-center my-card-title">
                    {{ i.title }}
                  </p>
                  <p class="d-none d-sm-block card-text">
                    {{ i.content }}
                  </p>
                  <p class="d-block d-sm-none card-text">
                    {{ i.shortContent }}
                  </p>

                  <div class="d-flex justify-content-end">
                    <div class="d-flex my-card-button">
                      <p class="mb-0">購買去</p>
                      <div class="ms-1 ms-sm-2 my-card-arr">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div
        ></a>
      </swiper-slide>
    </swiper>
    <div class="container d-none d-sm-flex justify-content-end mt-4">
      <button type="button" @click="clickStop" class="my-stop-button">
        <span v-if="isStop"><i class="bi bi-play-fill me-1"></i>開始自動播放</span>
        <span v-if="!isStop"><i class="bi bi-pause-fill me-1"></i>暫停自動播放</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

//Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
// import required modules
import { FreeMode, Autoplay } from 'swiper/modules'

const swiperInstance = ref(null) // Swiper 實例
const isStop = ref(false)

//輪播swiper卡片資料
const cardData = ref([
  {
    title: '薰衣草',
    id: 1,
    content: '薰衣草特殊香氛設計，讓您彷彿沐浴在薰衣草田中，適合中乾髮質，讓您有水潤的頭髮',
    shortContent: '薰衣草香氣，適合中乾髮質',
    imgUrl: '/src/img/can_lavender.png',
    bgImgUrl: '/src/img/bgImg_lavender.jpg',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: '菊花',
    id: 2,
    content: '採用菊花特殊香氛設計，讓您擁有菊花的清香，適合水潤髮質，讓您的頭髮再度發揮光彩',
    shortContent: '菊花香氣，適合水潤髮質',
    imgUrl: '/src/img/can_chrysanthemum.png',
    bgImgUrl: '/src/img/bgImg_chrysanthemum.jpg',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: '蘆薈',
    id: 3,
    content: '蘆薈特殊香氛設計，讓您擁有蘆薈的柔順，適合毛躁髮質，讓您的頭髮不再亂翹',
    shortContent: '蘆薈香氣，適合毛躁髮質',
    imgUrl: '/src/img/can_aloe_vera.png',
    bgImgUrl: '/src/img/bgImg_aloe_vera.jpg',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: '蜂王乳',
    id: 4,
    content: '薰衣草特殊香氛設計，讓您彷彿沐浴在薰衣草田中，適合中乾髮質，讓您有水潤的頭髮',
    shortContent: '薰衣草香氣，適合中乾髮質',
    imgUrl: '/src/img/can_bee.png',
    bgImgUrl: '/src/img/bgImg_bee.jpg',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: '薄荷清香',
    id: 5,
    content: '薰衣草特殊香氛設計，讓您彷彿沐浴在薰衣草田中，適合中乾髮質，讓您有水潤的頭髮',
    shortContent: '薰衣草香氣，適合中乾髮質',
    imgUrl: '/src/img/can_mint.png',
    bgImgUrl: '/src/img/bgImg_mint.jpg',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: '百合',
    id: 5,
    content: '薰衣草特殊香氛設計，讓您彷彿沐浴在薰衣草田中，適合中乾髮質，讓您有水潤的頭髮',
    shortContent: '薰衣草香氣，適合中乾髮質',
    imgUrl: '/src/img/can_lily.png',
    bgImgUrl: '/src/img/bgImg_lily.jpg',
    link: 'https://tw.yahoo.com/',
  },
  {
    title: '玫瑰',
    id: 6,
    content: '薰衣草特殊香氛設計，讓您彷彿沐浴在薰衣草田中，適合中乾髮質，讓您有水潤的頭髮',
    shortContent: '薰衣草香氣，適合中乾髮質',
    imgUrl: '/src/img/can_rose.png',
    bgImgUrl: '/src/img/bgImg_rose.jpg',
    link: 'https://tw.yahoo.com/',
  },
])

const swiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 40,
  freeMode: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 7000,
  loop: true,
  pagination: {
    clickable: true,
  },
  modules: [FreeMode, Autoplay],

  // RWD 設定：手機小於 768px 時顯示 2 張
  breakpoints: {
    0: {
      spaceBetween: 15,
    },
    768: {
      spaceBetween: 20,
    },
    1400: {
      spaceBetween: 40,
    },
  },
}

const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper
}

function clickStop() {
  if (!swiperInstance.value) {
    return
  }
  //取得平移值
  const translate = swiperInstance.value.getTranslate()
  if (!isStop.value) {
    //將位置設定在現在平移的位置
    swiperInstance.value.setTranslate(translate)
    //暫停動畫
    swiperInstance.value.autoplay.stop()
  }
  if (isStop.value) {
    const actIdx = swiperInstance.value.activeIndex
    let runSpeed = 3500
    //計算速率
    if (actIdx == 1) {
      const speed = (Math.abs(-486 - translate) / 486) * 7000
      runSpeed = speed.toFixed(2)
    }
    if (actIdx == 2) {
      const speed = (Math.abs(-972 - translate) / 486) * 7000
      runSpeed = speed.toFixed(2)
    }
    if (actIdx == 3) {
      const speed = (Math.abs(-1458 - translate) / 486) * 7000
      runSpeed = speed.toFixed(2)
    }
    //運行到索引號等於actIdx的投影片
    swiperInstance.value.slideTo(actIdx, runSpeed)
    swiperInstance.value.autoplay.start()
  }
  isStop.value = !isStop.value
}
</script>
<style scoped lang="scss">
/* @property 變數 */
@property --white-1 {
  syntax: '<color>';
  inherits: false;
  initial-value: rgba(255, 255, 255, 0.95);
}

@property --card-shadow-radius {
  syntax: '<length>';
  inherits: false;
  initial-value: 0px;
}

.swiper {
  width: 100%;
  // height: 300px;
}

.my-card-out {
  width: 25%;
}

.my-card-img {
  width: 80px;
  transition: all 0.3s;
}

.my-card {
  border: 0px;
  box-shadow: 0 0 var(--card-shadow-radius) rgba(148, 148, 148, 0.5);
  transition: --card-shadow-radius 0.3s;
  &:hover {
    --card-shadow-radius: 7px;
    .my-card-img {
      scale: 1.04;
    }
    .my-card-button {
      background-color: rgb(120, 144, 125);
    }
    .my-card-arr {
      transform: translateX(5px);
    }
  }
}

.mycard-bg {
  background-image:
    linear-gradient(to bottom, var(--white-1), 80%, rgba(255, 255, 255, 0.3)), var(--item-bg-img);
  background-size: cover;
  background-position: center;
  transition:
    --white-1 0.3s,
    --white-2 0.3s;
  &:hover {
    --white-1: rgba(255, 255, 255, 1);
  }
}

.my-card-title {
  // color: var(--item-main-color);
  color: rgb(114, 135, 118);
}

.my-card-button {
  color: white;
  background-color: rgb(85, 103, 88);
  border-radius: 10px;
  padding: 5px 15px 5px 20px;
  box-shadow: 0 0 5px rgb(118, 118, 118);
  transition: background-color 0.3s;
}

.my-card-arr {
  transition: all 0.3s;
}

.my-stop-button {
  color: rgb(85, 103, 88);
  font-weight: bold;
  background-color: rgb(233, 241, 235);
  border-radius: 10px;
  border: 2px solid rgb(85, 103, 88);
  padding: 5px 10px;
}

@media (max-width: 1400px) {
  .my-card-out {
    width: 35%;
  }
}
@media (max-width: 992px) {
  .my-card-out {
    width: 42%;
  }
}

@media (max-width: 768px) {
  .my-card-out {
    width: 55%;
  }
  .my-card-img {
    width: 60px;
  }
  .my-card-button {
    padding: 5px 10px;
  }
}

@media (max-width: 414px) {
  .my-card-out {
    width: 75%;
  }
  .my-card-img {
    width: 50px;
  }
}
</style>
<style>
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
