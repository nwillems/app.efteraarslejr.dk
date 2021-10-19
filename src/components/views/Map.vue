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
});
const postMarker = L.divIcon({
  html: `<svg width="40" height="40" viewBox="0 0 50 50">
    <path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
</svg>`,
  className: "",
  iconSize: [10, 10],
  iconAnchor: [10, 20]
})

export default {
  name: "Map",
  data() {
    return{
      center: [55.91812377777777, 11.907784333333336]
    }
  },
  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer", {
        center: [55.91812377777777, 11.907784333333336],
        zoom: 15,
        zoomControl: false,
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
          L.marker(post.coordinates, {
            title: post.name,
            icon: postMarker,
          }).addTo(mapDiv);
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
