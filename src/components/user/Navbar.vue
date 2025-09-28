<template>
  <nav class="navbar navbar-expand-lg w-100 pb-5 my-nav">
    <div class="container-xxl">
      <RouterLink to="/" class="navbar-brand">
        <img src="/src/img/HINheart_LOGO2.png" alt="" width="120" height="80" />
      </RouterLink>
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
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item border-start border-end border-dark">
            <RouterLink to="/products" class="nav-link px-4 fw-bold" active-class="active"
              >產品列表</RouterLink
            >
          </li>
          <li class="nav-item border-end border-dark">
            <RouterLink to="/story" class="nav-link px-4 fw-bold" active-class="active"
              >緣起故事</RouterLink
            >
          </li>
          <li class="nav-item border-end border-dark">
            <RouterLink to="/connect_us" class="nav-link px-4 fw-bold" active-class="active"
              >聯絡我們</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup></script>
<style scoped>
.my-nav {
  z-index: 10;
}
</style>
