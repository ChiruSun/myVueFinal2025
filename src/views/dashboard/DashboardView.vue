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
    await verifyLogin()
    console.log('有進dashs')
  } catch (error) {
    emitter.emit('toast', {
      message: error.response.data.message,
      type: 'danger',
    })
    console.error(error)
    router.push('/login')
  }
}
verify()
</script>
