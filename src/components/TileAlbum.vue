<template>
  <router-link class="tileAlbum" :to="'/album/' + album.id">
    <picture  class="tileAlbum-pic" >
      <img
        class="tileAlbum-img"
        :src="album.images[1].url"
        :alt="album.name"
      />
    </picture>
    <h4 class="tileAlbum-name">{{ album.name }}</h4>
    <span class="tileAlbum-type">{{ album.type }}</span>
  </router-link>
</template> 

<script>
export default {
  name: "tileAlbum",
  props: {
    album: Object,
  },
  mounted() {
  },
};
</script>

