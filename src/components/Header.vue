
<template>
    <header class="header">
        <NavButton direction="back"/>
        <NavButton direction="next"/>
        <!-- show only on search page -->
        <SearchBar v-if="this.$route.name == 'SearchPage'"/>
    </header>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import NavButton from '@/components/NavButton.vue'
export default {
  name: "Header",
  components: {
      SearchBar,
      NavButton
  }
};
</script>
