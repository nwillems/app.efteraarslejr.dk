<script>
export default {
  props: ['icon', 'to']
}
</script>

<template>
<router-link :to="to" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
  <div class="text-center">
    <span class="block h-8 text-3xl leading-8">
      <i class="mdi" :class="[icon]"></i>
    </span>
    <span class="block text-xs leading-none"><slot></slot></span>
  </div>
</router-link>
</template>

<style scoped>

@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);


.router-link-active {
  @apply underline text-indigo-500;
}
</style>
