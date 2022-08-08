
<template>
    <header class="header">
        <!-- show only on search page -->
        <SearchBar v-if="this.$route.name == 'SearchPage'"/>
    </header>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
  name: "Header",
  components: {
      SearchBar
  }
};
</script>
