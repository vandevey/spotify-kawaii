<template>
  <button :class="`button ${direction}`" @click="navigate">
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1.5L1.43597 7.62216C1.20593 7.82153 1.20593 8.17847 1.43597 8.37784L8.5 14.5"
        stroke="#E5E4FF"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </button>
</template> 

<script>
export default {
  name: "NavButton",
  props: {
    direction: String,
  },
  methods: {
    navigate() {
        console.log(this.$router);
        switch (this.direction) {
            case 'back':
                return this.$router.go(-1);
            case 'next':
                    return this.$router.go(1);
            default:
                break;
        }
    },
  },
};
</script>

