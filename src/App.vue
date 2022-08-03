<template>
  <div id="app">
    <Aside />
    <main>
      <Header/>
      <router-view />
    </main>
    <!-- <Player/> -->
  </div>
</template>

<script>
import Aside from "./components/AsidePanel";
import Header from "./components/Header";
import axios from "axios";

export default {
  components: {
    Aside,
    Header
  },

  created() {
    this.getAuth()
  },

  methods: {
    async getAuth() {
      axios("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(process.env.VUE_APP_CLIENT_ID + ":" + process.env.VUE_APP_CLIENT_SECRET),
        },
        data: "grant_type=client_credentials",
        method: "POST",
      }).then(tokenResponse => {
        // this.$store.commit("loginSucces", tokenResponse.data.access_token)
        setTimeout(() => {
          this.$store.commit("AUTH_SUCCES", tokenResponse.data.access_token); 
        }, 2000)
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
