<template>
  <div class="container area-award mb-0 mb-sm-5">
    <div class="award-content">
      <div class="row gx-3 gx-sm-5 gx-xxl-6 justify-content-center">
        <div class="col-12 col-sm-6 col-lg-4 d-flex d-sm-block justify-content-center">
          <div class="award-bg position-relative" ref="award">
            <div class="royal" :class="{ 'royal-animation': show }"></div>
            <div class="circle"></div>
            <div class="position-absolute">
              <div class="leaf leaf-1" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-2" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-3" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-4" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-5" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-6" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-7" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-8" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-9" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-10" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-11" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-12" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-13" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-14" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-15" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-16" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-17" :class="{ 'leaf-animation': show }"></div>
            </div>
            <div class="position-absolute leaf-mirror">
              <div class="leaf leaf-1" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-2" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-3" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-4" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-5" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-6" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-7" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-8" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-9" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-10" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-11" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-12" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-13" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-14" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-15" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-16" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-17" :class="{ 'leaf-animation': show }"></div>
            </div>
            <div>
              <p class="award-t1-1" :class="{ 'text-animation': show }">95%</p>
              <p class="award-t1-2" :class="{ 'text-animation': show }">高回購率</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 d-flex d-sm-block justify-content-center">
          <div class="award-bg">
            <div class="royal" :class="{ 'royal-animation': show }"></div>
            <div class="circle"></div>
            <div class="position-absolute">
              <div class="leaf leaf-1" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-2" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-3" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-4" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-5" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-6" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-7" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-8" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-9" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-10" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-11" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-12" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-13" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-14" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-15" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-16" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-17" :class="{ 'leaf-animation': show }"></div>
            </div>
            <div class="position-absolute leaf-mirror">
              <div class="leaf leaf-1" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-2" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-3" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-4" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-5" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-6" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-7" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-8" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-9" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-10" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-11" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-12" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-13" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-14" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-15" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-16" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-17" :class="{ 'leaf-animation': show }"></div>
            </div>
            <div>
              <p class="award-t2-1" :class="{ 'text-animation': show }">榮獲O國<br />美妝大賞</p>
              <p class="award-t2-2 text-center" :class="{ 'text-animation': show }">
                <span class="award-t1-1">77</span>冠
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 d-flex d-sm-block justify-content-center">
          <div class="award-bg">
            <div class="royal" :class="{ 'royal-animation': show }"></div>
            <div class="circle"></div>
            <div class="position-absolute">
              <div class="leaf leaf-1" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-2" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-3" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-4" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-5" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-6" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-7" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-8" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-9" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-10" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-11" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-12" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-13" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-14" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-15" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-16" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-17" :class="{ 'leaf-animation': show }"></div>
            </div>
            <div class="position-absolute leaf-mirror">
              <div class="leaf leaf-1" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-2" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-3" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-4" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-5" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-6" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-7" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-8" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-9" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-10" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-11" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-12" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-13" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-14" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-15" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-16" :class="{ 'leaf-animation': show }"></div>
              <div class="leaf leaf-17" :class="{ 'leaf-animation': show }"></div>
            </div>
            <div>
              <p class="award-t3-1 text-center" :class="{ 'text-animation': show }">
                AriBudA<br />髮品類別
              </p>
              <p class="award-t3-2" :class="{ 'text-animation': show }">第一名</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const award = ref(null)
const show = ref(false)
let observer

onMounted(() => {
  //滾動偵測
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        show.value = true
      }
      // else {
      //   show.value = false
      // }
    },
    //滑到20%觸發
    { threshold: 0.4 },
  )
  observer.observe(award.value)
})
</script>
<style scoped>
.award-bg {
  position: relative;
  aspect-ratio: 1 / 1;
  /* background-image: url('@/img/award_stamp.png'); */
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  transform: scale(1);
}

.award-content {
  padding: 0px 48px;
}

.royal {
  position: absolute;
  width: 140px;
  height: 74px;
  background-image: url('@/img/award_stamp_royal.png');
  transform: scale(0);
}

.royal-animation {
  animation: showRoyal 0.5s ease forwards;
}

.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(114, 135, 118);
  position: absolute;
  transform: translateY(270px);
}

.leaf-mirror {
  transform: scaleX(-1);
}

.leaf {
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: rgb(114, 135, 118); /* 葉子顏色 */
  border-radius: 0 90% 0 100%; /* 圓角設定產生葉片弧度 */
  transform-origin: top left;
  transform: translate(var(--x), var(--y)) rotate(var(--angle)) scale(0);
}

.leaf-animation {
  animation: showItem 0.2s ease forwards;
}

.leaf-1 {
  --x: 15px;
  --y: 274px;
  --angle: -84deg;
  animation-delay: 0s;
}

.leaf-2 {
  --x: 11px;
  --y: 284px;
  --angle: -31deg;
  animation-delay: 0s;
}

.leaf-3 {
  --x: 59px;
  --y: 265px;
  --angle: -120deg;
  animation-delay: 0.05s;
}

.leaf-4 {
  --x: 42px;
  --y: 275px;
  --angle: -36deg;
  animation-delay: 0.05s;
}

.leaf-5 {
  --x: 88px;
  --y: 248px;
  --angle: -135deg;
  animation-delay: 0.15s;
}

.leaf-6 {
  --x: 73px;
  --y: 264px;
  --angle: -53deg;
  animation-delay: 0.1s;
}

.leaf-7 {
  --x: 97px;
  --y: 246px;
  --angle: -61deg;
  animation-delay: 0.15s;
}

.leaf-8 {
  --x: 109px;
  --y: 228px;
  --angle: -142deg;
  animation-delay: 0.2s;
}

.leaf-9 {
  --x: 118px;
  --y: 225px;
  --angle: -75deg;
  animation-delay: 0.2s;
}

.leaf-10 {
  --x: 121px;
  --y: 195px;
  --angle: -149deg;
  animation-delay: 0.25s;
}

.leaf-11 {
  --x: 126px;
  --y: 200px;
  --angle: -80deg;
  animation-delay: 0.25s;
}

.leaf-12 {
  --x: 134px;
  --y: 175px;
  --angle: -101deg;
  animation-delay: 0.3s;
}

.leaf-13 {
  --x: 129px;
  --y: 161px;
  --angle: -161deg;
  animation-delay: 0.35s;
}

.leaf-14 {
  --x: 135px;
  --y: 143px;
  --angle: -122deg;
  animation-delay: 0.35s;
}

.leaf-15 {
  --x: 122px;
  --y: 121px;
  --angle: -181deg;
  animation-delay: 0.4s;
}

.leaf-16 {
  --x: 126px;
  --y: 108px;
  --angle: -134deg;
  animation-delay: 0.4s;
}

.leaf-17 {
  --x: 113px;
  --y: 90px;
  --angle: -172deg;
  animation-delay: 0.4s;
}

.text-animation {
  animation: showText 0.5s ease forwards;
}

.award-t1-2,
.award-t2-2,
.award-t3-2 {
  animation-delay: 0.1s;
}

.award-t1-1,
.award-t1-2,
.award-t2-1,
.award-t2-2,
.award-t3-1,
.award-t3-2 {
  color: rgb(85, 103, 88);
  transform: scale(0);
}

.award-t1-1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 70px;
  margin-top: 85px;
  margin-bottom: -20px;
}

.award-t1-2 {
  font-size: 36px;
}

.award-t2-1 {
  line-height: 40px;
  font-size: 32px;
  margin-top: 84px;
  margin-bottom: -14px;
}

.award-t2-2 {
  font-size: 36px;
  margin-bottom: 0px;
}

.award-t3-1 {
  font-size: 28px;
  margin-top: 80px;
  margin-bottom: -12px;
}

.award-t3-2 {
  font-weight: bold;
  font-size: 54px;
}

@keyframes showItem {
  from {
    transform: translate(var(--x), var(--y)) rotate(var(--angle)) scale(0);
  }

  to {
    transform: translate(var(--x), var(--y)) rotate(var(--angle)) scale(1);
  }
}

@keyframes showText {
  0% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes showRoyal {
  0% {
    transform: scale(0);
  }
  95% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 1200px) {
  .award-bg {
    transform: scale(0.86);
  }
  .award-content {
    padding: 0px;
  }
}
@media (max-width: 992px) {
  .award-bg {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .award-bg {
    transform: scale(0.8);
    aspect-ratio: auto;
  }
}

@media (max-width: 576px) {
  .award-bg {
    transform: scale(1);
    width: 350px;
    height: 350px;
  }
}
@media (max-width: 380px) {
  .award-bg {
    transform: scale(0.8);
    width: 350px;
    height: 350px;
  }
}
</style>
