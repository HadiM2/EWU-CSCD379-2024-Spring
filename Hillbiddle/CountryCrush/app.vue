<template>
  <NuxtLayout>
    <v-app>
    <
      <v-app-bar color="primary" :elevation="2">
        <v-app-bar-title @click="router.push('/')" style="cursor: pointer">
          CountryCrush
          <v-icon @click="router.push('/')" prepend-icon="mdi-greenhouse">  </v-icon>
        </v-app-bar-title> 
      </v-app-bar>
      <v-container >
              <v-btn
                class="buttonClass"
                @click="themeSettings('light')"
                style="outline-style: outset"
                color="primary"
                >Light Mode</v-btn
              >
              &nbsp;&nbsp;&nbsp;
              <v-btn
                class="buttonClass"
                @click="themeSettings('dark')"
                style="outline-style: outset"
                color="primary"
                >Dark Mode</v-btn
              >
              &nbsp;&nbsp;&nbsp;
              <v-btn
                class="buttonClass"
                @click="themeSettings('overall')"
                style="outline-style: outset"
                color="primary"
                >Overall</v-btn
              >
              &nbsp;&nbsp;&nbsp;
              <v-btn
                class="buttonClass"
                @click="themeSettings('overallDark')"
                style="outline-style: outset"
                color="primary"
                >OverallDark</v-btn
              >
              &nbsp;&nbsp;&nbsp;
              <v-btn
                class="buttonClass"
                @click="themeSettings('countryGreen')"
                style="outline-style: outset"
                color="primary"
                >Country</v-btn
              >
              &nbsp;&nbsp;&nbsp;
              <v-btn
                class="buttonClass"
                @click="themeSettings('countryGreenDark')"
                style="outline-style: outset"
                color="primary"
                >CountryDark</v-btn
              >
              &nbsp;&nbsp;&nbsp;
              <v-btn
                class="buttonClass"
                @click="themeSettings('murica')"
                style="outline-style: outset"
                color="primary"
                >Murica</v-btn
              >
              &nbsp;&nbsp;&nbsp;
              <v-btn
                class="buttonClass"
                @click="themeSettings('muricaDark')"
                style="outline-style: outset"
                color="primary"
                >Murica DARK</v-btn
              >
            </v-container>
      
      
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

const dialogBox = ref<boolean>(true);
const usersNameInput = ref<string>("");
const router = useRouter();
const theme = useTheme();
const showHelpDialog = ref(false);
const settingsDialog = ref(false);

onMounted(() => {
  var defaultTheme = nuxtStorage.localStorage.getData("theme");
  theme.global.name.value = defaultTheme ?? "dark";
});

function themeSettings(item: string) {
  theme.global.name.value = item;
  nuxtStorage.localStorage.setData("themes", theme.global.name.value);
}
</script>

<style>

</style>

