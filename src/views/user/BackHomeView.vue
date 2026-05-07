<template>
  <div class="all-page">
    <div class="main">
      <div>
        <h1 class="project-main-font text-center fs-1 fw-bold mb-3">結帳完成</h1>
        <p class="fs-4">可以返回首頁或繼續購物</p>
        <div class="d-flex justify-content-center">
          <RouterLink to="/" class="fs-4 me-4 link-color">返回首頁</RouterLink>
          <RouterLink to="/products" class="fs-4 link-color">繼續購物</RouterLink>
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
}

.main {
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}

.link-color {
  color: rgb(46, 93, 94);
}
</style>
