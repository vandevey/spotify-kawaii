
<template>
  <div class="searchBar">
    <svg
      class="searchBar-icon"
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.407 0.887932C4.227 0.887932 0 5.02793 0 10.1669C0 15.3059 4.226 19.4459 9.407 19.4459C11.641 19.4459 13.697 18.6759 15.314 17.3879L19.667 21.7409C19.7592 21.8364 19.8696 21.9126 19.9916 21.965C20.1136 22.0174 20.2448 22.045 20.3776 22.0462C20.5104 22.0473 20.6421 22.022 20.765 21.9718C20.8878 21.9215 20.9995 21.8472 21.0934 21.7533C21.1873 21.6594 21.2615 21.5478 21.3118 21.4249C21.3621 21.302 21.3874 21.1703 21.3863 21.0375C21.3851 20.9048 21.3575 20.7735 21.3051 20.6515C21.2527 20.5295 21.1765 20.4192 21.081 20.3269L16.737 15.9829C18.0819 14.3433 18.816 12.2876 18.814 10.1669C18.814 5.02693 14.588 0.886932 9.407 0.886932V0.887932ZM2 10.1669C2 6.16093 5.302 2.88693 9.407 2.88693C13.512 2.88693 16.814 6.16093 16.814 10.1669C16.814 14.1729 13.512 17.4459 9.407 17.4459C5.302 17.4459 2 14.1729 2 10.1659V10.1669Z"
        fill="#1C1C1C"
      />
    </svg>
    <input
      class="searchBar-input"
      type="text"
      placeholder="Search artist"
      @keyup="textSearch"
      v-model="searchValue"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      searchValue: "",
      searchTimeout: null,
    };
  },

  methods: {
    // trigger when user is typing
    textSearch() {
      // on keyup, clear timeout
      clearTimeout(this.searchTimeout);
      // if user stop typing for 500ms, register the search
      this.searchTimeout = setTimeout(this.registerSearch, 500);
    },

    // store search value with SET_SEARCH mutation
    registerSearch() {
      this.$store.commit("SET_SEARCH", this.searchValue);
    },
  },
};
</script>
