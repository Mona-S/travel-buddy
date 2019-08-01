$(document).ready(initializeApp);


function initializeApp(){

    let gmap = new GoogleMaps('Irvine');
    gmap.initMap();

   
    const yelp = new Yelp(33.6 , -117, "Irvine");
    yelp.getYelpData();
    const weather = new Weather;
    const flickr = new Flickr;
    
    $("#flickrAndWeather").on("click", function(){
        weather.cityInput = $("#cityInput").val();
        flickr.cityInput = $("#cityInput").val();

        gmap = new GoogleMaps($("#cityInput").val());
        gmap.initMap();

        yelp.location = $("#cityInput").val(); 

        weather.getWeather();
        flickr.getFlickr();
        yelp.getLocationData();
    });
}
