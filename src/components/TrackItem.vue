<template>
  <li class="trackItem">
    <picture class="trackItem-pic">
      <img
        class="trackItem-img"
        :src="track.album.images.at(-1).url"
        :alt="track.name"
      />
    </picture>

    <div class="trackItem-infos">
      <h3 class="trackItem-name">{{ track.name }}</h3>
      <span class="trackItem-artist">{{ track.type }}</span>
    </div>
    <span class="trackItem-duration">{{ durationInMinutes }}</span>
  </li>
</template> 

<script>
export default {
  name: "TrackItem",
  props: {
    track: Object,
  },
  mounted() {
    console.log(this.track);
  },
  methods: {
    
  },
  computed: {
    durationInMinutes() {
      console.log(this.track.duration_ms);
      const minutes = Math.floor(this.track.duration_ms / 60000);
      const seconds = ((this.track.duration_ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
  },
};
</script>

