<template>
  <div class="container area-award mb-5">
    <div class="award-content">
      <div class="row gx-3 gx-sm-5 gx-xxl-6 justify-content-center">
        <div class="col-6 col-lg-4">
          <div class="award-bg">
            <div>
              <p class="award-t1-1 text-center">95%</p>
              <p class="award-t1-2">高回購率</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-4">
          <div class="award-bg">
            <div>
              <p class="award-t2-1">榮獲O國<br />美妝大賞</p>
              <p class="award-t2-2 text-center"><span class="award-t1-1">77</span>冠</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-4">
          <div class="award-bg">
            <div>
              <p class="award-t3-1 text-center">AriBudA<br />髮品類別</p>
              <p class="award-t3-2">第一名</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.award-bg {
  aspect-ratio: 1 / 1;
  background-image: url('@/img/award_stamp.png');
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}

.award-content {
  padding: 0px 48px;
}

.award-t1-1 {
  color: rgb(85, 103, 88);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 70px;
  margin-top: 85px;
  margin-bottom: -20px;
}

.award-t1-2 {
  color: rgb(85, 103, 88);
  font-size: 36px;
}

.award-t2-1 {
  color: rgb(85, 103, 88);
  line-height: 40px;
  font-size: 32px;
  margin-top: 84px;
  margin-bottom: -14px;
}

.award-t2-2 {
  color: rgb(85, 103, 88);
  font-size: 36px;
  margin-bottom: 0px;
}

.award-t3-1 {
  color: rgb(85, 103, 88);
  font-size: 28px;
  margin-top: 80px;
  margin-bottom: -12px;
}

.award-t3-2 {
  color: rgb(85, 103, 88);
  font-weight: bold;
  font-size: 54px;
}

.area3 {
  width: 100%;
  height: 1000px;
  background-image: url('@/img/HomeArea3.png');
}

@media (max-width: 1400px) {
  .award-t1-1 {
    margin-top: 69px;
  }
  .award-t2-1 {
    margin-top: 63px;
  }
  .award-t3-1 {
    margin-top: 57px;
  }
}

@media (max-width: 1200px) {
  .award-content {
    padding: 0px;
  }
  .award-t1-1 {
    font-size: 56px;
  }
  .award-t1-2 {
    font-size: 32px;
  }
  .award-t3-1 {
    font-size: 24px;
  }
  .award-t3-2 {
    font-size: 48px;
  }
}
@media (max-width: 992px) {
  .award-t1-1 {
    margin-top: 92px;
    margin-bottom: -15px;
  }

  .award-t2-1 {
    font-size: 32px;
    margin-top: 84px;
  }
  .award-t3-1 {
    margin-top: 80px;
    margin-bottom: -8px;
  }
}

@media (max-width: 768px) {
  .award-t1-1 {
    font-size: 48px;
    margin-top: 59px;
  }
  .award-t1-2 {
    font-size: 26px;
  }
  .award-t2-1 {
    font-size: 24px;
    line-height: 30px;
    margin-top: 58px;
    margin-bottom: -10px;
  }
  .award-t3-1 {
    line-height: 30px;
    margin-top: 55px;
  }
  .award-t3-2 {
    font-size: 36px;
  }
}

@media (max-width: 576px) {
  .award-t1-1 {
    font-size: 10vw;
    margin-top: 10vw;
    margin-bottom: -10px;
  }
  .award-t1-2 {
    font-size: 5vw;
  }
  .award-t2-1 {
    font-size: 5vw;
    line-height: 6vw;
    margin-top: 10vw;
  }
  .award-t2-2 {
    font-size: 5vw;
  }
  .award-t3-1 {
    font-size: 5vw;
    margin-top: 8vw;
    line-height: 7vw;
    margin-bottom: -7px;
  }
  .award-t3-2 {
    font-size: 7vw;
  }
}
</style>
