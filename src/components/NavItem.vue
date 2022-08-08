<template>
    <router-link :class="icon" :to="path">{{text}}</router-link>
</template> 

<script>
export default {
  name: "NavItem",
   props: {
    path: String,
    text: String,
    icon: String,
  }
};
</script>

