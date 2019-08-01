class GoogleMaps{
  constructor(lat, lng){
    this.lat = lat;
    this.lan = lng;
    this.map = map;
    this.initMap = this.initMap.bind(this);
    this.addEventHandler = this.addEventHandler.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  initMap(){
    var myLatLong = {lat: 33.6846, lng: -117.7946};
    this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.6846, lng: -117.7946},
    zoom: 8});


  }

  addMarker(){
    var marker = new google.maps.Marker({
    position: {lat: 33.6846, lng: -117.7946},
    map: this.map,
    title: 'Click to Zoom'

  });
}

  addEventHandler(){
    google.maps.event.addListener(this.map, 'click', this.handleMapClick);
  }
  handleMapClick(event){
    this.lat = event.latLng.lat();
    this.lng = event.latLng.lng();
    console.log(this.lat, this.lng);
    this.addMarker();
  }
}
