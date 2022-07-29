<template>
  <div id="app">
    <Aside />
    <main>
      <!-- <Header/> -->
      <router-view />
    </main>
    <!-- <Player/> -->
  </div>
</template>

<script>
import Aside from "./components/AsidePanel";
import axios from "axios";

export default {
  components: {
    Aside,
  },

  created() {
    this.getAuth()
  },

  methods: {
    async getAuth() {

      // TODO : move to .env file
      const clientId = "f048f7c40a32406a8b1da3de9d5b6b4d";
      const clientSecret = "6e5f52450992445184e0184a706c8622";

      axios("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        data: "grant_type=client_credentials",
        method: "POST",
      }).then(tokenResponse => {
        this.$store.commit("loginSucces", tokenResponse.data.access_token)
      }).catch(error => {
        console.log(error);
      })
    },
  },
};
</script> 

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
