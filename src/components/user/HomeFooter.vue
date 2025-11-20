<template>
  <div class="bg-white p-5 rounded-3 footerMask">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="p-3">
          <div class="footerLOGO"></div>
        </div>
        <div class="d-flex">
          <div class="footer-link">
            <p class="fw-bold mb-4">網站地圖</p>
            <RouterLink to="/" class="nav-link mb-3" active-class="active">首頁</RouterLink>
            <RouterLink to="/products" class="nav-link mb-3" active-class="active"
              >產品列表</RouterLink
            >
            <RouterLink to="/story" class="nav-link mb-3" active-class="active"
              >緣起故事</RouterLink
            >
            <RouterLink to="/connect_us" class="nav-link" active-class="active"
              >聯絡我們</RouterLink
            >
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
<style scoped>
.footerMask {
  mask-image: url(/src/img/banner_mask_footer.png);
  max-width: 100%;
  height: 550px;
  mask-position: right top;
}

.footerLOGO {
  height: 120px;
  width: 180px;
  background-size: contain;
  background-image: url('@/img/HINheart_LOGO2.png');
  background-repeat: no-repeat;
  margin-top: 60px;
}

.footer-link {
  margin-top: 250px;
  width: 200px;
}
.footer-contact {
  margin-top: 250px;
  width: 200px;
}
</style>
