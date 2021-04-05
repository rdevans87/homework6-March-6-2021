var resultContent = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");
var backButtonEl = document.getElementById("#back-button");
var forecastResults = document.querySelector("#forecast-results")
var weatherIcon = document.querySelector("#weather-icon")


function getWeatherOnSubmit(event) {
  event.preventDefault();

  var cityInputVal = document.querySelector('#city-input').value;
  //connnect to open weather API five day forecast. cityInput as value.
  var openWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&units=imperial" + "&appid=" + "b0ff6d197a40a5f8e42c9a3871298d52";

  openWeatherApi = openWeatherApi + '&q=' + cityInputVal;

  fetch(openWeatherApi)
    .then(function (response) {
      console.log(response)
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var city = cityInputVal;
      console.log(city);
      for (var i = 0; i < city.length; i++) {
      city[i] = localStorage.setItem("city", city);
      var citySearchList = document.querySelector(".list-group-item");
      citySearchList.append(city);
      document.getElementById("city1").innerHTML = city.toString(i);
      searchOne = localStorage.getItem("city");
     
    
      }     
         //use cityInput coordinates from forecast to apply Onecall Api for current weather and UV index. UV Index API deprecated on 04/01/2020.
          var apiOneCall = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + data.city.coord.lat + "&lon=" + data.city.coord.lon + "&units=imperial" + "&appid=" + "b0ff6d197a40a5f8e42c9a3871298d52";

       fetch(apiOneCall)
        .then(function (response) {
        console.log(response)
        return response.json();
       })
        .then(function (data) {
         console.log(data);
           var humidity = data.current.humidity;
           var uvi = data.current.uvi;
           var temp = data.current.temp;
          var wind_speed = data.current.wind_speed;
          var currentWeather = data.current.weather[0].description;
          console.log(uvi, temp, humidity, wind_speed, currentWeather);
         resultContent = document.querySelector('#result-content');
         resultContent.innerHTML = "<h2>City: " + city.toUpperCase(city) + "</h2>" + "<br>" + "<p>Forecast: " + "<strong>" + currentWeather + "</strong>" + "</p>" + "<li>Temperature: " + "<strong>" +
          temp + "&#8457" + "</strong>" + "</li>" + "<br>" + "<li>Humidity: " + "<strong>" + humidity + "%" + "</strong>" + "</li>" + "<br>" + "<li>Wind Speed: " + "<strong>" + wind_speed + " MPH" + "</strong>" + "</li>" + "<br>" + "<li>UV Index: " + "<strong>" + uvi + "</strong>" + "</li>";
          // var weatherIcon = currentWeather.icon[1];
          // weatherIcon = document.getElementById("#weather-icon").innerHTML = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
          tempZero = data.daily[0].temp.day;
          humidityZero= data.daily[0].humidity
          uviZero= data.daily[0].uvi 
        console.log(humidityZero, tempZero, uviZero)
         forecastResults = document.querySelector('#dayOne');
          forecastResults.innerHTML = "<h3>Date: " + "</h3>" + "<br>" + "<p>Temperature: " + tempZero + "&#8457" + "</p>" + "<br>" + "<p>Humidity: " + humidityZero + "%" + "</p>" + "<br>" + "<p>UV Index: " + uviZero + "</p>" ;                                 
        
        })  

        
       
                 
    });

       

          
 
            //   <div class="box" id="dayTwo">
            //      <h3>Date:</h3>
            //       <br>
            //     <p>Temp:</p>
            //    <p>Humidity:</p>
            //   <p>UV index:</p>
            //  </div>
            //   </div>

            // <div class="column">
            //  <div class="box" id="dayThree">
            //    <h3>Date:</h3>
            //     <br>
            //    <p>Temp:</p>
            //    <p>Humidity:</p>
            //    <p>UV index:</p>
            //   </div>
            //     </div>

            //   <div class="column">
            //     <div class="box" id="dayFour">
            //       <h3>Date:</h3>
            //       <br>
            //       <p>Temp:</p>
            //        <p>Humidity:</p>
            //      <p>UV index:</p>
            //     </div>
            //     </div>
            //     <div class="column">
            //       <div class="box" id="dayThree">
            //      <h3>Date:</h3>
            //       <br>
            //      <p>Temp:</p>
            //     <p>Humidity:</p>
            //    <p>UV index:</p>
            //     </div>

        
            //   var weatherIcon =icon[0];
            // weatherIcon.append(weatherIcon)
            // var weather = document.querySelector("#weather-icon")
            // weather = data.current.weather[0];
            // var weatherIcon = data.weather.id().description.icon;
            // var iconImage = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            // var imgData = iconImage;
            // imgData.append(iconImage);




}              

searchFormEl.addEventListener('submit', getWeatherOnSubmit);