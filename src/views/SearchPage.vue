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
      results: {
        artists: null,
        albums: null,
        tracks: null,
        mostRevelant: null,
      },
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
          this.results = {
            tracks: this.sortByPopularity(response.data.tracks?.items),
            artists: this.sortByPopularity(response.data.artists?.items),
            albums: this.sortByPopularity(response.data.albums?.items),
            mostRevelant: this.getMostRevelantArtist(
              response.data.artists?.items
            ),
          };
        })
        .catch((e) => {
          console.log(e);
        });
    },
    sortByPopularity(array) {
      return array.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
    },
    getMostRevelantArtist(artists) {
      const mostRevelant = artists.find((artist) => {
        return artist.name.toLowerCase() == this.currentSearch;
      });
      return mostRevelant;
    },
  },
};
</script>
