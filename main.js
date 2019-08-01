$(document).ready(initializeApp);

let gmap;
function initializeApp(){
    // Click handler
    //var location = document.getElementById('#cityInput').value;
   // const gmap = new GoogleMaps(33.6 , -117);
   const gmap = new GoogleMaps("Irvine");
    gmap.initMap();
   

    //const gloc = new Geocode('Irvine');
    //gloc.geocodeAddress();
    gmap.addEventHandler();
    const yelp = new Yelp(33.6 , -117);
    yelp.getYelpData();
    const weather = new Weather;
    const flickr = new Flickr;
    $("#flickrAndWeather").on("click", function(){
        weather.cityInput = $("#cityInput").val();
        flickr.cityInput = $("#cityInput").val();
        weather.getWeather();
        flickr.getFlickr();
    });
}
