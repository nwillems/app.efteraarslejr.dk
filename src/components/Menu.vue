<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
<div class="flex flex-row bg-gradient-to-r from-indigo-400 via-indigo-500 to-blue-500">
  <div class="flex-1 menu-btn">
    <router-link to="/">Handel</router-link>
  </div>
  <div class="flex-1 menu-btn">
    <router-link to="/stats">Point</router-link>
  </div>
  <div class="flex-1 menu-btn">
    <router-link to="/exchange">Børsen</router-link>
  </div>
  <div class="flex-1 menu-btn">
    <router-link to="/map">Kort</router-link>
  </div>
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
