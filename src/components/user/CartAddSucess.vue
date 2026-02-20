<template>
  <div class="box"><div class="check-circle"></div></div>
</template>
<style scoped>
@property --deg {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@property --cut {
  syntax: '<percentage>';
  initial-value: 45%;
  inherits: false;
}

.box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  background-color: #fff;
  transform: translate(-50%, -50%);
}

.check-circle {
  position: absolute;
  width: 70px;
  height: 70px;
  top: -32px;
  left: 39%;
  border-radius: 50%;
  background: conic-gradient(
    #139133 0deg,
    #139133 var(--deg),
    rgba(255, 255, 255, 0) var(--deg),
    rgba(255, 255, 255, 0) 360deg
  );
  mask: radial-gradient(circle, transparent var(--cut), black calc(var(--cut) + 1%));
  animation:
    rotate 0.3s forwards,
    fill 0.1s forwards 0.3s,
    bump 0.1s linear 0.3s alternate;
}

@keyframes rotate {
  from {
    --deg: 0deg;
  }
  to {
    --deg: 360deg;
  }
}

@keyframes fill {
  to {
    --cut: -1%;
  }
}

@keyframes bump {
  from {
    scale: 1;
  }
  to {
    scale: 1.05;
  }
}
</style>
