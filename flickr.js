

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
