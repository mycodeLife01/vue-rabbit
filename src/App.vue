<script setup>
import LayoutFixed from './views/Layout/components/LayoutFixed.vue';
import LayoutFooter from './views/Layout/components/LayoutFooter.vue';
import LayoutHeader from './views/Layout/components/LayoutHeader.vue';
import LayoutNav from './views/Layout/components/LayoutNav.vue';

</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
</template>

<style scoped></style>
