<template>
  <div class="searchPage">{{myprop}}</div>
</template>

<script>
export default {
  name: "SearchPage",
  components: {},

  data() {
    return {
      myprop: "dqsdq"
    }
  },

  mounted() {
    this.myprop = "cfvygbuhin"
  },

  watch: {
    "$store.state.searchValue": {
      handler: function (nv) {
        this.myprop = nv;
      },
      immediate: true,
    },
  },
};
</script>
