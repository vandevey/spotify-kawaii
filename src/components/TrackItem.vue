<template>
  <li class="trackItem">
    <picture class="trackItem-pic">
      <span class="trackItem-number" v-if="trackNumber">{{track.track_number}}</span>
      <img
        v-else
        class="trackItem-img"
        :src="track.album.images.at(-1).url"
        :alt="track.name"
      />
    </picture>

    <div class="trackItem-infos">
     <h3 class="trackItem-name">{{ track.name }}</h3>
       <span class="trackItem-artist" v-if="!trackNumber">{{ track.album.name }}</span>
    </div>
    <span class="trackItem-duration">{{ durationInMinutes }}</span>
  </li>
</template>  

<script>
export default {
  name: "TrackItem",
  props: {
    track: Object,
    trackNumber: Boolean, // display track number and hide album name
  },
  computed: {
    durationInMinutes() {
      const minutes = Math.floor(this.track.duration_ms / 60000);
      const seconds = ((this.track.duration_ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
  },
};
</script>

