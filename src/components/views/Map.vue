<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import poster_data from '../../assets/poster.json'

const officeIcon = L.divIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
</svg>`,
className: "",
iconSize: [20, 20],
iconAnchor: [10, 20],
})

export default {
  name: "Map",
  data() {
    return{
      center: [37,7749, -122,4194]
    }
  },
  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer", {
        center: [55.916999, 11.911422],
        zoom: 16,
        zoomControl: false,
        dragging: false
      });
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          accessToken:"pk.eyJ1Ijoibml3aWw5MCIsImEiOiJja3VlaWtlMDYxNGRjMnJtdHhtNmVtbWppIn0.a6PxoSOQnb34xG9Zi6nxoA",
        }
      ).addTo(mapDiv);
      //Jomsborg
      L.marker([55.91380857362629, 11.911055657606187], {
        title: "Jomsborg",
        icon: officeIcon,
      }).addTo(mapDiv)

      //TODO Consider using OpenStreetMap - https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
      this.mapDiv = mapDiv;
    },
    setupPoster() {
      const mapDiv = this.mapDiv
      const now = Date.now()
      const poster = poster_data.data.filter(post => { 
        return (post.opens < now && post.closes > now)
      })

      for(let post of poster) {
          L.marker(post.coordinates).addTo(mapDiv);
      }
    }
 },
 mounted() {
   this.setupLeafletMap();

   console.log(poster_data)
   this.setupPoster();
 },
};
</script>

<template>
 <div id="container">
   <div id="mapContainer"></div>
 </div>
</template>

<style scoped>
#mapContainer {
 width: 99vw;
 height: 90vh;
}
</style>`
