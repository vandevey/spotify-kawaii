<template>
  <div id="app">
    <Overlay v-if="$store.state.isLoading" />
    <Aside />
    <main>
      <Header />
      <transition name="fade">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Aside from "./components/AsidePanel";
import Overlay from "./components/Overlay";
import Header from "./components/Header";
import axios from "axios";

export default {
  components: {
    Aside,
    Header,
    Overlay,
  },

  created() {
    this.getAuth();
  },

  methods: {
    // Auth to spotify API and get access token
    async getAuth() {
      axios("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          // get credentials from .env file
          Authorization:
            "Basic " +
            btoa(
              `${process.env.VUE_APP_CLIENT_ID}:${process.env.VUE_APP_CLIENT_SECRET}`
            ),
        },
        data: "grant_type=client_credentials",
        method: "POST",
      })
        .then((tokenResponse) => {
          // store access token with AUTH_SUCCES mutation
          this.$store.commit("AUTH_SUCCES", tokenResponse.data.access_token);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script> 

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
