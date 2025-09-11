<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">最終作業</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/dashboard/products" class="nav-link" active-class="active"
              >產品</RouterLink
            >
            <!-- <a class="nav-link active" href="#">產品</a> -->
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard/orders" class="nav-link" active-class="active"
              >訂單</RouterLink
            >
            <!-- <a class="nav-link" href="#">Link</a> -->
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard/coupon" class="nav-link" active-class="active"
              >優惠劵</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard/test" class="nav-link" active-class="active"
              >測試</RouterLink
            >
          </li>
        </ul>
        <button
          type="button"
          class="btn btn-secondary px-3"
          @click.prevent="logout"
          :disabled="btnDisable"
        >
          登出
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import emitter from '@/emitter'
const router = useRouter()

const btnDisable = ref(false)

async function logout() {
  btnDisable.value = true
  try {
    const resp = await axios.post(`${import.meta.env.VITE_API_URL}v2/logout`, {})
    emitter.emit('toast', {
      message: resp.data.message,
    })
    btnDisable.value = false
    router.push('/login')
  } catch (error) {
    console.log('登出錯誤訊息')
    console.log(error)
  }
}
</script>
