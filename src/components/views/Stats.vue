<script>
export default {
  props: ['stats_url'],
}
</script>

<template>
<iframe v-bind:src="stats_url" class="w-screen h-screen" frameborder="0" marginheight="0" marginwidth="0">Indlæser…</iframe>

<div>Here goes stats</div>
<ol>
<li>IDEAS</li>
<li>Easy solution: use google sheets and create a sheet pr team, do something with cookies to get the right sheet-id. <a href="https://support.google.com/docs/answer/183965?hl=da#zippy=%2Cintegrer-et-dokument-et-regneark-eller-en-pr%C3%A6sentation%2Crediger-indlejrede-regneark">google help</a></li>
<li>DIY</li>
<li>https://www.chartjs.org/</li>
<li>https://github.com/chriszarate/sheetrock</li>
<li>https://docs.steinhq.com/introduction</li>
<li>https://www.papaparse.com/</li>
</ol>
</template>

<style scoped>
</style>
