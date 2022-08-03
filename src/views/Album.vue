<template>
  <div class="album">
    <div class="album-container">
      <div class="album-banner" v-if="album">
        <picture class="album-banner--pic">
          <img class="album-banner--img" :src="album.images[0].url" :alt="album.name" />
        </picture>
        <div class="album-infos">
          <span class="album-infos--type">{{ album.album_type }}</span>
          <h1 class="album-infos--name">{{ album.name }}</h1>
          <div class="album-infos-details">
            <router-link v-for="artist in album.artists" :key="artist.id" :to="'/artist/' + artist.id">{{ artist.name }}</router-link>

            <span >{{ album.release_date }}</span>
            <span >{{ album.total_tracks }} tracks</span>
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
    axios
      .get(`https://api.spotify.com/v1/albums/${this.$route.params.id}`, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token, //the token is a variable which holds the token
        },
      })
      .then((response) => {
        console.log(response);
        this.album = response.data;
        this.tracks = response.data.tracks.items;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  computed: {
    totalDuration() {
      // TODO : return sum of each track's duration
      return ""
    },
  }
};
</script>
