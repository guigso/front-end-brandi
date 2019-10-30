import * as $ from 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';
import { Map } from './map';

document.addEventListener('DOMContentLoaded', function() {
  let mapElement = document.getElementById('map');

  Map.loadGoogleMapsApi().then(function(googleMaps) {
    const marker = Map.createMarker({ lat: -23.6355475, lng: -46.6962046 });
    const map = Map.createMap(googleMaps, mapElement);
    Map.addMarker(marker, map);
  });
});
