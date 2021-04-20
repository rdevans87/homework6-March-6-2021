 # 06 Server-Side APIs: Weather Dashboard

## Description

This application features a weather dashboard that runs in the browser and contains a variety of features and robust search capabilities, displaying precise data and up to date weather conditions for over 200,000 cities across the United States. Bootstrap was used to build the primary front-end framework with additional HTML and CSS properties added for a more personalized style and responsive design. This app relies heavily on Javascript methods and principles to provide the essential functionality outlined in the acceptance criteria.  

In addition, this app required data requests from two different server-side APIs in order to obtain the accurate weather conditions and icon representations needed for both current and future conditions. [OpenWeather API](https://openweathermap.org/api) is a team of IT experts and data scientists that has been practiscing deep weather data science since 2014. For each point on the globe, OpenWeather provides historical, current and forecasted weather data via light-speed APIs.

APIs USED:

[Current Weather Data](https://openweathermap.org/current) 

City, Date, Icon-image
Temperature
Humidity
Wind Speed
UV index

[One Call](https://openweathermap.org/api/one-call-api) 

Date
Icon image
Temperature
Humidity

The Current Weather Data API was used as the primary search parameter "By City Name". The user can type any city name and hit "submit" to see the current weather including the specific conditions temperature, humidity, wind speed. The One Call API was used to retrieve the UVindex along with the 5 day forecast.  `localStorage` is used store specific parameters of the search, which are listed below the search bar. 


## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following images shows the web application's appearance and functionality:



## Grading Requirements

### Technical Acceptance Criteria: 40%

### Deployment: 32%

### Application Quality: 15%

### Repository Quality: 13%

## Review


