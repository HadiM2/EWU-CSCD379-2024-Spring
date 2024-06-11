<template>
  <v-dialog v-model="modelValue" max-width="500" >
    <v-card color="secondary">
      <v-sheet color="primary">
        <v-card-text style="text-align: center; font-size: larger">
          <header style="font-size: xx-large; font-weight: bold; font-style: italic;" class="pd">How it works:</header>
        </v-card-text>
      </v-sheet>
      <v-card-text style="color: white; text-align: center; font-size: large" class="pd">
          *If you like what you see: ✅<br> We'll give you their details and you can take it to the next step!
          <br><br>
          *Not so much?: ❌<br> We'll keep moving forward until you find your match!<br>
          <br>
          It's that simple! Just keep going until you find your one!
          <br>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="text-center pd"
          color="white"
          density="compact"
          icon="mdi-close-box"
          @click="modelValue = false"/>
      </v-card-actions>
      <v-divider />
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const modelValue = ref(true);
</script>

<style>
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
</style>
