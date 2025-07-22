<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="loginSubmit">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email位址</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="loginPostData.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">密碼 </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="loginPostData.password"
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="btnDisable">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import emitter from '@/emitter'

const loginPostData = ref({ username: 'cycfup67@gmail.com', password: 'cyc20254' })
const router = useRouter()

const btnDisable = ref(false)

//登入資訊發送給API
async function loginSubmit() {
  btnDisable.value = true
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}v2/admin/signin`,
      loginPostData.value,
    )
    //拿出token和有效日期放入cookie
    const { token } = res.data
    const expireTime = new Date(res.data.expired).toUTCString()
    document.cookie = `hexVueCookie=${token}; expires=${expireTime}; path=/;`
    btnDisable.value = false
    router.push('/dashboard/products')
    emitter.emit('toast', {
      message: '登入成功',
    })
  } catch (error) {
    emitter.emit('toast', {
      message: '登入失敗，請重新登入',
      type: 'danger',
    })
  }
}
</script>
