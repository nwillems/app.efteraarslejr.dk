<script setup>
import NavLink from "./NavLink.vue"

  components: { NavLink }
</script>

<template>
<div class="flex w-full">
  <nav-link icon="mdi-swap-horizontal" to="/">Handel</nav-link>
  <nav-link icon="mdi-chart-line" to="/stats">Point</nav-link>
  <nav-link icon="mdi-bank" to="/exchange">Børs</nav-link>
  <nav-link icon="mdi-map-marker" to="/map">Kort</nav-link>
</div>
</template>

<style scoped>

</style>
