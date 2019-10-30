const loadGoogleMapsApi = require('load-google-maps-api');
class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: 'AIzaSyAKCcnnM9V8unWYAqBNy73q0PxrATtdDQg' });
  }
  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: -23.6355612, lng: -46.6968308 },
      zoom: 14
    });
  }
  static createMarker(myLatLng) {
    return new google.maps.Marker({
      position: myLatLng,
      title: 'Superare'
    });
  }
  static addMarker(marker, map) {
    marker.setMap(map);
  }
}
export { Map };
