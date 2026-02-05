<template>
  <div class="container mb-5 overflow-hidden">
    <p class="h1 fw-bold text-center mb-4">我們的堅持</p>
    <div class="container">
      <div data-aos="fade-right" data-aos-duration="700" class="d-flex row mb-5">
        <div class="col-12 col-md-7 order-2 order-md-1 introduceText">
          <div class="d-flex h-100 align-items-center">
            <p class="fs-5">
              製造過程嚴格把關，擁有XXX以及歐洲XXX檢驗報告，安全製造保證
              我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的
            </p>
          </div>
        </div>
        <div class="col-12 col-md-5 order-1 order-md-2 introduceImg my-i-img1"></div>
      </div>
      <div data-aos="fade-left" data-aos-duration="700" class="d-flex row mb-5">
        <div class="col-12 col-md-5 introduceImg my-i-img2"></div>
        <div class="col-12 col-md-7 introduceText">
          <div class="d-flex h-100 align-items-center">
            <p class="fs-5">
              擁有從植物萃取的精華，天然無化學
              我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="700" class="d-flex row mb-5">
        <div class="col-12 col-md-7 order-2 order-md-1 introduceText">
          <div class="d-flex h-100 align-items-center">
            <p class="fs-5">
              和您的閨密擁有一頭亮麗的秀髮
              我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊我是會淡入的方塊
            </p>
          </div>
        </div>
        <div class="col-12 col-md-5 order-1 order-md-2 introduceImg my-i-img3"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.introduceImg {
  height: 300px;
  background-color: lightcoral;
}

.my-i-img1 {
  background-image: url('@/img/laboratory.jpg');
  background-position: center center;
  background-size: cover;
  border-radius: 15px;
}

.my-i-img2 {
  background-image: url('@/img/extraction.jpg');
  background-position: center center;
  background-size: cover;
  border-radius: 15px;
}

.my-i-img3 {
  background-image: url('@/img/beauty_womans.jpg');
  background-position: center -50px;
  background-size: 800px 580px;
  border-radius: 15px;
}

.introduceText {
  padding: 80px;
}

@media (max-width: 992px) {
  .introduceText {
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .introduceText {
    padding: 24px;
  }
}
</style>
