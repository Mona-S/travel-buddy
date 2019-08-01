$(document).ready(initializeApp);

// let gmap;
function initializeApp(){
    const gmap = new GoogleMaps(33.6 , -117);
    gmap.initMap();
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
