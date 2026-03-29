<template>
  <div>
    <div class="cart-box-outside">
      <div class="cart-box">
        <div class="triangle"></div>
        <div v-if="cartStore.hasCart">
          <div class="pt-3 px-3"><p class="mb-0">購物車內容</p></div>

          <div class="limit-box overflow-auto">
            <div v-for="item in showList" :key="item.id">
              <div class="d-flex px-1 px-sm-3 py-3 border-bottom justify-content-between">
                <div class="d-flex">
                  <div class="productImg me-2">
                    <img :src="item.product.imageUrl" class="img-fluid" alt="" />
                  </div>
                  <div class="content-box me-sm-4">
                    <p>{{ item.product.content }}</p>
                    <div class="d-flex">
                      <ChangeQuantity
                        class="input-group-sm me-2"
                        :model-value="item.qty"
                        @api-change-qty="ApiQty(item.id, $event)"
                        input-disabled
                      ></ChangeQuantity>
                      <p class="mb-0 fw-bold text-danger">
                        NT$ <span class="fs-5">{{ item.total }}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center">
                  <a href="#" @click.prevent="delProduct(item.id)" class="fs-4 text-secondary"
                    ><i class="bi bi-trash"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex p-3">
            <RouterLink :to="{ name: 'cart' }" class="btn btn-checkout w-100">結帳去</RouterLink>
          </div>
        </div>
        <div v-if="!cartStore.hasCart">
          <div class="d-flex justify-content-center p-3">
            <p class="fs-5 mb-0">購物車目前沒有商品</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 使用者點外面區域 -->
    <div class="outside-area" @click="clickOutside"></div>
    <SectionLoading v-if="loading"></SectionLoading>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import SectionLoading from '@/components/SectionLoading.vue'
import ChangeQuantity from '@/components/user/ChangeQuantity.vue'

const emit = defineEmits(['clickOutside'])
const cartStore = useCartStore()

const loading = ref(false)
const showList = computed(() => {
  return [...cartStore.cartItems].reverse()
})

async function delProduct(id) {
  loading.value = true
  await cartStore.delCart(id)
  await cartStore.getCart()
  loading.value = false
}

function clickOutside() {
  emit('clickOutside')
}

async function ApiQty(id, qty) {
  loading.value = true
  await cartStore.changeCartQty(id, qty)
  await cartStore.getCart()
  loading.value = false
}
</script>
<style scoped>
.cart-box {
  position: absolute;
  width: 385px;
  border: 1px solid rgb(162, 162, 162);
  background-color: #fff;
  transform: translate(-320px, 15px);
  z-index: 13;
}

.cart-box-outside {
  position: relative;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid rgb(162, 162, 162);
  position: absolute;
  top: -15px;
  right: 22px;
}

.limit-box {
  width: 100%;
  max-height: 400px;
}

.productImg {
  width: 80px;
  height: 80px;
  background-color: #979797;
}

.my-input-width {
  width: 95px;
}

.btn-checkout {
  color: #fff;
  background-color: rgb(99, 122, 102);
  font-weight: bold;
}

.btn-checkout:hover {
  background-color: rgb(82, 104, 85);
}

.outside-area {
  position: fixed;
  inset: 0;
  z-index: 12;
}

@media (max-width: 576px) {
  .cart-box {
    position: absolute;
    left: 0;
    width: 100%;
    border-left: 0;
    border-right: 0;
    transform: translate(0, 15px);
  }
  .cart-box-outside {
    position: static;
  }
  .triangle {
    right: 89px;
  }
}
</style>
