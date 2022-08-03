<template>
  <router-link class="tileAlbum" :to="'/album/' + album.id">
    <picture  class="tileAlbum-pic" >
      <img
        class="tileAlbum-img"
        :src="album.images[1].url"
        :alt="album.name"
      />
    </picture>

    <h3 class="tileAlbum-name">{{ album.name }}</h3>
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
    console.log(this.album);
  },
};
</script>

