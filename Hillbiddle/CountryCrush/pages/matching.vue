<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(profile, index) in profiles" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card class="pd mb-4">
            <v-img :src="profile.image" height="200"></v-img>
            <v-card-text class="text-center">
              <div v-html="profile.description"></div>
              <div v-if="profile.showPhoneNumber">Phone Number: {{ profile.phoneNumber }}</div>
            </v-card-text>
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
        { 
          image: '/CrushPictures/CrushUsers/f12.png',
          description: 'Location: Location 1<br>Hobbies: Hobbies 1<br>Age: Age 1',
          phoneNumber: 'Phone Number 1',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f14.png',
          description: 'Location: Location 2<br>Hobbies: Hobbies 2<br>Age: Age 2',
          phoneNumber: 'Phone Number 2',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f3.png',
          description: 'Location: Location 3<br>Hobbies: Hobbies 3<br>Age: Age 3',
          phoneNumber: 'Phone Number 3',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f4.png',
          description: 'Location: Location 4<br>Hobbies: Hobbies 4<br>Age: Age 4',
          phoneNumber: 'Phone Number 4',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f5.png',
          description: 'Location: Location 5<br>Hobbies: Hobbies 5<br>Age: Age 5',
          phoneNumber: 'Phone Number 5',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f6.png',
          description: 'Location: Location 6<br>Hobbies: Hobbies 6<br>Age: Age 6',
          phoneNumber: 'Phone Number 6',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f10.png',
          description: 'Location: Location 10<br>Hobbies: Hobbies 10<br>Age: Age 10',
          phoneNumber: 'Phone Number 10',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f7.png',
          description: 'Location: Location 7<br>Hobbies: Hobbies 7<br>Age: Age 7',
          phoneNumber: 'Phone Number 7',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/f8.png',
          description: 'Location: Location 8<br>Hobbies: Hobbies 8<br>Age: Age 8',
          phoneNumber: 'Phone Number 8',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m9.png',
          description: 'Location: Location 9<br>Hobbies: Hobbies 9<br>Age: Age 9',
          phoneNumber: 'Phone Number 9',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m2.png',
          description: 'Location: Location 2<br>Hobbies: Hobbies 2<br>Age: Age 2',
          phoneNumber: 'Phone Number 2',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m11.png',
          description: 'Location: Location 11<br>Hobbies: Hobbies 11<br>Age: Age 11',
          phoneNumber: 'Phone Number 11',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m4.png',
          description: 'Location: Location 4<br>Hobbies: Hobbies 4<br>Age: Age 4',
          phoneNumber: 'Phone Number 4',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m5.png',
          description: 'Location: Location 5<br>Hobbies: Hobbies 5<br>Age: Age 5',
          phoneNumber: 'Phone Number 5',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m6.png',
          description: 'Location: Location 6<br>Hobbies: Hobbies 6<br>Age: Age 6',
          phoneNumber: 'Phone Number 6',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m10.png',
          description: 'Location: Location 10<br>Hobbies: Hobbies 10<br>Age: Age 10',
          phoneNumber: 'Phone Number 10',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m7.png',
          description: 'Location: Location 7<br>Hobbies: Hobbies 7<br>Age: Age 7',
          phoneNumber: 'Phone Number 7',
          showPhoneNumber: false
        },
        { 
          image: '/CrushPictures/CrushUsers/m8.png',
          description: 'Location: Location 8<br>Hobbies: Hobbies 8<br>Age: Age 8',
          phoneNumber: 'Phone Number 8',
          showPhoneNumber: false
        }
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

.v-card-text {
  height: auto; /* Make the card height flexible based on content */
  overflow: auto; /* Allow text to overflow and display scroll bars if necessary */
}
</style>
