
class Weather {
  constructor() {
    this.cityInput;
    this.weatherKey = "1bbacff3b2de1a2d552fd93a8e0e8ef1";
    this.weatherDiv = $(".weather");
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
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
      this.mainTemp = data.main.temp + "f";
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
    this.weatherDiv.empty();

    //this.weatherContainer = $("<p>");
    this.weatherConditionContainer = $("<p>");

    //this.weatherContainer.append(`${this.weatherCity} | IMG`);
    this.weatherConditionContainer.append(`${this.mainTemp} | ${this.mainWeather}`);

    this.weatherDiv.append(this.weatherContainer, this.weatherConditionContainer);
  }
}
