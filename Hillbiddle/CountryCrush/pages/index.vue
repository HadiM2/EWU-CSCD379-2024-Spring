<template>
  <div ref="character" class="walking-character"></div>
  <v-divider :width="'100%'"> </v-divider>
  <div>
    <h1 class="pd">
      Welcome!
    </h1>
  </div>
  <br><br>
  <v-container class="d-flex justify-center align-center;">
    <div class="d-flex justify-center align-center; image-container" >
      <v-img
        :height="computedImageHeight"
        :width="computedImageWidth"
        src="../public/landingpage-1.png"
      >
      </v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      // Check if the character element exists before accessing it
      if (this.$refs.character) {
        // Add animation class to start the walking animation
        this.$refs.character.classList.add('walk-animation');
      } else {
        console.error('Character element not found.');
      }
    });
  }
};
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

.walking-character {
  position: fixed;
  bottom: 0;
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  background-image: url('/walk.gif'); /* Adjust image URL */
  background-size: cover;
  animation-duration: 10s; /* Adjust animation duration */
  animation-iteration-count: infinite;
}

@keyframes walk {
  0% { left: 0; } /* Start from the left edge */
  100% { left: calc(100% - 100px); } /* Move character to the right edge */
}

.walk-animation {
  animation-name: walk;
}
</style>
