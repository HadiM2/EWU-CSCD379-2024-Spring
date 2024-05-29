<template>
  <NuxtLayout>
    <v-app>
      <v-app-bar color="primary" :elevation="2">
        <v-app-bar-title @click="router.push('/')" style="cursor: pointer">
          CountryCrush
          <v-icon @click="router.push('/')" prepend-icon="mdi-greenhouse">  </v-icon>
        </v-app-bar-title> 
      </v-app-bar>
      
      
      
      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import nuxtStorage from "nuxt-storage";
import { ref } from "vue";
import { useRouter } from "vue-router";

const theme = useTheme();
const settingsDialog = ref(false);

onMounted(() => {
  var defaultTheme = nuxtStorage.localStorage.getData("theme");
  theme.global.name.value = defaultTheme ?? "overall";
});

</script>

<style>

</style>

