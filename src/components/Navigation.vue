<template>
    <nav class="navigation">
        <NavItem class="navigation-item" path="/" text="Home" icon="house"/>
        <NavItem class="navigation-item" path="/search" text="Search" icon="search"/>
    </nav>
</template>

<script>
import NavItem from '@/components/NavItem.vue'
export default {
  name: "Navigation",
  components: {
      NavItem
  }
};
</script>
