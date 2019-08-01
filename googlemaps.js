class GoogleMaps{
  constructor(address){
  // this.lat = lat;
  // this.lng = lng;
    this.map = map;
    this.address = address;
    this.initMap = this.initMap.bind(this);
    this.addEventHandler = this.addEventHandler.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.clearMarker = this.clearMarker.bind(this);
    this.marker = null;
    this.addMarker = this.addMarker.bind(this);
  
  }

  initMap(){
   
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode({'address': this.address}, function(results, status) {
      if (status === 'OK') {
        var position = results[0].geometry.location;
        this.lat = position.lat();
        this.lng  = position.lng(); 
        console.log('new', this.lat , this.lng);
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: this.lat , lng: this.lng},
          zoom: 10});

        this.addMarker();
        
       
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    }.bind(this));
    
  }

 
  addMarker(){
    if(this.marker){this.setMapOnAll(null)};
    const marker = new google.maps.Marker({
        position: {lat: this.lat, lng: this.lng},
    map: this.map,
    title: 'Click to Zoom'
  }); 
    this.marker = marker;
    console.log('here' , this.lat, this.lng);
  }

  setMapOnAll(map) {
      this.marker.setMap(map);
  }

  addEventHandler(){
    google.maps.event.addListener(this.map, 'click', this.handleMapClick);
    

  }

    handleMarkerClick(){
      map.setZoom(8);
      map.setCenter(this.marker.getposition());
    
  }
    
  handleMapClick(event){
    this.lat = event.latLng.lat();
    this.lng = event.latLng.lng();
    console.log(this.lat, this.lng);
    this.addMarker();
    
  }

  clearMarker(){
      setMapOnAll(null);
  }

  getLatLng(){
    return [this.lat, this.lng];

  }

    
}

 

 