

class Flickr {
  constructor() {
    this.cityInput;
    this.flickrKey = "519af7a34f396e6aa28316470a83ca88";
    this.flickrDiv = $(".flickr");
    this.getFlickr = this.getFlickr.bind(this);
  }


  getFlickr() {
    let ajaxConfigObject = {
      url: "https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=519af7a34f396e6aa28316470a83ca88&format=json&nojsoncallback=1&text=" + this.cityInput + '"',
      api_key: this.flickrKey,
      dataType: "json",

      success: function (data, status) {
        this.filePath = data.photos.photo[0];
        this.flickrFarm = this.filePath["farm"];
        this.flickrServer = this.filePath["server"];
        this.flickrID = this.filePath["id"];
        this.flickrSecret = this.filePath["secret"];

        this.render();
      }.bind(this),

      error: function (data, status) {
      }

    }
    $.ajax(ajaxConfigObject);
  }

  getFLickrWithMap(lat, lng) {
    let upperBoxLat = lat + 0.1; // 4
    let upperBoxLng = lng + 0.1; // 3
    let lowerBoxLat = lat - 0.1; // 2
    let lowerBoxLng = lng - 0.1; // 1

    let ajaxConfigObject = {
      url: `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=519af7a34f396e6aa28316470a83ca88&format=json&nojsoncallback=1&bbox=${lowerBoxLng},${lowerBoxLat},${upperBoxLng},${upperBoxLat}`,

      success: function (data, status) {
        console.log("flickr mapclick success!");
        console.log("flickr mapclick data: ", data);
        console.log("flickr mapclick status: ", status);
        console.log("lowerLng: ", lowerBoxLng);
        console.log("lowerLat: ", lowerBoxLat);
        console.log("upperLng: ", upperBoxLng);
        console.log("upperLat: ", upperBoxLat);
        this.filePath = data.photos.photo[0];
        this.flickrFarm = this.filePath["farm"];
        this.flickrServer = this.filePath["server"];
        this.flickrID = this.filePath["id"];
        this.flickrSecret = this.filePath["secret"];

        this.render();
      }.bind(this),

      error: function (data, status) {
        console.log("flickr mapclick error");
        console.log("flickr mapclick error status: ", status);
      }

    }
    $.ajax(ajaxConfigObject);
  }


  render() {
    this.flickrDiv.empty();
    this.flickrImage = $("<div>", {
      "class": "flickrImage"
    }).css(
      "background-image", `url(https://farm${this.flickrFarm}.staticflickr.com/${this.flickrServer}/${this.flickrID}_${this.flickrSecret}.jpg)`
    );
    this.flickrDiv.append(this.flickrImage);
  }
}
