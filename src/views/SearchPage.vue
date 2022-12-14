<template>
  <div class="searchPage">
    <div class="searchPage-container">
      <transition name="fade">
        <div class="searchPage-mostRevelant" v-if="results.mostRevelant">
          <h2 class="searchPage-title">Most revelant</h2>
          <TileArtist :artist="results.mostRevelant" />
        </div>
      </transition>
      <transition name="fade">
        <div class="searchPage-tracks" v-if="results.tracks.length > 0">
          <h2 class="searchPage-title">Top tracks</h2>
          <ul>
            <TrackItem
              v-for="track in results.tracks"
              :key="track.id"
              :track="track"
            />
          </ul>
        </div>
      </transition>
      <transition name="fade">
        <div class="searchPage-artists" v-if="results.artists.length > 0">
          <h2 class="searchPage-title">Artists</h2>
          <div class="searchPage-artists--list">
            <TileArtist
              v-for="artist in results.artists"
              :key="artist.id"
              :artist="artist"
            />
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="searchPage-albums" v-if="results.albums.length > 0">
          <h2 class="searchPage-title">Albums</h2>
          <div class="searchPage-artists--list">
            <TileAlbum
              v-for="album in results.albums"
              :key="album.id"
              :album="album"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TileArtist from "@/components/TileArtist.vue";
import TileAlbum from "@/components/TileAlbum.vue";
import TrackItem from "@/components/TrackItem.vue";

export default {
  name: "SearchPage",
  components: {
    TileArtist,
    TileAlbum,
    TrackItem,
  },

  data() {
    return {
      currentSearch: "",
      results: {
        artists: [],
        albums: [],
        tracks: [],
        mostRevelant: null,
      },
    };
  },

  mounted() {},

  watch: {
    // watch stored search value
    "$store.state.searchValue": {
      handler: function (nv) {
        this.currentSearch = nv;

        // search if string value is not empty
        if (this.currentSearch != "") {
          this.search();
        }
      },
      immediate: true,
    },
  },

  methods: {
    async search(item = this.currentSearch) {
      // replace spaces with "+"
      const parsedText = item.replace(/\s+/g, "+");
      const search_url =
        "https://api.spotify.com/v1/search?q=" +
        parsedText +
        "&type=track,artist,album&limit=6&market=FR&access_token=" +
        this.$store.state.token;

      axios
        .get(search_url)
        .then((response) => {
          // sort and set results values
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
    // order array by popularity
    sortByPopularity(array) {
      return array.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
    },

    // get most revelant artist if search match with existing artist
    getMostRevelantArtist(artists) {
      const mostRevelant = artists.find((artist) => {
        return artist.name.toLowerCase() == this.currentSearch;
      });
      return mostRevelant;
    },
  },
};
</script>
