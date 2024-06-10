<template>
  <div>
    <v-card class="pd text-center" color="pink"> 
      <v-card-title style="font-size: xx-large;">Country Crush</v-card-title>
      <v-card-text>
        Welcome to Country crush, where you can yeehaw your way to life-long loooooooove ❤️‍🔥👼🏹
        <br>
        Hello, We're Cynthia and Hadi. The creators of CountryCrush! 
        <v-list-item>
          <template #default>
            <div class="custom-list-item">
              <div>
                <v-list-item-title>Cynthia</v-list-item-title>
                <v-list-item-subtitle>CS Student</v-list-item-subtitle>
              </div>
              <v-avatar class="avatar-below">
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
              <v-avatar class="avatar-below">
                <img src="https://avatars.githubusercontent.com/u/97601068?v=4">
              </v-avatar>
            </div>
          </template>
        </v-list-item>
        We are currently students learning .NET and have been given the task to complete these 
        requirements: 
        <br><br>
        *Must use Vue/Vuetify/Typescript front end <br>
        *Must use ASP.NET back end <br>
        *Must use a SQL database with Entity Framework <br>
        <br>
        For our final, we're keeping the hillbilly theme. We wanted to make something fun and as we were brainstorming Hadi thought-Hillbilly match making.
        <br>
        Our site is simple-like what you see? ✅ Not so much? ❌
        <br>
        We will keep you updated with more and more matches until you find your one. 
        <br>
        Let us know what you think!
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

.custom-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px; /* Optional: To add some spacing above the list item */
}

.avatar-below {
  margin-top: 10px;
}

</style>
