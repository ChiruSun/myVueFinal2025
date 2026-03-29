<template>
  <div class="nav-space">
    <div class="d-flex justify-content-center">
      <sadSvg class="sad me-4"></sadSvg>
      <div class="d-flex flex-column justify-content-center main-color">
        <p class="fs-2 fw-bold">很抱歉，搜尋的商品不存在</p>
        <p class="fs-4">請返回 <RouterLink to="/">首頁</RouterLink></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import sadSvg from '@/assets/sad.svg'
</script>
<style scoped>
.nav-space {
  padding-top: 150px;
  height: 100vh;
}
.sad {
  width: 200px;
  height: 200px;
  fill: rgb(85, 103, 88);
}
.main-color {
  color: rgb(85, 103, 88);
}
</style>
