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
          @click.prevent="navLogout"
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
import { useRouter } from 'vue-router'
import emitter from '@/emitter'
import { logout } from '@/composable/axiosDashAPI'
const router = useRouter()

const btnDisable = ref(false)

async function navLogout() {
  btnDisable.value = true
  try {
    const resp = await logout()
    emitter.emit('toast', {
      message: resp.data.message,
    })
    router.push('/login')
  } catch (error) {
    emitter.emit('toast', {
      message: error.response.data.message,
      type: 'danger',
    })
  } finally {
    btnDisable.value = false
  }
}
</script>
