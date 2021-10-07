<script>
import Papa from "papaparse";
import {LineChart} from "vue-chart-3";

export default {
  components: { LineChart },
  data() {
    return{
      stats: [],
      chart_options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: "Point udvikling"
          }
        }
      }
    }
  },
  computed: {
    accumulatedPoints(){
      console.log(this.stats)
      const labels = this.stats.map((row) => { return row["Tidsstempel"] })
      const data = this.stats
              .map((row) => {return row["Points"]})
              .reduce((acc, x, i) => [...acc, x + (acc[i-1]|| 0)], []) //cumsum

      console.log("labels", labels, "data", data)
      return {
        labels: labels,
        datasets: [
          {
            label: "Point",
            data: data,
            borderColor: "#10B981",
            backgroundColor: "#6EE7B7"
          }
        ]
      }
      
    },
    totalPoints(){
      return this.stats.reduce((acc, x) => acc + x["Points"], 0)
    }
  },
  props: ['team_config'],
  methods: {
    fetchData(team_config, set_data_cb) {
      var calculations_sheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_YWDM1AJ3ZSjPQ97zhy5ZuJpCot85QyhGVtydyh0YZMjZkjVPlP0IzTtZkSAqByDJ3vG121sWqqbu/pub?gid=1699889130&single=true&output=csv"
      Papa.parse(calculations_sheet_url, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results, file){
          console.log("Fetched data")
          var data = results.data;
          data = data
            .filter((row) => row["Tidsstempel"] !== "")
            .filter((row) => row["Dit Hold"] === team_config.team_name)
          console.log(data)
          set_data_cb(data);
        }
      })
    }
  },
  mounted: function(){
    console.log("mounted - fetching data")
    this.fetchData(this.team_config, (data) => { 
      this.stats = data;
    })
  }
}
</script>

<template>
<!--
<iframe v-bind:src="stats_url" class="w-screen h-screen" frameborder="0" marginheight="0" marginwidth="0">Indlæser…</iframe>
-->

<div class="flex flex-col">

<div class="mx-auto">
  <div>
    <div class="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
      <div class="header flex items-center">
        <span class="icon bg-green-500 p-2 h-4 w-4 rounded-full relative">
          <p class="text-white h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">P</p>
        </span>
        <p class=text-md text-gray-700 dark:text-gray-50 ml-2>Point</p>
      </div>
      <div class="stat flex flex-col justify-start">
        <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">{{ totalPoints }}</p>
      </div>
    </div>
  </div>
</div>

<div>
<LineChart
  ref="LineRef"
  :chartData="accumulatedPoints" 
  :options="chart_options" />
</div>

</div>
<!--
<ol>
<li>IDEAS</li>
<li>Easy solution: use google sheets and create a sheet pr team, do something with cookies to get the right sheet-id. <a href="https://support.google.com/docs/answer/183965?hl=da#zippy=%2Cintegrer-et-dokument-et-regneark-eller-en-pr%C3%A6sentation%2Crediger-indlejrede-regneark">google help</a></li>
<li>DIY</li>
<li>https://www.chartjs.org/</li>
<li>https://github.com/chriszarate/sheetrock</li>
<li>https://docs.steinhq.com/introduction</li>
<li>https://www.papaparse.com/</li>
</ol>

-->

<!--
csv link for calculations sheet
https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_YWDM1AJ3ZSjPQ97zhy5ZuJpCot85QyhGVtydyh0YZMjZkjVPlP0IzTtZkSAqByDJ3vG121sWqqbu/pub?gid=1699889130&single=true&output=csv

 -->
</template>

<style scoped>
</style>
