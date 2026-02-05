<template>
  <div class="footerBG">
    <div class="container pb-5 pt-5 p-lg-5">
      <div
        class="d-flex justify-content-between flex-column flex-md-row align-items-center align-items-md-stretch"
      >
        <div :class="{ 'home-style': isHome }">
          <div class="footerLOGO"></div>
        </div>
        <div class="d-flex flex-column flex-sm-row">
          <div class="footer-link">
            <p class="fw-bold mb-4">網站地圖</p>
            <div class="d-flex flex-sm-column flex-wrap">
              <RouterLink to="/" class="nav-link mb-3" active-class="active">首頁</RouterLink>
              <RouterLink to="/products" class="nav-link mb-3" active-class="active"
                >產品列表</RouterLink
              >
              <RouterLink to="/story" class="nav-link mb-3" active-class="active"
                >緣起故事</RouterLink
              >
              <RouterLink to="/connect_us" class="nav-link mb-3" active-class="active"
                >聯絡我們</RouterLink
              >
            </div>
          </div>
          <div class="footer-contact">
            <p class="fw-bold mb-4">聯絡我們</p>
            <p><i class="bi bi-telephone-fill me-2"></i>02-XXX-XXXX</p>
            <p><i class="bi bi-phone-fill me-2"></i>09XXXXXXXX</p>
            <p><i class="bi bi-envelope-fill me-2"></i>HTNheart@XXXX.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  isHome: {
    type: Boolean,
    default: false,
  },
})
</script>
<style scoped>
.footerBG {
  position: relative;
  background-color: #fff;
}

.footerLOGO {
  position: relative;
  height: 120px;
  width: 180px;
  background-size: contain;
  background-image: url('@/img/HINheart_LOGO2.png');
  background-repeat: no-repeat;
}

.home-style .footerLOGO {
  top: -160px;
}

.footer-link {
  margin-top: 50px;
  width: 200px;
}
.footer-contact {
  margin-top: 50px;
  width: 200px;
}

@media (max-width: 1400px) {
  .home-style .footerLOGO {
    top: -60px;
  }
}

@media (max-width: 1200px) {
  .home-style .footerLOGO {
    top: -30px;
  }
}

@media (max-width: 768px) {
  .footerLOGO {
    top: 0px;
    height: 100px;
    width: 150px;
    margin-bottom: 30px;
  }
}
@media (max-width: 576px) {
  .footerLOGO {
    height: 90px;
    width: 135px;
  }
  .footer-link {
    width: 200px;
  }
  .footer-contact {
    width: 200px;
  }
  .nav-link {
    width: 50%;
  }
}
</style>
