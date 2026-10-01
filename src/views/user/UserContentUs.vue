<template>
  <div class="all-page bg-story">
    <div class="main">
      <div class="container">
        <div class="d-flex flex-column align-items-center">
          <h1 class="project-main-font project-main-color-black fw-bold mb-4">聯絡我們</h1>
          <div class="fs-5">
            <p><i class="bi bi-telephone-fill me-2"></i>02-XXX-XXXX</p>
            <p><i class="bi bi-phone-fill me-2"></i>09XXXXXXXX</p>
            <p><i class="bi bi-envelope-fill me-2"></i>HTNheart@XXXX.com</p>
          </div>
        </div>
      </div>
    </div>

    <HomeFooter></HomeFooter>
  </div>
</template>
<script setup>
import HomeFooter from '@/components/user/HomeFooter.vue'
</script>
<style scoped>
.all-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  padding-top: 130px;
}
</style>
