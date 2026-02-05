<template>
  <div class="mybanner">
    <div>
      <div>
        <div class="mask">
          <div class="container-fluid">
            <div class="row justify-content-end">
              <div class="col-5 asp-woman">
                <div class="womanbox woman-padding">
                  <img class="img-fluid" src="/src/img/woman_shampoo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="champoo-cans position-absolute">
          <div class="cans shampoo-can1">
            <img src="/src/img/can_lavender.png" class="img-fluid" alt="shampoo_can1" />
          </div>
          <div class="cans shampoo-can2">
            <img src="/src/img/can_aloe_vera.png" class="img-fluid" alt="shampoo_can1" />
          </div>
          <div class="cans shampoo-can3">
            <img src="/src/img/can_rose.png" class="img-fluid" alt="shampoo_can1" />
          </div>
          <div class="can-shadow1"><div class="circle-grad"></div></div>
          <div class="can-shadow2"><div class="circle-grad"></div></div>
          <div class="can-shadow3"><div class="circle-grad"></div></div>
        </div>
        <div class="banner-text position-absolute">
          <h1 class="title">沁入内心</h1>
          <div class="my-rwd-title">
            <p class="title2">最信任的洗髮乳</p>
            <p class="title3">
              還在為髮質問題煩惱嗎？<br />我們擁有針對各種髮質的洗髮精<br />均為天然植物精萃<br />您一定可以從中找到適合您的洗髮精<br />讓您靠近大自然之餘也能好好保養頭髮
            </p>
            <p class="title3-2">
              我們擁有針對各種髮質的洗髮精<br />您一定可以從中找到適合您的洗髮精<br />
            </p>
            <p class="title3-3">我們擁有<br />針對各種髮質的<br class="mobile-break" />洗髮精</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mybanner {
  max-width: 100%;
  background-image: url(/src/img/banner_bg.png);
  background-color: rgb(233, 241, 235);
  background-size: cover;
  background-position: top left;
  margin-bottom: 16px;
}

.mask {
  mask-image: url(/src/img/banner_bg.png);
  mask-size: cover;
  mask-position: top left;
}

.woman-padding {
  padding-top: 100px;
  padding-right: 80px;
}

.asp-woman {
  aspect-ratio: 1/1.057;
}

.womanbox {
  animation: moveWoman 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
}

.champoo-cans {
  top: 180px;
  left: 180px;
  width: 430px;
  display: grid;
}

.cans {
  grid-area: 1 / 1;
}

.shampoo-can1 {
  z-index: 10;
  width: 45%;
  animation: can1Ani 0.8s cubic-bezier(0, 0, 0.2, 1) 0.2s both;
}

.shampoo-can2 {
  position: absolute;
  z-index: 9;
  left: 35%;
  width: 35%;
  animation: can2Ani 0.8s cubic-bezier(0, 0, 0.2, 1) 0.35s both;
}

.shampoo-can3 {
  position: absolute;
  z-index: 8;
  left: 70%;
  width: 25%;
  animation: can3Ani 0.8s cubic-bezier(0, 0, 0.2, 1) 0.4s both;
}

.can-shadow1 {
  position: absolute;
  z-index: 7;
  top: 93%;
  left: -5%;
  width: 55%;
  aspect-ratio: 4 / 1;
  animation: shadowScale 0.8s 0.2s both;
}

.can-shadow2 {
  position: absolute;
  z-index: 7;
  top: 89%;
  left: 32%;
  width: 40%;
  aspect-ratio: 4 / 1;
  animation: shadowScale 0.8s 0.35s both;
}

.can-shadow3 {
  position: absolute;
  z-index: 7;
  top: 88%;
  left: 67%;
  width: 30%;
  aspect-ratio: 4 / 1;
  animation: shadowScale 0.8s 0.4s both;
}

.circle-grad {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-clip: border-box;
  background: radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 60%);
}

.banner-text {
  top: 200px;
  left: 500px;
  z-index: 7;
  font-family: 'Zen Old Mincho', serif;
  font-weight: 900;
}

.title {
  font-size: clamp(16px, 7vw, 100px);
  opacity: 0.8;
  background: linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, rgba(255, 255, 255, 0) 100%);
  /* 背景裁切到文字 */
  background-clip: text;
  /* 文字本身透明 */
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.title2 {
  color: rgb(5, 5, 5);
  opacity: 0.5;
  font-size: 30px;
  font-weight: 700;
}

.title3 {
  margin-left: 130px;
}

.title3-2 {
  display: none;
}

.title3-3 {
  display: none;
}

.mobile-break {
  display: none;
}

/* 預設動畫暫停 */
.animate {
  opacity: 0;
  animation-play-state: paused;
}

/* RWD */

@media (max-width: 1400px) {
  .mybanner {
    margin-bottom: calc(250px - 17vw);
  }
  .woman-padding {
    padding-top: 100px;
  }

  .champoo-cans {
    top: 150px;
    left: 100px;
    width: 30%;
  }
  .banner-text {
    top: 150px;
    left: 35%;
  }
  .title3 {
    width: 65%;
    margin-left: 20%;
  }
}

@media (max-width: 992px) {
  .mybanner {
    margin-bottom: 50px;
  }

  .asp-woman {
    aspect-ratio: 1/1.3;
  }
  .womanbox {
    display: none;
  }
  .champoo-cans {
    top: 130px;
    left: 24px;
    width: 35%;
  }
  .banner-text {
    top: 100px;
  }
  .title {
    font-size: clamp(16px, 13vw, 70px);
  }
  .title2 {
    text-wrap: nowrap;
  }
  .my-rwd-title {
    display: flex;
  }
  .title3 {
    text-wrap: nowrap;
    margin-left: 2vw;
  }
}

@media (max-width: 768px) {
  .mybanner {
    background-position: center center;
  }
  .asp-woman {
    aspect-ratio: 1/1.5;
  }

  .title2 {
    display: none;
  }
  .title3 {
    display: none;
  }

  .title3-2 {
    display: block;
    margin-left: 36px;
    margin-right: 36px;
  }
}

@media (max-width: 576px) {
  .mybanner {
    margin-bottom: 0;
  }
  .asp-woman {
    aspect-ratio: 1/2;
  }

  .title {
    background: linear-gradient(to bottom, #7a57b4 0%, #4f3b67 70%, rgba(255, 255, 255, 0) 100%);
    background-clip: text;
  }
}

@media (max-width: 375px) {
  .mybanner {
    background-position: 70% bottom;
  }
  .asp-woman {
    aspect-ratio: 1/2.5;
  }

  .title {
    font-weight: 900;
  }
  .title3-2 {
    display: none;
  }
  .title3-3 {
    margin-left: 23%;
    margin-top: 0%;
    display: block;
    text-wrap: nowrap;
  }
  .mobile-break {
    display: inline;
  }
}

/* animation */
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

@keyframes can1Ani {
  from {
    transform: translateY(-30%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes can2Ani {
  from {
    transform: translateY(-8%);
    opacity: 0;
  }
  to {
    transform: translateY(22%);
    opacity: 1;
  }
}
@keyframes can3Ani {
  from {
    transform: translateY(30%);
    opacity: 0;
  }
  to {
    transform: translateY(65%);
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
