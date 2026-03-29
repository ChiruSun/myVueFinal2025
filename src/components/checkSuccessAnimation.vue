<template>
  <div class="check-wrapper">
    <svg class="check" viewBox="0 0 52 52">
      <circle class="check-circle" cx="26" cy="26" r="24" />
      <path class="check-path" fill="none" d="M14 27 L22 35 L38 19" />
    </svg>
  </div>
</template>
<style scoped>
.check-wrapper {
  width: 60px;
  height: 60px;
}

.check {
  width: 100%;
  height: 100%;
}

.check-circle {
  fill: transparent;
  stroke: #4caf50;
  stroke-width: 4;
  stroke-dasharray: 157;
  stroke-dashoffset: 157;
  stroke-linecap: round;
  animation:
    circle 0.3s ease-out forwards,
    fill 0.3s forwards;
  transform: rotate(-90deg);
  transform-origin: center;
}

.check-path {
  stroke: #ffffff;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: check 0.2s 0.3s ease forwards;
}

@keyframes circle {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fill {
  0% {
    fill: transparent;
  }

  99% {
    fill: transparent;
  }
  100% {
    fill: #4caf50;
  }
}

@keyframes check {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
