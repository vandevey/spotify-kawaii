<template>
  <div class="overlay">
    <div class="overlay-old">
      <svg
        ref="oldLogo"
        width="137"
        height="137"
        viewBox="0 0 137 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.4967 0.225891C30.7818 0.225891 0.206314 30.8005 0.206314 68.5155C0.206314 106.232 30.7818 136.804 68.4967 136.804C106.216 136.804 136.788 106.232 136.788 68.5155C136.788 30.803 106.216 0.229153 68.4959 0.229153L68.4967 0.225891ZM99.8143 98.7191C98.5911 100.725 95.9652 101.361 93.9592 100.13C77.9253 90.336 57.7406 88.1179 33.9695 93.549C31.6788 94.0709 29.3955 92.6357 28.8736 90.3442C28.3492 88.0527 29.7787 85.7693 32.0751 85.2474C58.0888 79.3018 80.4027 81.8632 98.4035 92.864C100.41 94.0954 101.046 96.713 99.8143 98.7191ZM108.173 80.1222C106.632 82.6298 103.353 83.4208 100.85 81.8795C82.4936 70.5941 54.5121 67.3265 32.8001 73.9172C29.9842 74.7678 27.0102 73.1808 26.1556 70.3699C25.3075 67.554 26.8952 64.5857 29.7062 63.7295C54.5072 56.2043 85.3396 59.8494 106.42 72.8033C108.923 74.3445 109.714 77.6227 108.173 80.123V80.1222ZM108.891 60.7595C86.8808 47.6866 50.5677 46.4846 29.5537 52.8624C26.1792 53.8859 22.6107 51.9809 21.5881 48.6065C20.5655 45.2304 22.4688 41.6643 25.8457 40.6384C49.9683 33.3155 90.0693 34.7303 115.409 49.7734C118.451 51.5748 119.446 55.4948 117.644 58.5259C115.85 61.5611 111.919 62.5617 108.894 60.7595H108.891Z"
          fill="#1ED760"
        />
      </svg>
    </div>
    <svg
      ref="overlayShapes"
      class="overlay-shapes"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path class="overlay-path __path"></path>
      <path class="overlay-path __path"></path>
    </svg>
    <div class="overlay-new">
      <svg
        class="overlay-new--logo"
        ref="oldLogo"
        width="137"
        height="137"
        viewBox="0 0 137 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.4967 0.225891C30.7818 0.225891 0.206314 30.8005 0.206314 68.5155C0.206314 106.232 30.7818 136.804 68.4967 136.804C106.216 136.804 136.788 106.232 136.788 68.5155C136.788 30.803 106.216 0.229153 68.4959 0.229153L68.4967 0.225891ZM99.8143 98.7191C98.5911 100.725 95.9652 101.361 93.9592 100.13C77.9253 90.336 57.7406 88.1179 33.9695 93.549C31.6788 94.0709 29.3955 92.6357 28.8736 90.3442C28.3492 88.0527 29.7787 85.7693 32.0751 85.2474C58.0888 79.3018 80.4027 81.8632 98.4035 92.864C100.41 94.0954 101.046 96.713 99.8143 98.7191ZM108.173 80.1222C106.632 82.6298 103.353 83.4208 100.85 81.8795C82.4936 70.5941 54.5121 67.3265 32.8001 73.9172C29.9842 74.7678 27.0102 73.1808 26.1556 70.3699C25.3075 67.554 26.8952 64.5857 29.7062 63.7295C54.5072 56.2043 85.3396 59.8494 106.42 72.8033C108.923 74.3445 109.714 77.6227 108.173 80.123V80.1222ZM108.891 60.7595C86.8808 47.6866 50.5677 46.4846 29.5537 52.8624C26.1792 53.8859 22.6107 51.9809 21.5881 48.6065C20.5655 45.2304 22.4688 41.6643 25.8457 40.6384C49.9683 33.3155 90.0693 34.7303 115.409 49.7734C118.451 51.5748 119.446 55.4948 117.644 58.5259C115.85 61.5611 111.919 62.5617 108.894 60.7595H108.891Z"
          fill="#fff"
        />
      </svg>
      <div class="overlay-clouds">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2 class="overlay-title">
        <span data-text="Japan">Japan</span>
        <span data-text="Kawaii">Kawaii</span>
      </h2>
    </div>
  </div>
</template> 

<script>
import gsap from "gsap/all";
import ShapeOverlays from "@/core/shapeOverlays.js";

export default {
  name: "Overlay",
  data() {
    return {
      overlayTimeline: null,
      shapeOverlay: null,
    };
  },

  mounted() {
    // set overlay animation, with animated svg in param
    this.shapeOverlay = new ShapeOverlays(this.$refs.overlayShapes);

    // setup animation timeline
    this.overlayTimeline = gsap.timeline({ delay: 2 });

    // TOFIX : $ref not working
    this.overlayTimeline.to(".overlay-new", {
      opacity: 1,
      duration: 1,
      onStart: () => this.shapeOverlay.toggle(),
    });
    this.overlayTimeline.set(".overlay-old", {
      opacity: 0,
    });
    this.overlayTimeline.set(".overlay-path:nth-of-type(1)", {
      fill: "#F9E4FF",
    });
    this.overlayTimeline.to(".overlay-new--logo", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });

    this.overlayTimeline.to(
      ".overlay-title span",
      {
        opacity: 1,
        xPercent: gsap.utils.wrap([5, -5]),
        delay: gsap.utils.wrap([0, 0.2]),
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.4"
    );

    this.overlayTimeline.to(".overlay-clouds", {
      opacity: 1,
      duration: 0.2,
    });

    this.overlayTimeline.to(".overlay-clouds span", {
      x: gsap.utils.wrap([30, 20, 40]),
      duration: 3,
      onComplete: () => {
        // close overlay
        this.shapeOverlay.toggle();
        // update store with TMS_ENDED mutation to notify that transition is ended
        setTimeout(() => this.$store.commit("TMS_ENDED"), 1000);
      },
    });

    this.overlayTimeline.to(".overlay-new", {
      opacity: 0,
      duration: 0.3,
    });
  },
};
</script> 

