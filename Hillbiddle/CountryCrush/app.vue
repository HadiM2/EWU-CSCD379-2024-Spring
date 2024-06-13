<template>
  <NuxtLayout>
    <v-app>
      <v-app-bar color="primary" :elevation="7" image="/public/hearts.png">
        <v-toolbar-title class="d-flex align-center justify-center">
          <v-app-bar-title
            style="font-size: 1.75em; cursor: pointer"
            class="pd"
            @click="router.push('/')"
          >
            Country
            <v-icon> mdi-heart-multiple </v-icon>
            Crush
          </v-app-bar-title>
        </v-toolbar-title>
        <div v-if="isAuthenticated">
          <span>{{ loggedInUser }}</span>
          <v-btn v-if="isAuthenticated" color="white" @click="logout()"
            >Sign Out</v-btn
          >
        </div>
        <div v-else>
          <v-btn color="white" class="pd text-center" style="color:white" @click="router.push('/signIn')">Sign In</v-btn>
        </div>
      </v-app-bar>

      <HelpDialog v-model="showHelpDialog" />

      <v-navigation-drawer
        expand-on-hover
        rail
        location="right"
        color="primary"
      >
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item
            class="pd"
            prepend-icon="mdi-home"
            title="Home"
            @click="router.push('/')"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-cog-outline"
            title="Settings"
            @click="settingsDialog = true"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-help-circle"
            title="About"
            @click="router.push('/about')"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-weather-night"
            title="Light or Dark"
            @click="toggleTheme()"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-help"
            title="Help"
            @click="router.push('/help')"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-account"
            title="signIn"
            @click="router.push('/signIn')"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-heart"
            title="likedPage"
            @click="router.push('/LikedPage')"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-skull"
            title="dislikedPage"
            @click="router.push('/DislikedPage')"
          />
          <v-list-item
            class="pd"
            prepend-icon="mdi-heart"
            title="Start Matching!"
            @click="router.push('/index2')"
          />
        </v-list>
      </v-navigation-drawer>

      <v-dialog v-model="settingsDialog" max-width="500">
        <v-card style="outline-style: inset" color="primary">
          <v-sheet color="secondary">
            <v-card-text
              style="text-align: center; font-size: 1.75em; color: white"
              class="pd"
            >
              Settings
            </v-card-text>
          </v-sheet>
          <v-card-text>
            <v-container>
              <v-list-item
                ><v-btn
                  @click="themeSettings('overall')"
                  variant="plain"
                  class="text-center pd"
                  >overall</v-btn
                ></v-list-item
              >
              &nbsp;&nbsp;&nbsp;
              <v-list-item
                ><v-btn
                  @click="themeSettings('overallDark')"
                  variant="plain"
                  class="text-center pd"
                  >overall dark</v-btn
                ></v-list-item
              >
              &nbsp;&nbsp;&nbsp;
              <v-list-item>
                <v-btn
                  @click="themeSettings('countryGreen')"
                  variant="plain"
                  class="text-center pd"
                  >country green</v-btn
                ></v-list-item
              >
              &nbsp;&nbsp;&nbsp;
              <v-list-item>
                <v-btn
                  @click="themeSettings('countryGreenDark')"
                  variant="plain"
                  class="text-center pd"
                  >country green dark</v-btn
                ></v-list-item
              >
              &nbsp;&nbsp;&nbsp;
              <v-list-item>
                <v-btn
                  @click="themeSettings('murica')"
                  variant="plain"
                  class="text-center pd"
                  >murica</v-btn
                ></v-list-item
              >
              &nbsp;&nbsp;&nbsp;
              <v-list-item
                ><v-btn
                  @click="themeSettings('muricaDark')"
                  variant="plain"
                  class="text-center pd"
                  >murica dark</v-btn
                ></v-list-item
              >
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

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";
import nuxtStorage from "nuxt-storage";

const router = useRouter();
const theme = useTheme();
const showHelpDialog = ref(false);
const settingsDialog = ref(false);

const isDarkMode = ref(theme.global.name.value.includes("Dark"));

function toggleTheme() {
  if (isDarkMode.value) {
    theme.global.name.value = theme.global.name.value.replace("Dark", "");
    console.log(theme.global.name.value);
  } else {
    if (theme.global.name.value.includes("Dark")) {
      theme.global.name.value = theme.global.name.value.replace("Dark", "Dark");
    } else {
      theme.global.name.value += "Dark";
    }
  }
  isDarkMode.value = !isDarkMode.value;
  nuxtStorage.localStorage.setData("theme", theme.global.name.value);
}

function themeSettings(item: string) {
  theme.global.name.value = item;
  isDarkMode.value = item.includes("Dark");
  nuxtStorage.localStorage.setData("theme", item);
}

const isAuthenticated = ref<boolean>(false);
const loggedInUser = ref<string>("");
// Watch for changes in authentication status
watch(
  () => nuxtStorage.localStorage.getData("isAuth"),
  (newValue) => {
    isAuthenticated.value = newValue === true;
  }
);

// Watch for changes in loggedInUser
watch(
  () => nuxtStorage.localStorage.getData("loggedInUser"),
  (newValue) => {
    loggedInUser.value = newValue || "";
  }
);

// Function to handle logout
function logout() {
  nuxtStorage.localStorage.remove("isAuth");
  nuxtStorage.localStorage.remove("loggedInUser");
  isAuthenticated.value = false;
  loggedInUser.value = "";
  router.push("/");
}
</script>

<script lang="ts">
export default {
  data() {
    return {
      likedProfiles: [],
      dislikedProfiles: [],
    };
  },
  setup() {
    const isAuthenticated = ref(false);
    const loggedInUser = ref("");

    // Watch for changes in authentication status
    watch(
      () => nuxtStorage.localStorage.getData("isAuth"),
      (newValue) => {
        isAuthenticated.value = newValue === true;
      }
    );

    // Watch for changes in loggedInUser
    watch(
      () => nuxtStorage.localStorage.getData("loggedInUser"),
      (newValue) => {
        loggedInUser.value = newValue || "";
      }
    );
    function logout() {
      nuxtStorage.localStorage.remove("isAuth");
      nuxtStorage.localStorage.remove("loggedInUser");
      isAuthenticated.value = false;
      loggedInUser.value = "";
      router.push("/");
    }
    return {
      isAuthenticated,
      loggedInUser,
    };
  },
};
</script>
<style>
.buttonClass {
  display: flex;
  justify-content: center;
  border: 2px;
  margin-bottom: 10px;
}

.pd {
  font-family: "PlayfairDisplay";
}
</style>
