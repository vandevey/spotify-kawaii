<template>
  <div class="searchPage">{{ currentSearch }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchPage",
  components: {},

  data() {
    return {
      currentSearch: "",
    };
  },

  mounted() {},

  watch: {
    "$store.state.searchValue": {
      handler: function (nv) {
        this.currentSearch = nv;
       
        if (this.currentSearch != "") {
          this.search();
        }
      },
      immediate: true,
    },
  },

  methods: {
    async search(item = this.currentSearch) {
      console.log(item);
      const parsedText = item.replace(/\s+/g, "+");
      const search_url =
        "https://api.spotify.com/v1/search?q=" +
        parsedText +
        "&type=track,artist,album&limit=20&market=FR&access_token=" +
        this.$store.state.token;
      axios
        .get(search_url)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
