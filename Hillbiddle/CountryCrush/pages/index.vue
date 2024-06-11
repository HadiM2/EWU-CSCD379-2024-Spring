<template>
  <div>
    <h1 class="pd d-flex justify-center align-center" style="color: white">
      Welcome Partner!
    </h1>
  </div>
  <br><br>
  <v-container class="d-flex justify-center align-center;">
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
    <br>
    <h2 class="pd d-flex justify-center align-center" style="color: white">
      YEEHAW! Click below to start matching!
    </h2>
  </div>
  <v-container>
    <v-card-actions class="justify-center">
      <v-btn style="background-color: lightpink;" color="white" to="/matching" class="text-center pd">Start Matching</v-btn>
    </v-card-actions>
  </v-container>
  <div ref="girl" class="walking-girl"></div>
  <div ref="boy" class="walking-boy"></div>
  <v-divider :width="'100%'"> </v-divider>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      // Check if the character elements exist before accessing them
      if (this.$refs.girl) {
        // Add animation class to start the walking animation for the girl
        this.$refs.girl.classList.add('walk-animation');
      } else {
        console.error('Girl character element not found.');
      }

      if (this.$refs.boy) {
        // Add animation class to start the walking animation for the boy
        this.$refs.boy.classList.add('walk-animation-reverse');
      } else {
        console.error('Boy character element not found.');
      }
    });
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();

const computedImageHeight = computed(() => {
  if (display.mdAndUp) return 500;
  if (display.smAndDown) return 100;
  return 400;
});

const computedImageWidth = computed(() => {
  if (display.mdAndUp) return 1600;
  if (display.smAndDown) return '100%';
  return '100%';
});
</script>

<style scoped>
.pd {
  font-family: 'PlayfairDisplay';
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

.walking-girl, .walking-boy {
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
  background-image: url('/girl.gif'); /* Adjust image URL */
}

.walking-boy {
  right: 0; /* Start from the left edge */
  background-image: url('/farmer.gif'); /* Adjust image URL */
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
}

@keyframes walk {
  0% { left: 0; } /* Start from the left edge */
  50% { left: calc(50% - 60px); } /* Move character to the middle of the page */
}

@keyframes walk-reverse {
  0% { right: 0; } /* Start from the right edge */
  50% { right: calc(50% - 60px); } /* Move character to the middle of the page */
}

.walk-animation {
  animation-name: walk;
}

.walk-animation-reverse {
  animation-name: walk-reverse;
}
</style>
