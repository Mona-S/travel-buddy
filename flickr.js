
class Weather {
  constructor() {
    this.cityInput = $("#cityInput").val();
    this.weatherKey = "1bbacff3b2de1a2d552fd93a8e0e8ef1";
    this.weatherDiv = $(".weather");
    this.getWeather = this.getWeather.bind(this);
    console.log("weather button clicked");
  }

  getWeather() {
    debugger;
    let ajaxConfigObject = {
      url: "http://api.openweathermap.org/data/2.5/weather",
      dataType: "json",
      data: {
        q: this.cityInput,
        appid: this.weatherKey,
        units: "imperial"
      },

    success: function( data, status) {
      console.log("weather data: ", data);
      console.log("weather success status: ", status);

      this.weatherCity = data.name;
      this.country = data.sys.country;
      this.mainTemp = data.main.temp;
      this.mainWeather = data.weather[0].main;

      this.render();
      }.bind(this),
      error: function( data, status) {
        console.log("weather error status: ", status);
      }
    }
    $.ajax(ajaxConfigObject)
  }

  render() {
    this.weatherContainer = $("<p>");
    this.weatherConditionContainer = $("<p>");

    this.weatherContainer.append(`${this.weatherCity} | ${this.country} | IMG`);
    this.weatherConditionContainer.append(`${this.mainTemp}F | ${this.mainWeather}`);

    this.weatherDiv.append(this.weatherContainer, this.weatherConditionContainer);
  }
}
