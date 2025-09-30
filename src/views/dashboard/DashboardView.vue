<template>
  <div>
    <navbar />
    <Router-view />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { verifyLogin } from '@/composable/axiosDashAPI'
import navbar from '@/components/dashboard/NavbarDash.vue'
import emitter from '@/emitter'

const router = useRouter()

//驗證token
async function verify() {
  try {
    const resp = await verifyLogin()
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
verify()
</script>
