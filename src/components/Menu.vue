<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
<div class="flex flex-row bg-gray-200">
  <div class="flex-1 menu-btn">
    <router-link to="/">Trade</router-link>
  </div>
  <div class="flex-1 menu-btn">
    <router-link to="/stats">Stats</router-link>
  </div>
  <div class="flex-1 menu-btn">
    <router-link to="/exchange">Exchange</router-link>
  </div>
</div>
</template>

<style scoped>

.menu-btn {
  @apply px-2 py-2 mx-2 my-2 bg-gray-50 font-semibold rounded-lg hover:shadow-md border border-gray-200;
  }
</style>
