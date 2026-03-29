<template>
  <div class="mybg">
    <Transition name="fade" mode="out-in">
      <Suspense>
        <div>
          <Navbar class="my-nav-ani"></Navbar>
          <router-view></router-view>
          <SectionLoading v-show="useLoding.isLoading"></SectionLoading>
        </div>
        <template #fallback>
          <div>
            <HomeLoading></HomeLoading>
          </div>
        </template>
      </Suspense>
    </Transition>
  </div>
</template>
<script setup>
import HomeLoading from '@/components/user/HomeLoading.vue'
import Navbar from '@/components/user/HomeNavbar.vue'
import SectionLoading from '@/components/SectionLoading.vue'

import { useLoadingStore } from '@/stores/loadingStore'

const useLoding = useLoadingStore()
</script>
<style scoped>
.mybg {
  background-color: rgb(233, 241, 235);
}

.my-nav-ani {
  animation: navAni 0.5s ease-out 0.5s both;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes navAni {
  from {
    top: -100px;
  }
  to {
    top: 0px;
  }
}
</style>
