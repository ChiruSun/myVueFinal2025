<template>
  <div class="mybanner">
    <div class="position-relative">
      <div class="mask">
        <div class="womanbox animate__animated animate__fadeInLeft">
          <img class="woman-img" @load="handleLoad" src="/src/img/woman_shampoo.png" alt="" />
        </div>
      </div>
    </div>
    <div class="banner-shampoo-box">
      <div class="shampoo-can1">
        <img
          src="/src/img/shampoo_can1.png"
          @load="handleLoad"
          class="w-100 h-100"
          alt="shampoo_can1"
        />
      </div>
      <div class="shampoo-can2">
        <img
          src="/src/img/shampoo_can2.png"
          @load="handleLoad"
          class="w-100 h-100"
          alt="shampoo_can1"
        />
      </div>
      <div class="shampoo-can3">
        <img
          src="/src/img/shampoo_can3.png"
          @load="handleLoad"
          class="w-100 h-100"
          alt="shampoo_can1"
        />
      </div>
    </div>
    <!-- <img src="https://picsum.photos/800/400?random=1" @load="handleLoad" /> -->

    <div class="can-shadow1"><div class="circle-grad"></div></div>
    <div class="can-shadow2"><div class="circle-grad"></div></div>
    <div class="can-shadow3"><div class="circle-grad"></div></div>
    <div class="titlebox">
      <h1 class="title">沁入内心</h1>
    </div>
    <div class="titlebox2">
      <p class="title2">最信任的洗髮乳</p>
    </div>
    <div class="titlebox3">
      <p>
        還在為髮質問題煩惱嗎？<br />我們擁有針對各種髮質的洗髮精<br />均為天然植物精萃<br />您一定可以從中找到適合您的洗髮精<br />讓您靠近大自然之餘也能好好保養頭髮
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const loading = ref(true)
const totalImages = 5
const loadedImages = ref(0)
function handleLoad() {
  loadedImages.value++
  if (loadedImages.value === totalImages) {
    // loading.value = false
    console.log('圖片載入好')
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;700;900&display=swap');
.mybanner {
  max-width: 100%;
  height: 750px;
  background-image: url(/src/img/banner_2.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: rgb(233, 241, 235);
}

.mask {
  max-width: 100%;
  height: 750px;
  mask-image: url(/src/img/banner_2.png);
  mask-position: right bottom;
}
.womanbox {
  position: absolute;
  top: 100px;
  right: 100px;
  z-index: 5;
  width: 650px;
  height: 650px;
}
.woman-img {
  max-width: 100%;
  max-height: 100%;
}

.banner-shampoo-box {
  position: absolute;
  top: 0;
}

.shampoo-can1 {
  position: absolute;
  z-index: 10;
  top: 200px;
  left: 150px;
  width: 180px;
  height: 500px;
}

.shampoo-can2 {
  position: absolute;
  z-index: 9;
  top: 280px;
  left: 300px;
  width: 130px;
  height: 390px;
}

.shampoo-can3 {
  position: absolute;
  z-index: 8;
  top: 310px;
  left: 430px;
  width: 110px;
  height: 320px;
}

.can-shadow1 {
  position: absolute;
  z-index: 7;
  top: 665px;
  left: 92px;
  width: 300px;
  height: 50px;
}

.can-shadow2 {
  position: absolute;
  z-index: 7;
  top: 650px;
  left: 262px;
  width: 200px;
  height: 33px;
}

.can-shadow3 {
  position: absolute;
  z-index: 7;
  top: 615px;
  left: 412px;
  width: 150px;
  height: 25px;
}

.circle-grad {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-clip: border-box;
  background: radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 60%);
}

.titlebox {
  position: absolute;
  z-index: 7;
  top: 180px;
  left: 400px;
  font-family: 'Zen Old Mincho', serif;
  font-weight: 900;
}

.title {
  font-size: 100px;
  opacity: 0.8;
  background: linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, rgba(255, 255, 255, 0) 100%);
  background-clip: text; /* 背景裁切到文字 */
  -webkit-text-fill-color: transparent; /* 文字本身透明 */
}
.titlebox2 {
  position: absolute;
  z-index: 7;
  top: 300px;
  left: 600px;
  font-family: 'Zen Old Mincho', serif;
  font-weight: 900;
}

.titlebox3 {
  position: absolute;
  z-index: 7;
  top: 350px;
  left: 602px;
  font-family: 'Zen Old Mincho', serif;
  font-weight: 900;
}

.title2 {
  color: rgb(5, 5, 5);
  opacity: 0.5;
  font-size: 30px;
  font-weight: 700;
}

@media (max-width: 1400px) {
  .mybanner {
    height: 700px;
  }
  .mask {
    height: 700px;
  }
  .womanbox {
    top: 100px;
    width: 600px;
    height: 600px;
    right: 10px;
  }

  .banner-shampoo-box {
    left: -60px;
  }
}
</style>

<style>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
