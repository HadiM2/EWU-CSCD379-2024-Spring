<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(profile, index) in profiles" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card class="pd mb-4">
            <v-img :src="profile.image" height="200"></v-img>
            <v-card-text class="text-center">{{ profile.description }}</v-card-text>
            <v-card-actions class="justify-center">
              <v-btn @click="like(index)" color="success"><v-icon>mdi-check</v-icon></v-btn>
              <v-btn @click="dislike(index)" color="error"><v-icon>mdi-close</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiles: [
        { image: '/CrushPictures/CrushUsers/f12.png', description: 'Description for profile 1' },
        { image: '/CrushPictures/CrushUsers/f14.png', description: 'Description for profile 2' },
        { image: '/CrushPictures/CrushUsers/f3.png', description: 'Description for profile 3' },
        { image: '/CrushPictures/CrushUsers/f4.png', description: 'Description for profile 1' },
        { image: '/CrushPictures/CrushUsers/f5.png', description: 'Description for profile 2' },
        { image: '/CrushPictures/CrushUsers/f6.png', description: 'Description for profile 3' },
        { image: '/CrushPictures/CrushUsers/f10.png', description: 'Description for profile 1' },
        { image: '/CrushPictures/CrushUsers/f7.png', description: 'Description for profile 2' },
        { image: '/CrushPictures/CrushUsers/f8.png', description: 'Description for profile 3' },
        { image: '/CrushPictures/CrushUsers/m9.png', description: 'Description for profile 1' },
        { image: '/CrushPictures/CrushUsers/m2.png', description: 'Description for profile 2' },
        { image: '/CrushPictures/CrushUsers/m11.png', description: 'Description for profile 3' },
        { image: '/CrushPictures/CrushUsers/m4.png', description: 'Description for profile 1' },
        { image: '/CrushPictures/CrushUsers/m5.png', description: 'Description for profile 2' },
        { image: '/CrushPictures/CrushUsers/m6.png', description: 'Description for profile 3' },
        { image: '/CrushPictures/CrushUsers/m10.png', description: 'Description for profile 1' },
        { image: '/CrushPictures/CrushUsers/m7.png', description: 'Description for profile 2' },
        { image: '/CrushPictures/CrushUsers/m8.png', description: 'Description for profile 3' },
      ]
    };
  },
  methods: {
    like(index) {
      // Implement like action here
      console.log('Liked profile', index);
    },
    dislike(index) {
      // Implement dislike action here
      console.log('Disliked profile', index);
    }
  }
};
</script>

<style scoped>
.pd {
  font-family: 'PlayfairDisplay';
}

.v-card {
  text-align: center;
}
</style>
