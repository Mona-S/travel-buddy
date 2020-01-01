$(document).ready(initializeApp);
var gmap;
function initializeApp(){
  const yelp = new Yelp();
  yelp.getLocationData("Irvine");  
  gmap = new GoogleMaps('Irvine', (lat, lng) => {
    
    yelp.getLatLngData(lat, lng);
    flickr.getFLickrWithMap(lat, lng);

  });
  gmap.initMap();
  const weather = new Weather;
  const flickr = new Flickr;
    $("#flickrAndWeather").on("click", function(){
      let searchTerm = $("#cityInput").val();
      gmap.address = flickr.cityInput  = weather.cityInput = searchTerm;
        gmap.initMap();
        weather.getWeather();
        flickr.getFlickr();
        yelp.getLocationData(searchTerm);
    });
}
