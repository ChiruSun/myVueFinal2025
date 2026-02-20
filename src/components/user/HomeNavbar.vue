<template>
  <nav class="navbar navbar-expand-lg w-100 pb-0 my-nav" :class="{ 'scrolled-nav ': isScrolled }">
    <div class="container-xxl">
      <RouterLink
        to="/"
        class="navbar-brand ms-0 ms-sm-3 ms-md-5"
        active-class=""
        exact-active-class=""
      >
        <img
          src="/src/img/HINheart_LOGO2.png"
          alt=""
          class="logo-img"
          :class="{ 'scrolled-logo': isScrolled }"
        />
      </RouterLink>
      <div class="d-flex">
        <button class="shopping-cart-btn cart-before me-3"><i class="bi bi-cart"></i></button>
        <button
          class="navbar-toggler my-nav-toggler"
          type="button"
          @click="toggleMenu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse justify-content-end" :class="{ show: isOpen }">
        <ul class="navbar-nav mb-0">
          <li class="nav-item my-nav-item-start">
            <RouterLink to="/products" class="nav-link px-4 fw-bold" active-class="active"
              >產品列表</RouterLink
            >
          </li>
          <li class="nav-item my-nav-item">
            <RouterLink to="/story" class="nav-link px-4 fw-bold" active-class="active"
              >緣起故事</RouterLink
            >
          </li>
          <li class="nav-item my-nav-item-end">
            <RouterLink to="/connect_us" class="nav-link px-4 fw-bold" active-class="active"
              >聯絡我們</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="cart-after">
        <button class="shopping-cart-btn" @click="switchCart"><i class="bi bi-cart"></i></button>
        <ShoppingCart v-show="cartIsOpen"></ShoppingCart>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ShoppingCart from './ShoppingCart.vue'

const isScrolled = ref(false)
const isOpen = ref(false)

const route = useRoute()

const cartIsOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

//換頁關閉collapse(拔除.show)
watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)

function switchCart() {
  cartIsOpen.value = !cartIsOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
.my-nav {
  z-index: 11;
  position: absolute;
  background-color: rgba(255, 255, 255, 0);

  transition: background-color 0.2s;
}

.scrolled-nav {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
}

.my-nav-toggler {
  color: white;
  background-color: rgba(255, 255, 255, 0.6);
}

.logo-img {
  width: 120px;
  height: 80px;
  transition: all 0.5s;
}

.scrolled-logo {
  width: 75px;
  height: 50px;
}

/* router-link */
.router-link-exact-active {
  pointer-events: none;
}

.my-nav-item-start {
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
}

.my-nav-item,
.my-nav-item-end {
  border-right: 1px solid black;
}

.my-nav-item-start .nav-link:hover,
.my-nav-item .nav-link:hover,
.my-nav-item-end .nav-link:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

@media (max-width: 992px) {
  .my-nav-item-start,
  .my-nav-item,
  .my-nav-item-end {
    background-color: #fff;
    border: 0;
    margin: 0 calc(-1.5rem * 0.5);
    text-align: center;
  }

  .my-nav-item-start .nav-link,
  .my-nav-item .nav-link,
  .my-nav-item-end .nav-link {
    padding: 16px 0;
  }

  .my-nav-item-start {
    border-top: 1px solid rgb(150, 150, 150);
  }

  .my-nav-item-start,
  .my-nav-item,
  .my-nav-item-end {
    border-bottom: 1px solid rgb(150, 150, 150);
  }
}

.shopping-cart-btn {
  border: 0;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0);
  padding: 0 20px;
}

.cart-before {
  display: none;
}

.cart-after {
  display: block;
}

@media (max-width: 992px) {
  .cart-before {
    display: block;
  }

  .cart-after {
    display: none;
  }
}

@media (max-width: 768px) {
  .logo-img {
    width: 90px;
    height: 60px;
  }
}

@media (max-width: 576px) {
  .logo-img {
    width: 75px;
    height: 50px;
  }
}
</style>
