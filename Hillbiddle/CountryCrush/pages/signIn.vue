<template>
  <v-container>
    <v-card color="secondary">
      <v-sheet color="primary">
        <v-card-text style="text-align: center; font-size: larger">
          <header>{{ isRegisterMode ? 'Register' : 'Sign In' }}</header>
        </v-card-text>
      </v-sheet>
      <v-divider />
      <v-card-text class="text-center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <template v-if="isRegisterMode">
            <v-text-field
              v-model="fullName"
              label="Full Name"
              prepend-icon="mdi-account"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="Email"
              prepend-icon="mdi-email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :type="seeWhileTyping ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-inner-icon="seeWhileTyping ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              @click:append-inner="seeWhileTyping = !seeWhileTyping"
              required
            ></v-text-field>
          </template>
          <template v-else>
            <v-text-field
              v-model="email"
              label="Username (Email)"
              prepend-icon="mdi-account"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :type="seeWhileTyping ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-inner-icon="seeWhileTyping ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              @click:append-inner="seeWhileTyping = !seeWhileTyping"
              required
            ></v-text-field>
          </template>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="white" @click="isRegisterMode ? register() : login()">
          {{ isRegisterMode ? 'Register' : 'Sign In' }}
        </v-btn>
        <v-btn @click="toggleMode()">
          {{ isRegisterMode ? 'Already have an account? Sign In' : "Don't have an account? Register" }}
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
  v-model="snackbar.show"
  class="pd"
  color="green"
  top
  style="text-align: center"
>
  {{ snackbar.message }}
</v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import nuxtStorage from "nuxt-storage";
import { useRouter } from 'vue-router';

const fullName = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const seeWhileTyping = ref<boolean>(false);
const valid = ref<boolean>(false);
const snackbar = ref({ show: false, message: '' });
const isRegisterMode = ref<boolean>(false);
const router = useRouter();

const staticEmail = 'admin@masterOfUniverse.com';
const staticPassword = '1234';

function toggleMode() {
  isRegisterMode.value = !isRegisterMode.value;
}

function login() {
  if (email.value && password.value) {
    if (email.value === staticEmail && password.value === staticPassword) {
      snackbar.value.message = "Logged In";
      nuxtStorage.localStorage.setData("isAuth", true);
      router.push('/matching');
    } else {
      snackbar.value.message = "Invalid Credentials";
      nuxtStorage.localStorage.setData("isAuth", false);
    }
  } else {
    snackbar.value.message = "Fields can't be empty";
  }
  snackbar.value.show = true;
}

function register() {
  if (fullName.value && email.value && password.value) {
    snackbar.value.message = 'Registered Successfully';
    nuxtStorage.localStorage.setData('user', { fullName: fullName.value, email: email.value, password: password.value });
    toggleMode(); // Switch to sign-in mode after registration
  } else {
    snackbar.value.message = "Fields can't be empty";
  }
  snackbar.value.show = true;
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
