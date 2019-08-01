let lat = null;
let lng = null;

function initMap() {
    const myLatLong = {lat: -25.363, lng: 131.044};
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    const marker = new google.maps.Marker({
      position: myLatLong,
      map: map,
      title: 'Click to Zoom'
    });
    
    google.maps.event.addListener(map, 'click', function(event){ 
        lat = event.latLng.lat();
        lng = event.latLng.lng();
        console.log(lat, lng);
    });  
}

// class GoogleMap{
//   constructor(){
//     this.lat = null;
//     this.lng = null;

//   }
// }
