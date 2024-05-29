<template>
    <NuxtLayout>
 
      <v-app >
       
     </v-app >
     </NuxtLayout>
 </template>
 
 <script setup lang="ts">
 import { useTheme } from 'vuetify';
 import { onMounted } from 'vue';
 import nuxtStorage from 'nuxt-storage';
 const theme = useTheme();
 
 onMounted(() => {
   var defaultTheme = nuxtStorage.localStorage.getData("theme");
   theme.global.name.value = defaultTheme ?? "overall";
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
 