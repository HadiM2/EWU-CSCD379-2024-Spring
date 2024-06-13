<template>
  <v-container>
    <v-card color="secondary">
      <v-sheet color="primary">
        <v-card-text style="text-align: center; font-size: larger">
          <header>Sign In</header>
        </v-card-text>
      </v-sheet>
      <v-divider />
      <v-card-text class="text-center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            label="Username(email)"
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
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn style="box-shadow: inset;" color="primary" @click="login">
          Sign In
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar.show" color="green" top>
      {{ snackbar.message }}
      <v-btn text @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import nuxtStorage from 'nuxt-storage';

const seeWhileTyping = ref<boolean>(false);
const password = ref<string>('');
const valid = ref<boolean>(false);
const email = ref<string>('');
const snackbar = ref({ show: false, message: '' });
const router = useRouter();

const staticEmail = 'admin@masterOfUniverse.com';
const staticPassword = '1234';

function login() {
  if (email.value && password.value) {
    if (email.value === staticEmail && password.value === staticPassword) {
      snackbar.value.message = 'Logged In';
      nuxtStorage.localStorage.setData('isAuth', true);
      router.push('/matching');
    } else {
      snackbar.value.message = 'Invalid Credentials';
      nuxtStorage.localStorage.setData('isAuth', false);
    }
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
