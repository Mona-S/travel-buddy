$(document).ready(initializeApp);

function initializeApp(){
    let gmap = new GoogleMaps('Irvine');
    gmap.initMap();
    const yelp = new Yelp(33.6 , -117, "Irvine");
    yelp.getYelpData();
    const weather = new Weather;
    const flickr = new Flickr;
    $("#flickrAndWeather").on("click", function(){
      yelp.location = flickr.cityInput  = weather.cityInput = $("#cityInput").val();
        gmap = new GoogleMaps($("#cityInput").val());
        gmap.initMap();
        weather.getWeather();
        flickr.getFlickr();
        yelp.getLocationData();
    });
}
