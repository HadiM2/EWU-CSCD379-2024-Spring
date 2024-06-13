<template>
  <div>
    <h1>Liked Profiles</h1>
    <v-container>
      <v-row>
        <v-col v-for="(profile, index) in likedProfiles" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card class="pd mb-4" color="primary">
            <v-card-text class="text-center">
              <div v-html="profile.name"></div>
            </v-card-text>
            <v-img :src="profile.image" height="200"></v-img>
            <v-card-text class="text-center">
              <div v-html="profile.description"></div>
              <div v-if="profile.showPhoneNumber">Phone Number: {{ profile.phoneNumber }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    likedProfiles() {
      return this.$root.likedProfiles;
    }
  }
};
</script>
