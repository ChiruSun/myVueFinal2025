<script setup>
import { ref } from 'vue'

// 模擬 async 資料
const data = ref(null)
const aaa = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ msg: '資料已載入' })
  }, 100)
})

async function gogogo() {
  const resp = await aaa
  console.log('非同步完成', resp)
}

gogogo()

// 延遲顯示控制
const showContent = ref(false)
function onResolve() {
  setTimeout(() => {
    showContent.value = true
    console.log('resolve已啟動')
  }, 500) // 延遲 0.5 秒再切換
}
</script>

<template>
  <Suspense @resolve="onResolve">
    <template #default>
      <transition name="fade">
        <div v-if="showContent">
          <h2>{{ data?.msg }}</h2>
        </div>
      </transition>
    </template>

    <template #fallback>
      <div class="loading">載入中動畫...</div>
    </template>
  </Suspense>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
