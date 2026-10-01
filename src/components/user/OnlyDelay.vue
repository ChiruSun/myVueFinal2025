<template>
  <div></div>
</template>
<script setup>
//模擬非同步延遲
const aaa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ msg: '資料已載入' })
    }, 800)
  })
}
await aaa()
</script>
