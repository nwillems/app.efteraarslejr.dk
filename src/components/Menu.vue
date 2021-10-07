<script setup>
</script>

<template>
<div class="h-20 flex flex-row bg-gradient-to-r from-indigo-400 via-indigo-500 to-blue-500">
  <router-link class="flex-1 menu-btn" to="/">Handel</router-link>
  <router-link class="flex-1 menu-btn" to="/stats">Point</router-link>
  <router-link class="flex-1 menu-btn" to="/exchange">Børsen</router-link>
  <router-link class="flex-1 menu-btn" to="/map">Kort</router-link>
</div>
</template>

<style scoped>

.menu-btn {
  @apply px-2 py-2 mx-2 my-2 font-semibold rounded-lg hover:underline text-gray-50;
  }

.router-link-active {
  @apply underline text-lg;
}
</style>
