<template>
    <router-link :class="icon" :to="path">{{text}}</router-link>
</template> 

<script>
export default {
  name: "NavItem",
   props: {
    path: String,
    text: String,
    icon: String, // change encoded icon in css, should match with icon variable in ~/assets/scss/abstracts/_variables.scss
  }
};
</script>

