<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDisplay } from "vuetify";
const display = useDisplay();


const cardWidth = ref('100%');

const computedImageHeight = computed(() => {
  if (display.mdAndUp) return 625;
  if (display.smAndDown) return 300;
  return 400;
});

const computedImageWidth = computed(() => {
  if (display.mdAndUp) return 1800;
  if (display.smAndDown) return '100%';
  return '100%';
});
</script>

<style>
.index {
  width: 100%;
  justify-content: center;
  align-items: center;
  animation: classicPulse 2s infinite;
}
.image-container {
  width: 100%;
  max-width: 1800px;
  animation: peruPulse 2s infinite;
}
.simpleButton {
  width: 100%;
  animation: classicButton 2s infinite;
}

.banner {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #ff47c821;
  color: rgb(161, 19, 19);/*blanchedalmond*/
  font-size: 24px;
  transform-origin: center center;
  animation: ban 2s infinite;
  
}
.bannerSmall {
  padding-right: 20px;
  padding-left: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-inline-start: 8%;
  background-color: #ff47c821;
  color: rgb(161, 19, 19);/*blanchedalmond*/
  font-size: 24px;
  transform-origin: center center;
  animation: ban 2s infinite;
}

@keyframes peruPulse {
  0%,
  100% {
    filter: drop-shadow(0 0 5px peru) drop-shadow(0 0 10px purple)
      drop-shadow(0 0 15px peru);
  }
  50% {
    filter: drop-shadow(0 0 10px peru) drop-shadow(0 0 20px purple)
      drop-shadow(0 0 30px peru);
  }
  25% {
    filter: drop-shadow(-30px 0px 30px rgb(197, 4, 4))
      drop-shadow(0 10px 10px purple)
      drop-shadow(30px 0px 30px rgb(228, 1, 171));
  }
}
@keyframes classicPulse {
  0%,
  100% {
    filter: drop-shadow(0 0 5px) drop-shadow(0 0 10px) drop-shadow(0 0 15px);
  }
  50% {
    filter: drop-shadow(0 0 5px) drop-shadow(0 0 10px) drop-shadow(0 0 15px);
  }
}

@keyframes classicButton {
  0%,
  100% {
    filter: drop-shadow(0 0 5px rgb(255, 0, 0)) drop-shadow(0 0 10px rgb(255, 0, 0))
      drop-shadow(0 0 15px rgb(255, 0, 0));
    color: blur();
  }
  50% {
    filter: drop-shadow(0 0 5px rgb(255, 0, 179)) drop-shadow(0 0 10px rgb(255, 0, 149))
      drop-shadow(0 0 15px rgb(255, 0, 221));
    color: blur();
  }
}
@keyframes ban {
  0%,
  100% {
    transform: skew(0deg, 0deg) scale(1.35, 1.35);
    filter: saturate(100%) invert(0%);
  }
  25% {
    transform: skew(1deg, 1deg) scale(1.4, 1.4);
    filter: saturate(180%) invert(10%) hue-rotate(20deg);
  }
  50% {
    transform: skew(2deg, 2deg) scale(1.45, 1.45);
    filter: saturate(100%) invert(0%) hue-rotate(40deg);
  }
  75% {
    transform: skew(1deg, 1deg) scale(1.4, 1.4);
    filter: saturate(150%) invert(20%) hue-rotate(60deg);
  }
}

@media (max-width: 600px) {
  .hillbiddle-title {
    font-size: 8vw; /* Adjust font size for smaller screens */
  }
}
@media (min-width: 1200px) {
  .hillbiddle-title {
    font-size: 2vw; /* Adjust font size for larger screens */
  }
}
</style>
