<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(profile, index) in profiles" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card class="pd mb-4" color="primary">
            <v-card-text class="text-center">
              <div v-html="profile.name"></div>
            </v-card-text>
            <v-img :src="profile.image" height="200"></v-img>
            <v-card-text class="text-center">
              <div v-html="profile.description"></div>
              <div v-if="profile.showPhoneNumber">Phone Number: {{ profile.phoneNumber }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn @click="togglePhoneNumber(index)" color="info">
                <v-icon>mdi-phone</v-icon>
              </v-btn>
              <v-btn @click="like(index)" color="success">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn @click="dislike(index)" color="error">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref } from 'vue';
import nuxtStorage from "nuxt-storage";
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      profiles: [
        { 
          name: "Daisy May",
          image: '/CrushPictures/CrushUsers/f1.png',
          description: 'Location: Spokane, WA <br>Hobbies: Gardening<br>Age: 70',
          phoneNumber: '386-604-8652',
          showPhoneNumber: false
        },
        { 
          name: "Brittney-Anne",
          image: '/CrushPictures/CrushUsers/f2.png',
          description: 'Location: Spokane, WA <br>Hobbies: SkinCare<br>Age: 22',
          phoneNumber: '938-000-3601',
          showPhoneNumber: false
        },
        { 
          name: "Gladys",
          image: '/CrushPictures/CrushUsers/f3.png',
          description: 'Location: Spokane, WA <br>Hobbies: Knitting<br>Age: 26',
          phoneNumber: '792-578-2639',
          showPhoneNumber: false
        },
        { 
          name: "Lulu",
          image: '/CrushPictures/CrushUsers/f4.png',
          description: 'Location: Spokane, WA <br>Hobbies: Ranching<br>Age: 20',
          phoneNumber: '475-459-3543',
          showPhoneNumber: false
        },
        { 
          name: "Suzie",
          image: '/CrushPictures/CrushUsers/f5.png',
          description: 'Location: Spokane, WA <br>Hobbies: Walking<br>Age: 18',
          phoneNumber: '338-937-6710',
          showPhoneNumber: false
        },
        { 
          name: "Jane",
          image: '/CrushPictures/CrushUsers/f6.png',
          description: 'Location: Spokane, WA <br>Hobbies: Growing Cotton<br>Age: 20',
          phoneNumber: '288-083-4375',
          showPhoneNumber: false
        },
        { 
          name: "Myrtle",
          image: '/CrushPictures/CrushUsers/f7.png',
          description: 'Location: Spokane, WA <br>Hobbies: Ranching<br>Age: 30',
          phoneNumber: '157-740-7694',
          showPhoneNumber: false
        },
        { 
          name: "Pearl",
          image: '/CrushPictures/CrushUsers/f8.png',
          description: 'Location: Spokane, WA <br>Hobbies: Playing Piano<br>Age: 19',
          phoneNumber: '794-365-1896',
          showPhoneNumber: false
        },
        { 
          name: "Gretchen",
          image: '/CrushPictures/CrushUsers/f9.png',
          description: 'Location: Spokane, WA <br>Hobbies: Knitting<br>Age: 19',
          phoneNumber: '544-767-7020',
          showPhoneNumber: false
        },
        { 
          name: "Peggy Sue",
          image: '/CrushPictures/CrushUsers/f10.png',
          description: 'Location: Spokane, WA <br>Hobbies: Wrangling Pigs<br>Age: 36',
          phoneNumber: '544-767-7020',
          showPhoneNumber: false
        },
        { 
          name: "Pie",
          image: '/CrushPictures/CrushUsers/f11.png',
          description: 'Location: Spokane, WA <br>Hobbies: Baking Pies<br>Age: 18',
          phoneNumber: '544-767-7020',
          showPhoneNumber: false
        },
        { 
          name: "Roxxy",
          image: '/CrushPictures/CrushUsers/f12.png',
          description: 'Location: Spokane, WA <br>Hobbies: Bird Watching<br>Age: 40',
          phoneNumber: '544-767-7020',
          showPhoneNumber: false
        },
        { 
          name: "Betty",
          image: '/CrushPictures/CrushUsers/f13.png',
          description: 'Location: Spokane, WA <br>Hobbies: Styling Hair<br>Age: 26',
          phoneNumber: '544-767-7020',
          showPhoneNumber: false
        },
        { 
          name: "Scarlett",
          image: '/CrushPictures/CrushUsers/f14.png',
          description: 'Location: Spokane, WA <br>Hobbies: Picnic with Sheep<br>Age: 31',
          phoneNumber: '544-767-7020',
          showPhoneNumber: false
        },
        { 
          name: "Velma",
          image: '/CrushPictures/CrushUsers/f15.png',
          description: 'Location: Spokane, WA <br>Hobbies: Reading mystrey books<br>Age: 18',
          phoneNumber: '504-780-7143',
          showPhoneNumber: false
        },
        { 
          name: "Billy Ray",
          image: '/CrushPictures/CrushUsers/m1.png',
          description: 'Location: Spokane, WA <br>Hobbies: Hunting<br>Age: 32',
          phoneNumber: '877-333-3387',
          showPhoneNumber: false
        },
        { 
          name: "Booger",
          image: '/CrushPictures/CrushUsers/m2.png',
          description: 'Location: Spokane, WA <br>Hobbies: Plays Banjo<br>Age: 65',
          phoneNumber: '688-990-5230',
          showPhoneNumber: false
        },
        { 
          name: "Bubba",
          image: '/CrushPictures/CrushUsers/m3.png',
          description: 'Location: Spokane, WA <br>Hobbies: Drinking tea on a rainy evening<br>Age: 56',
          phoneNumber: '361-395-9873',
          showPhoneNumber: false
        },
        { 
          name: "Cyclop Clyde",
          image: '/CrushPictures/CrushUsers/m4.png',
          description: 'Location: Spokane, WA <br>Hobbies: Catching Seaguls<br>Age: 32',
          phoneNumber: '322-449-2273',
          showPhoneNumber: false
        },
        { 
          name: "Cyrus",
          image: '/CrushPictures/CrushUsers/m5.png',
          description: 'Location: Spokane, WA <br>Hobbies: Eating avacado toast<br>Age: 29',
          phoneNumber: '136-544-1955',
          showPhoneNumber: false
        },
        { 
          name: "Sugar",
          image: '/CrushPictures/CrushUsers/m6.png',
          description: 'Location: Spokane, WA <br>Hobbies: Making flower crowns<br>Age: 23',
          phoneNumber: '035-091-9606',
          showPhoneNumber: false
        },
        { 
          name: "Aaron",
          image: '/CrushPictures/CrushUsers/m7.png',
          description: 'Location: Spokane, WA <br>Hobbies: Playing video games<br>Age: 22',
          phoneNumber: '938-229-8553',
          showPhoneNumber: false
        },
        { 
          name: "Dumbo",
          image: '/CrushPictures/CrushUsers/m8.png',
          description: 'Location: Spokane, WA <br>Hobbies: Keeping bats<br>Age: 76',
          phoneNumber: '991-660-1000',
          showPhoneNumber: false
        },
        { 
          name: "Earl",
          image: '/CrushPictures/CrushUsers/m9.png',
          description: 'Location: Spokane, WA <br>Hobbies: Playing poker<br>Age: 69',
          phoneNumber: '671-628-1918',
          showPhoneNumber: false
        },
        { 
          name: "Elmer",
          image: '/CrushPictures/CrushUsers/m10.png',
          description: 'Location: Spokane, WA <br>Hobbies: Ranching<br>Age: 33',
          phoneNumber: '124-415-9533',
          showPhoneNumber: false
        },
        { 
          name: "Festus",
          image: '/CrushPictures/CrushUsers/m11.png',
          description: 'Location: Spokane, WA <br>Hobbies: Baking<br>Age: 43',
          phoneNumber: '411-957-7135',
          showPhoneNumber: false
        },
        { 
          name: "Flint",
          image: '/CrushPictures/CrushUsers/m12.png',
          description: 'Location: Spokane, WA <br>Hobbies: Coding<br>Age: 50',
          phoneNumber: '623-718-3418',
          showPhoneNumber: false
        },
        { 
          name: "Gomer",
          image: '/CrushPictures/CrushUsers/m13.png',
          description: 'Location: Spokane, WA <br>Hobbies: Helping out around the farm<br>Age: 28',
          phoneNumber: '835-273-6738',
          showPhoneNumber: false
        },
        { 
          name: "Herschel",
          image: '/CrushPictures/CrushUsers/m14.png',
          description: 'Location: Spokane, WA <br>Hobbies: Making babies<br>Age: 70',
          phoneNumber: '865-880-1809',
          showPhoneNumber: false
        },
        { 
          name: "Joe",
          image: '/CrushPictures/CrushUsers/m15.png',
          description: 'Location: Spokane, WA <br>Hobbies: Driving around<br>Age: 55',
          phoneNumber: '807-987-4046',
          showPhoneNumber: false
        },
        { 
          name: "Jedidiah",
          image: '/CrushPictures/CrushUsers/m16.png',
          description: 'Location: Spokane, WA <br>Hobbies: Reading<br>Age: 63',
          phoneNumber: '200-953-5985',
          showPhoneNumber: false
        },
        { 
          name: "Jeff",
          image: '/CrushPictures/CrushUsers/m17.png',
          description: 'Location: Spokane, WA <br>Hobbies: Wood Working<br>Age: 25',
          phoneNumber: '832-282-3044',
          showPhoneNumber: false
        },
        { 
          name: "Jethro",
          image: '/CrushPictures/CrushUsers/m18.png',
          description: 'Location: Spokane, WA <br>Hobbies: Hiking<br>Age: 21',
          phoneNumber: '425-179-7067',
          showPhoneNumber: false
        },
        { 
          name: "John",
          image: '/CrushPictures/CrushUsers/m19.png',
          description: 'Location: Spokane, WA <br>Hobbies: Exploring<br>Age:24',
          phoneNumber: '310-605-7604',
          showPhoneNumber: false
        },
        { 
          name: "Ol Hank",
          image: '/CrushPictures/CrushUsers/m20.png',
          description: 'Location: Spokane, WA <br>Hobbies: Having a good cup of joe<br>Age: 78',
          phoneNumber: '426-372-5513',
          showPhoneNumber: false
        },
        { 
          name: "Vander",
          image: '/CrushPictures/CrushUsers/m21.png',
          description: 'Location: Spokane, WA <br>Hobbies: Rock Climbing<br>Age: 27',
          phoneNumber: '212-082-2929',
          showPhoneNumber: false
        },
        { 
          name: "Zeke",
          image: '/CrushPictures/CrushUsers/m22.png',
          description: 'Location: Spokane, WA <br>Hobbies: Digging<br>Age: 49',
          phoneNumber: '581-427-2540',
          showPhoneNumber: false
        }
      ]
    };
  },
  created() {
    this.loadProfiles();
  },
  methods: {
    togglePhoneNumber(index) {
      // this.$set(this.profiles[index], 'showPhoneNumber', !this.profiles[index].showPhoneNumber);
      this.profiles[index].showPhoneNumber = !this.profiles[index].showPhoneNumber;
    },
    like(index) {
      console.log(`Liked profile: ${this.profiles[index].name}`);
      // Implement further logic for liking a profile
      // this.likedProfiles.push(this.profiles.splice(index, 1)[0]);
      const likedProfile = this.profiles.splice(index, 1)[0];
      this.$root.likedProfiles.push(likedProfile);
      this.saveProfiles();
    },
    dislike(index) {
      console.log(`Disliked profile: ${this.profiles[index].name}`);
      // Implement further logic for disliking a profile
      // this.dislikedProfiles.push(this.profiles.splice(index, 1)[0]);
      const dislikedProfile = this.profiles.splice(index, 1)[0];
      this.$root.dislikedProfiles.push(dislikedProfile);
      this.saveProfiles();
    },
    saveProfiles() {
      localStorage.setItem('likedProfiles', JSON.stringify(this.$root.likedProfiles));
      localStorage.setItem('dislikedProfiles', JSON.stringify(this.$root.dislikedProfiles));
      localStorage.setItem('profiles', JSON.stringify(this.profiles));
    },
    loadProfiles() {
      const savedLikedProfiles = JSON.parse(localStorage.getItem('likedProfiles'));
      const savedDislikedProfiles = JSON.parse(localStorage.getItem('dislikedProfiles'));
      const savedProfiles = JSON.parse(localStorage.getItem('profiles'));

      if (savedLikedProfiles) this.$root.likedProfiles = savedLikedProfiles;
      if (savedDislikedProfiles) this.$root.dislikedProfiles = savedDislikedProfiles;
      if (savedProfiles) this.profiles = savedProfiles;
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
