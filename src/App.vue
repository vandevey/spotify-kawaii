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
export default {
  components: {
    Aside,
  },
};
</script> 

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
