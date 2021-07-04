// Code to fetch AccuWeather API
const temp = document.querySelector(".temp");
const icon = document.querySelector(".iconWeather img");

// AccuWeather authorization key

const key = "gMWN0JqP9edRf3cAO5nByGloscV8LiyO";

// funtion to update weather conditions and insert into the webpage
const updateWeather = (data) => {
  const weather = data;
  const htmlTemp = `
  <span>${weather.Temperature.Imperial.Value}</span><span>&deg;F ${weather.WeatherText}</span>
 `;
  temp.innerHTML = htmlTemp;

  // Update icon images
  // The AccuWeather's WeatherIcon property provides a unique number that we can match icon images to.
  const iconSrc = `img/imgIcon/icons/${weather.WeatherIcon}.svg`;

  icon.setAttribute("src", iconSrc);

  // console.log(weather);
  // console.log(weather.Temperature.Imperial.Value);
  // console.log(weather.WeatherIcon);
};

// get weather information
const getWeather = async () => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/348428?apikey=${key}`;

  // Wait until the promise has resolved and then get the data response object back and asign it to the response const variable
  const response = await fetch(base);

  // Wait until the promise has resolved and then using the json() method get the response object, and then pass or convert that into a javascript array object and store that in const data
  const data = await response.json();
  console.log(data[0]);
  return data[0];
};

getWeather()
  .then((data) => updateWeather(data))
  .catch((err) => console.log(err));
