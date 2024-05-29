<template>
  <v-app >
    <v-main>
      <v-container>
        <v-card >
          <v-card-title class="banner">
            <h1 class="title">CountryCrush</h1>
            <div class="center">
              <p class="content text-md-center">
                Howdy, Welcome to Country Crush:
                <br> Where you can yeehaw your way to love with a simple swipe 🌽👨‍🌾💘👩‍🌾🌽
              </p>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import { onMounted } from 'vue';
import nuxtStorage from 'nuxt-storage';

const theme = useTheme();
onMounted(() => {
  var defaultTheme = nuxtStorage.localStorage.getData("theme");
  theme.global.name.value = defaultTheme ?? "light"; 
});
</script>

<style scoped>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.content {
  font-size: large;
}

.title {
  font-size: xx-large;
  text-align: center;
  border: 1px;
  padding: 10px;
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
