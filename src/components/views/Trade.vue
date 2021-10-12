<script>
export default {
  props: ['team_name'],
  computed: {
    googleFormsUrl() {
      return `https://docs.google.com/forms/d/e/1FAIpQLSffXEWwxxLpVUwkNSEb5lQMP0fxpxF7LbVU_RIC3xGWn2t1ZQ/viewform?embedded=true&entry.857897558=${this.team_name}`
    }
  }
}
</script>

<template>
<iframe v-bind:src="googleFormsUrl" class="w-screen h-googleframe" frameborder="0" marginheight="0" marginwidth="0">Indlæser…</iframe>

<!--
https://docs.google.com/forms/d/e/1FAIpQLSffXEWwxxLpVUwkNSEb5lQMP0fxpxF7LbVU_RIC3xGWn2t1ZQ/viewform?usp=pp_url&entry.857897558=HOLD_NAVN
  -->
</template>

<style scoped>
</style>
