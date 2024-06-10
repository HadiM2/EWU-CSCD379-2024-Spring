<template>
  <NuxtLayout>

    <v-app>
      <v-app-bar color="primary" :elevation="7" image="/public/hearts.png">
        <v-app-bar-title >
          Country
          <v-icon>
            mdi-heart-multiple          
          </v-icon>
          Crush
        </v-app-bar-title>
      </v-app-bar>

      <HelpDialog v-model="showHelpDialog" />

      <v-navigation-drawer expand-on-hover rail location="right">
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" />
          <v-list-item prepend-icon="mdi-cog-outline" title="Settings" />
          <v-list-item prepend-icon="mdi-help-circle" title="About" />
          <v-list-item prepend-icon="mdi-weather-night" title="Light vs Dark"/>
          <v-list-item  prepend-icon="mdi-help" title="Help"  />
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
              <v-btn class="buttonClass"  color="primary">Light Mode</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="buttonClass" color="primary">Dark Mode</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="buttonClass"  color="primary">Business Casual</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="buttonClass" color="primary">Business Casual -- DARK</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="buttonClass"  color="primary">Luigi</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="buttonClass"  color="primary">Mario</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="buttonClass"  color="primary">Hadi's Choice</v-btn>
              &nbsp;&nbsp;&nbsp;
              <v-btn class="buttonClass"  color="primary">Hadi's Choice -- DARK</v-btn>
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
</style>