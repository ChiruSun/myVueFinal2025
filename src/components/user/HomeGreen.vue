<template>
  <div class="area-greenery">
    <div class="d-flex flex-column justify-content-between h-100">
      <img src="@/img/wave_up.png" class="img-fluid my-wave-up" alt="" />
      <div
        class="container d-flex justify-content-center justify-content-sm-around align-items-center greenery-content"
      >
        <div class="greenery-slogan project-main-font fw-900">
          <div class="d-none d-sm-block">
            <p class="mb-0 typing" ref="text">用植物的方式</p>
            <p class="typing-2" ref="text2">照顧毎天</p>
          </div>
          <div class="d-sm-none">
            <p class="mb-0 typing-3" ref="text3">植優法照護</p>
          </div>
        </div>

        <div class="greenery-can" ref="greeneryCan">
          <img src="@/img/greenery_can.png" class="img-fluid" alt="greenery-can" />
        </div>
      </div>

      <img src="@/img/wave_down.png" class="my-wave-down" alt="" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const greeneryCan = ref(null)
const text = ref(null)
const text2 = ref(null)
const text3 = ref(null)
let observer

onMounted(() => {
  //滾動偵測
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        //進入畫面加入class
        greeneryCan.value.classList.add('can-ani')
        text.value.classList.add('typing-animation')
        text2.value.classList.add('typing-2-animation')
        text3.value.classList.add('typing-3-animation')
      }
    },
    //滑到20%觸發
    { threshold: 0.2 },
  )

  observer.observe(greeneryCan.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
<style scoped>
.area-greenery {
  /* height: 1000px; */
  background-image: url('@/img/greeneryBG.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.my-wave-up {
  margin-top: -2px;
}

.my-wave-down {
  margin-bottom: -1px;
}

.greenery-content {
  margin-top: -50px;
  margin-bottom: -50px;
}

.greenery-slogan {
  width: 600px;
  font-size: 80px;
  text-wrap: nowrap;
  color: rgb(63, 93, 63);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px 60px;
  border-radius: 30px;
  /* margin-right: 200px; */
}

.greenery-can {
  width: 30%;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.greenery-can.can-ani {
  opacity: 1;
  transform: translateY(0px);
}

.typing,
.typing-2,
.typing-3 {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
}

.typing-animation.typing {
  animation:
    typing 0.7s steps(6) 0.1s forwards,
    cursor 0.6s step-end 2 forwards;
}

.typing-2-animation.typing-2 {
  animation:
    typing2 0.5s steps(4) 0.9s forwards,
    cursor 0.7s step-end 1s infinite;
}

.typing-3-animation.typing-3 {
  animation:
    typing3 0.5s steps(5) 0.1s forwards,
    cursor 0.7s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 480px;
  }
}

@keyframes typing2 {
  from {
    width: 0;
  }

  to {
    width: 330px;
  }
}

@keyframes typing3 {
  from {
    width: 0;
  }

  to {
    width: 205px;
  }
}

/* 游標閃爍 */
@keyframes cursor {
  0% {
    border-color: black;
  }

  50% {
    border-color: transparent;
  }

  100% {
    border-color: transparent;
  }
}

@media (max-width: 992px) {
  .greenery-slogan {
    width: 450px;
    font-size: 60px;
    padding: 20px 40px;
  }
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 365px;
    }
  }
  @keyframes typing2 {
    from {
      width: 0;
    }

    to {
      width: 250px;
    }
  }
}
@media (max-width: 768px) {
  .greenery-slogan {
    width: 300px;
    font-size: 40px;
    padding: 20px 30px 15px;
  }
  .greenery-content {
    margin-top: -20px;
    margin-bottom: -20px;
  }
  .greenery-can {
    width: 38%;
  }
  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 240px;
    }
  }
  @keyframes typing2 {
    from {
      width: 0;
    }

    to {
      width: 165px;
    }
  }
}

@media (max-width: 576px) {
  .greenery-slogan {
    width: 245px;
    font-size: 40px;
    padding: 16px;
    margin-right: 10px;
  }
}

@media (max-width: 400px) {
  .greenery-slogan {
    width: 188px;
    font-size: 30px;
    padding: 16px;
    margin-right: 5px;
  }
  @keyframes typing3 {
    from {
      width: 0;
    }

    to {
      width: 155px;
    }
  }
}
</style>
