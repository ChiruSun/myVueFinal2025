<template>
  <div class="mybanner">
    <div>
      <div>
        <div class="mask">
          <div class="row woman-padding">
            <div class="col-7">
              <!-- 虛擬排版區塊 -->
            </div>
            <div class="col-5 asp-woman">
              <div class="womanbox">
                <img class="img-fluid" src="/src/img/woman_shampoo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="shampoo-can1">
          <img src="/src/img/can_lavender.png" class="w-100 h-100" alt="shampoo_can1" />
        </div>
        <div class="shampoo-can2">
          <img src="/src/img/can_aloe_vera.png" class="w-100 h-100" alt="shampoo_can1" />
        </div>
        <div class="shampoo-can3">
          <img src="/src/img/can_rose.png" class="w-100 h-100" alt="shampoo_can1" />
        </div>
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
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;700;900&display=swap');
.mybanner {
  max-width: 100%;
  background-image: url(/src/img/banner_bg.png);
  background-color: rgb(233, 241, 235);
  background-size: cover;
  background-position: top left;
}

.mask {
  mask-image: url(/src/img/banner_bg.png);
  mask-size: cover;
  mask-position: top left;
}

.woman-padding {
  padding: 100px 80px 0;
}

.asp-woman {
  aspect-ratio: 1/1.057;
}

.womanbox {
  animation: moveWoman 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
}

.shampoo-can1 {
  position: absolute;
  z-index: 10;
  left: 150px;
  width: 180px;
  height: 500px;
  animation: can1Ani 0.8s cubic-bezier(0, 0, 0.2, 1) 0.2s both;
}

.shampoo-can2 {
  position: absolute;
  z-index: 9;
  left: 300px;
  width: 130px;
  height: 390px;
  animation: can2Ani 0.8s cubic-bezier(0, 0, 0.2, 1) 0.35s both;
}

.shampoo-can3 {
  position: absolute;
  z-index: 8;
  left: 430px;
  width: 110px;
  height: 320px;
  animation: can3Ani 0.8s cubic-bezier(0, 0, 0.2, 1) 0.4s both;
}

.can-shadow1 {
  position: absolute;
  z-index: 7;
  top: 665px;
  left: 92px;
  width: 300px;
  height: 50px;
  animation: shadowScale 0.8s 0.2s both;
}

.can-shadow2 {
  position: absolute;
  z-index: 7;
  top: 650px;
  left: 262px;
  width: 200px;
  height: 33px;
  animation: shadowScale 0.8s 0.35s both;
}

.can-shadow3 {
  position: absolute;
  z-index: 7;
  top: 615px;
  left: 412px;
  width: 150px;
  height: 25px;
  animation: shadowScale 0.8s 0.4s both;
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

/* 預設動畫暫停 */
.animate {
  opacity: 0;
  animation-play-state: paused;
}

@media (max-width: 1400px) {
  .woman-padding {
    padding: 100px 10px 0;
  }
}

@media (max-width: 992px) {
  .womanbox {
    display: none;
  }
}

@keyframes moveWoman {
  from {
    transform: translateX(-150px); /* 從畫面外左邊進入 */
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes moveWoman2 {
  from {
    right: 70px; /* 從畫面外左邊進入 */
    opacity: 0;
  }
  to {
    right: 10px;
    opacity: 1;
  }
}

@keyframes can1Ani {
  from {
    top: 100px; /* 從畫面外左邊進入 */
    opacity: 0;
  }
  to {
    top: 200px;
    opacity: 1;
  }
}
@keyframes can2Ani {
  from {
    top: 200px; /* 從畫面外左邊進入 */
    opacity: 0;
  }
  to {
    top: 280px;
    opacity: 1;
  }
}
@keyframes can3Ani {
  from {
    top: 200px; /* 從畫面外左邊進入 */
    opacity: 0;
  }
  to {
    top: 310px;
    opacity: 1;
  }
}

@keyframes shadowScale {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
