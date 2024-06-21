<template>
  <div class="centered-container">
    <v-card class="pd text-center custom-card" color="pink"> 
      <!-- <v-card-title style="font-size: xx-large; font-weight: bold; font-style: italic;">Country Crush</v-card-title> -->
      <v-card-text style="font-size: medium;">
        Welcome to Country crush, where you can yeehaw your way to life-long loooooooove ❤️‍🔥👼🏹
        <br><br>
        Hello, We're Cynthia and Hadi. The creators of CountryCrush! 
        <v-list-item>
          <template #default>
            <div class="custom-list-item">
              <div>
                <v-list-item-title>Cynthia</v-list-item-title>
                <v-list-item-subtitle>CS Student</v-list-item-subtitle>
              </div>
              <v-avatar class="avatar-below" size="310">
                <img src="https://avatars.githubusercontent.com/u/129777144?v=4">
              </v-avatar>
            </div>
          </template>
        </v-list-item>
        <v-list-item>
          <template #default>
            <div class="custom-list-item">
              <div>
                <v-list-item-title>Hadi</v-list-item-title>
                <v-list-item-subtitle>CS Student</v-list-item-subtitle>
              </div>
              <v-avatar class="avatar-below" size="300">
                <img src="https://avatars.githubusercontent.com/u/97601068?v=4">
              </v-avatar>
            </div>
          </template>
        </v-list-item>
        <!-- We are currently students learning .NET and have been given the task to complete these 
        requirements: 
        <br><br>
        *Must use Vue/Vuetify/Typescript front end <br>
        *Must use ASP.NET back end <br>
        *Must use a SQL database with Entity Framework <br> -->
        <br>
        For this project, we chose a hillbilly theme. We wanted to make something fun and as we were brainstorming Hadi thought, Hillbilly match making.
        <br>
        Our site is simple. If you like what you see ✅ Not so much? ❌
        <br>
        We will keep you updated with more and more matches until you find your one. 
        <br>
        Not everything is working right now but will be soon!
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
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

.custom-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px; 
}

.avatar-below {
  margin-top: 1%;
}
</style>
