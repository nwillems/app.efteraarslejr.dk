<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Menu from './components/Menu.vue'
</script>

<template>
<div>
  <router-view></router-view>
</div>
  <div class="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
    <Menu />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
