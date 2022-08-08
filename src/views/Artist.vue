<template>
  <div class="artist">
    <div class="artist-banner" v-if="artist">
      <h1 class="artist-name">{{ artist.name }}</h1>
      <span class="artist-sub">{{ artist.followers.total }} subscribers</span>
    </div>
    <ul v-if="tracks">
      <TrackItem v-for="track in tracks" :key="track.id" :track="track" />
    </ul>
    <div class="artist-albums" v-if="albums">
      <h2 class="artist-title">Albums</h2>
      <div class="artist-albums--list">
        <TileAlbum v-for="album in albums" :key="album.id" :album="album" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TileAlbum from "@/components/TileAlbum.vue";
import TrackItem from "@/components/TrackItem.vue";

export default {
  name: "Artist",
  components: {
    TileAlbum,
    TrackItem,
  },
  data() {
    return {
      artist: null,
      albums: null,
      tracks: null,
    };
  },

  created() {
    // get artist's informations from spotify API
    axios
      .get(`https://api.spotify.com/v1/artists/${this.$route.params.id}`, {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      })
      .then((response) => {
        this.artist = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    // get artist's albums from spotify API
    axios
      .get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}/albums?limit=8`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.state.token,
          },
        }
      )
      .then((response) => {
        this.albums = response.data.items;
      })
      .catch((e) => {
        console.log(e);
      });
    // get artist's top tracks from spotify API
    // TODO : not working
    axios
      .get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}/top-tracks&market=fr`,
        {
          headers: {
            Authorization: "Bearer " + this.$store.state.token,
          },
        }
      )
      .then((response) => {
        this.tracks = response.data.items;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
