<template>
  <router-link class="tileArtist" :to="'/artist/' + artist.id">
    <picture  class="tileArtist-pic" >
      <img
        class="tileArtist-img"
        :src="artist.images.at(-1).url"
        :alt="artist.name"
      />
    </picture>
    <h3 class="tileArtist-name">{{ artist.name }}</h3>
    <span class="tileArtist-type">{{ artist.type }}</span>
  </router-link>
</template> 

<script>
export default {
  name: "TileArtist",
  props: {
    artist: Object,
  },
  mounted() {
  },
};
</script>

