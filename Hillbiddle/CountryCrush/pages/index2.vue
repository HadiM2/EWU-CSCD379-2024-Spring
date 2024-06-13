<template>
  <v-container>
    <v-container class="d-flex justify-center align-center">
      <div class="d-flex justify-center align-center image-container">
        <v-img
          :height="computedImageHeight"
          :width="computedImageWidth"
          src="/CrushPictures/LandingPages/landingPage5.png"
        >
        </v-img>
      </div>
    </v-container>
    <div>
      <h1 style="color: white"class="pd d-flex justify-center align-center">YEEHAW!</h1>
    </div>
    <v-container>
      <v-card-actions 
        class="d-flex flex-column flex-md-row justify-center align-center"
      >
        <v-btn style="background-color: white" color="secondary" to="/matching">
          Start Matching
        </v-btn>
      </v-card-actions>
    </v-container>
    <div ref="character" class="walking-character"></div>
    <v-divider :width="'100%'"> </v-divider>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay();

const computedImageHeight = computed(() => {
  if (display.mdAndUp) return 500;
  if (display.smAndDown) return 100;
  return 400;
});

const computedImageWidth = computed(() => {
  if (display.mdAndUp) return 1600;
  if (display.smAndDown) return "100%";
  return "100%";
});
</script>

<style scoped>
.pd {
  font-family: "PlayfairDisplay";
}

.custom-card {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.custom-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.avatar-below {
  margin-top: 10px;
}

.walking-girl,
.walking-boy {
  position: fixed;
  bottom: 0;
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  background-size: cover;
  animation-duration: 10s; /* Adjust animation duration */
  animation-iteration-count: infinite;
}

.walking-girl {
  left: 0; /* Start from the left edge */
  background-image: url("/girl.gif"); /* Adjust image URL */
}

.walking-boy {
  right: 0; /* Start from the left edge */
  background-image: url("/farmer.gif"); /* Adjust image URL */
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
}

@keyframes walk {
  0% {
    left: 0;
  } /* Start from the left edge */
  50% {
    left: calc(50% - 60px);
  } /* Move character to the middle of the page */
}

@keyframes walk-reverse {
  0% {
    right: 0;
  } /* Start from the right edge */
  50% {
    right: calc(50% - 60px);
  } /* Move character to the middle of the page */
}

.walk-animation {
  animation-name: walk;
}

.walk-animation-reverse {
  animation-name: walk-reverse;
}
</style>

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
  background-color: #8747ff21;
  color: rgb(19, 81, 161); /*blanchedalmond*/
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
  background-color: #8747ff21;
  color: rgb(19, 81, 161); /*blanchedalmond*/
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
    filter: drop-shadow(-30px 0px 30px rgb(129, 197, 4))
      drop-shadow(0 10px 10px purple)
      drop-shadow(30px 0px 30px rgb(1, 156, 228));
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
    filter: drop-shadow(0 0 5px blue) drop-shadow(0 0 10px blue)
      drop-shadow(0 0 15px blue);
    color: blur();
  }
  50% {
    filter: drop-shadow(0 0 5px blue) drop-shadow(0 0 10px blue)
      drop-shadow(0 0 15px blue);
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