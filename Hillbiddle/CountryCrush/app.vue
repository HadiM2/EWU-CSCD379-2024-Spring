<template>
  <NuxtLayout>

    <v-app>
      <v-app-bar color="primary" :elevation="7" image="/public/hearts.png">
        <v-app-bar-title style=" font-size:1.75em; font-family: 'PlayfairDisplay'" >
          Country
          <v-icon>
            mdi-heart-multiple          
          </v-icon>
          Crush
        </v-app-bar-title>
      </v-app-bar>

      <HelpDialog v-model="showHelpDialog" />

      <v-navigation-drawer expand-on-hover rail location="right" color="primary">
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" @click="router.push('/')"/>
          <v-list-item prepend-icon="mdi-cog-outline" title="Settings" @click="settingsDialog = true"/>
          <v-list-item prepend-icon="mdi-help-circle" title="About" @click="router.push('/about')" />
          <v-list-item prepend-icon="mdi-weather-night" title="Light vs Dark" @click="toggleTheme()"/>
          <v-list-item  prepend-icon="mdi-help" title="Help"  @click="router.push('/help')" />
        </v-list>
      </v-navigation-drawer>

      <!-- Settings Dialog -->
      <v-dialog v-model="settingsDialog" max-width="500">
        <v-card style="outline-style: inset;" color="primary">
          <v-sheet color="secondary">
            <v-card-text style="text-align: center; font-size:1.75em; font-family:'Courier New'"> Settings </v-card-text>
          </v-sheet>
          <v-card-text>
            <v-container>
              <v-list-item @click="themeSettings('overall')" style="outline-style: outset; font-size:1.75em; font-family: 'Playfair Display'"   color="primary" class="text-center">overall</v-list-item>
              &nbsp;&nbsp;&nbsp;
              <v-list-item @click="themeSettings('overall')" style="outline-style: outset; font-size:1.75em; font-family: 'Playfair Display'" color="primary" class="text-center">overall dark</v-list-item>
              &nbsp;&nbsp;&nbsp;
              <v-list-item @click="themeSettings('overall')" style="outline-style: outset;font-size:1.75em;  font-family: 'Playfair Display'" color="primary" class="text-center">country green</v-list-item>
              &nbsp;&nbsp;&nbsp;
              <v-list-item @click="themeSettings('overall')" style="outline-style: outset; font-size:1.75em; font-family: 'Playfair Display'" color="primary" class="text-center">country green dark</v-list-item>
              &nbsp;&nbsp;&nbsp;
              <v-list-item @click="themeSettings('overall')" style="outline-style: outset; font-size:1.75em; font-family: 'Playfair Display'" color="primary" class="text-center">murica</v-list-item>
              &nbsp;&nbsp;&nbsp;
              <v-list-item @click="themeSettings('overall')" style="outline-style: outset; font-size:1.75em; font-family: 'Playfair Display'" color="primary" class="text-center">murica dark</v-list-item>
              &nbsp;&nbsp;&nbsp;
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>


      <v-main>
        <NuxtPage />
      </v-main>

    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import nuxtStorage from 'nuxt-storage';
import { ref } from "vue";
const router = useRouter();
const theme = useTheme();
const showHelpDialog = ref(false);
const settingsDialog = ref(false);
const wordEngineDialog = ref(false);
onMounted(() => {
});
function toggleTheme() {
  theme.global.name.value = theme.global.name.value === "light" ? "dark" : "light";
  nuxtStorage.localStorage.setData("theme", theme.global.name.value);
}
function themeSettings(item: string) {
  theme.global.name.value = item;

}
</script>
<style>
.buttonClass{
  display: flex;
  justify-content: center;
  border: 2px;
  margin-bottom: 10px;
}

.montserrat-font {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

</style>