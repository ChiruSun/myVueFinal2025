<template>
  <div>
    <navbar />
    <Router-view />
  </div>
</template>
<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import navbar from '@/components/NavbarDash.vue'
import emitter from '@/emitter'

const router = useRouter()

//取出token並放入全域的發送header
const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexVueCookie\s*\=\s*([^;]*).*$)|^.*$/, '$1')
axios.defaults.headers.common['Authorization'] = token

//驗證token
async function verifyLogin() {
  try {
    const resp = await axios.post(`${import.meta.env.VITE_API_URL}v2/api/user/check`)
    // console.log('進入dash驗證通過', resp)
  } catch (error) {
    emitter.emit('toast', {
      message: error.response.data.message,
      type: 'danger',
    })
    console.log(error)
    router.push('/login')
  }
}
verifyLogin()
</script>
