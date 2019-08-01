class GoogleMaps{
  constructor(lat, lng){
    this.lat = lat;
    this.lng = lng;
    this.map = map;
    this.initMap = this.initMap.bind(this);
    this.addEventHandler = this.addEventHandler.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  getLatLng(){
    return [this.lat, this.lng];
  }

  initMap(){
    var myLatLong = {lat: this.lat, lng: this.lng};
    this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: this.lat, lng: this.lng},
    zoom: 8});
  }

  addMarker(){
    const marker = new google.maps.Marker({
    position: {lat: this.lat, lng: this.lng},
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
  }
}






// let lat = null;
// let lng = null;

// function initMap() {
//     const myLatLong = {lat: -25.363, lng: 131.044};
//     const map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8
//     });

//     const marker = new google.maps.Marker({
//       position: myLatLong,
//       map: map,
//       title: 'Click to Zoom'
//     });
    
//     google.maps.event.addListener(map, 'click', function(event){ 
//         lat = event.latLng.lat();
//         lng = event.latLng.lng();
//         console.log(lat, lng);
       
//     });  

    
// }

 