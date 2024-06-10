<template>
  <div ref="character" class="walking-character"></div>
  <v-divider :width="'100%'"> </v-divider>
  Welcome!
  <br><br>
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
