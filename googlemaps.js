class GoogleMaps{
  constructor(address, onLocationChange){
    this.lat = null;
    this.lng = null;
    this.map = map;
    this.results = null;
    this.address = address;
    this.initMap = this.initMap.bind(this);
    this.addEventHandler = this.addEventHandler.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.clearMarker = this.clearMarker.bind(this);
    this.marker = null;
    this.addMarker = this.addMarker.bind(this);
    this.onLocationChange = onLocationChange;
  }

  getLatLng(){
    console.log("lat: ", this.lat);
    console.log("lng: ", this.lng);
    return {lat: this.lat, lng: this.lng};
  }

  initMap(){
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode({'address': this.address}, function(results, status) {
      if (status === 'OK') {
        this.results = results;
        var position = results[0].geometry.location;
        this.lat = position.lat();
        this.lng  = position.lng();
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: this.lat , lng: this.lng},
          zoom: 10});
        this.addMarker();
        this.addEventHandler();

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    }.bind(this));
  }

  addMarker(){
    if(this.marker){this.setMapOnAll(null)};
    const marker = new google.maps.Marker({
        position: {lat: this.lat, lng: this.lng},
    map: this.map
  });
    this.marker = marker;
    console.log("addMarker() lat: ", this.lat);
    console.log("addMarker() lng: ", this.lng);
  }

  setMapOnAll(map) {
      this.marker.setMap(map);
  }

  addEventHandler(){
    google.maps.event.addListener(this.map, 'click', this.handleMapClick);
  }

  handleMarkerClick(){
    this.map.setZoom(12);
    this.map.setCenter(this.marker.getPosition());
}

  handleMapClick(event){
    this.lat = event.latLng.lat();
    this.lng = event.latLng.lng();
    this.addMarker();
    this.handleMarkerClick();

    const testFlickr = new Flickr;
    testFlickr.getFLickrWithMap(this.lat, this.lng);

    this.onLocationChange(this.lat, this.lng);

  }

  clearMarker(){
      setMapOnAll(null);
  }

}
