<template>
  <div class="album">
    <div class="album-container">
      <div class="album-banner" v-if="album">
        <picture class="album-banner--pic">
          <img
            class="album-banner--img"
            :src="album.images[0].url"
            :alt="album.name"
          />
        </picture>
        <div class="album-infos">
          <span class="album-type">{{ album.album_type }}</span>
          <h1 class="album-name">{{ album.name }}</h1>
          <div class="album-details">
            <router-link
              class="album-details--artists"
              v-for="artist in album.artists"
              :key="artist.id"
              :to="'/artist/' + artist.id"
              >{{ artist.name }}</router-link
            >

            <span class="album-details--item">{{ album.release_date }}</span>
            <span class="album-details--item"
              >{{ album.total_tracks }} tracks</span
            >
          </div>
        </div>
      </div>

      <ul class="album-tracks" v-if="tracks">
        <TrackItem
          v-for="track in tracks"
          :key="track.id"
          :track="track"
          trackNumber
        />
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TrackItem from "@/components/TrackItem.vue";

export default {
  name: "Album",
  components: {
    TrackItem,
  },

  data() {
    return {
      album: null,
      tracks: null,
    };
  },

  created() {
    // get album's data from spotify API
    axios
      .get(`https://api.spotify.com/v1/albums/${this.$route.params.id}`, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      })
      .then((response) => {
        this.album = response.data;
        this.tracks = response.data.tracks.items;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
