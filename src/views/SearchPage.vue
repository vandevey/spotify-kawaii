<template>
  <div class="searchPage">
    <div class="searchPage-container">
      <div class="searchPage-mostRevelant" v-if="results.mostRevelant">
        <h2 class="searchPage-title">Most revelant</h2>
        <TileArtist :artist="results.mostRevelant" />
      </div>
      <div class="searchPage-tracks" v-if="results.tracks">
        <h2 class="searchPage-title">Top tracks</h2>
        <ul>
          <li v-for="track in results.tracks" :key="track.id">
            {{ track.name }}
          </li>
        </ul>
      </div>
      <div class="searchPage-artists" v-if="results.artists">
        <h2 class="searchPage-title">Artists</h2>
        <div class="searchPage-artists--list">
          <TileArtist
            v-for="artist in results.artists"
            :key="artist.id"
            :artist="artist"
          />
        </div>
      </div>
      <div class="searchPage-albums" v-if="results.albums">
        <h2 class="searchPage-title">Albums</h2>
        <ul>
          <li v-for="album in results.albums" :key="album.id">
            {{ album.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TileArtist from "@/components/TileArtist.vue";

export default {
  name: "SearchPage",
  components: {
    TileArtist,
  },

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
        "&type=track,artist,album&limit=6&market=FR&access_token=" +
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
