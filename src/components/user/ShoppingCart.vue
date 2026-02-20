<template>
  <div>
    <div class="cart-box"><div class="triangle"></div></div>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()
</script>
<style scoped>
.cart-box {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #fff;
  transform: translate(-136px, 15px);
}

.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid white;
  position: absolute;
  top: -14px;
  right: 22px;
}
</style>
