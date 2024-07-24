const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "29aae28f9fmshf23400f51987447p1c42d0jsn2543208013cc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = async (city) => {
  try {
    cityName.innerHTML = city;
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    );
    const result = await response.json();
    console.log(result);

    // cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;

    const timestamp = result.sunrise;
    const milliseconds = timestamp * 1000;
    // Create a new Date object with the milliseconds
    const dateObject = new Date(milliseconds);

    // Get the components of the date (hours, minutes, seconds)
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    // Format the time in a readable format (e.g., HH:MM:SS)
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    sunrise.innerHTML = formattedTime;

    const timestamp1 = result.sunset;
      const milliseconds1 = timestamp1 * 1000;
      // Create a new Date object with the milliseconds
      const dateObject1 = new Date(milliseconds1);

      // Get the components of the date (hours, minutes, seconds)
      const hours1 = dateObject1.getHours();
      const minutes1 = dateObject1.getMinutes();
      const seconds1 = dateObject1.getSeconds();
      // Format the time in a readable format (e.g., HH:MM:SS)
      const formattedTime1 = `${hours1}:${minutes1}:${seconds1}`;
    sunset.innerHTML = formattedTime1;
  } catch (error) {
    console.error(error);
  }
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(incity.value);
});
getweather("Delhi");

// const citi="goa";

// document.querySelector(`tr.${citi} td#cp`).innerHTML=30;

const updateweather = async () => {
  const cities = ["goa", "Chandigarh", "Shimla", "Ranchi", "Jaipur", "Lucknow"];

  for (const city of cities) {
    const weatherData = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    );
    const res = await weatherData.json();
    // console.log(res)
    if (weatherData) {
      document.querySelector(`tr.${city} td#cp`).innerHTML = res.cloud_pct;
      document.querySelector(`tr.${city} td#te`).innerHTML = res.temp;
      document.querySelector(`tr.${city} td#fl`).innerHTML = res.feels_like;
      document.querySelector(`tr.${city} td#hum`).innerHTML = res.humidity;
      document.querySelector(`tr.${city} td#mit`).innerHTML = res.min_temp;
      document.querySelector(`tr.${city} td#mat`).innerHTML = res.max_temp;
      document.querySelector(`tr.${city} td#ws`).innerHTML = res.wind_speed;
      document.querySelector(`tr.${city} td#wd`).innerHTML = res.wind_degrees;

      const timestamp = res.sunrise;
      const milliseconds = timestamp * 1000;
      // Create a new Date object with the milliseconds
      const dateObject = new Date(milliseconds);

      // Get the components of the date (hours, minutes, seconds)
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const seconds = dateObject.getSeconds();

      // Format the time in a readable format (e.g., HH:MM:SS)
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      document.querySelector(`tr.${city} td#sr`).innerHTML = formattedTime + 'am';

      const timestamp1 = res.sunset;
      const milliseconds1 = timestamp1 * 1000;
      // Create a new Date object with the milliseconds
      const dateObject1 = new Date(milliseconds1);

      // Get the components of the date (hours, minutes, seconds)
      const hours1 = dateObject1.getHours();
      const minutes1 = dateObject1.getMinutes();
      const seconds1 = dateObject1.getSeconds();
      // Format the time in a readable format (e.g., HH:MM:SS)
      const formattedTime1 = `${hours1}:${minutes1}:${seconds1}`;
      document.querySelector(`tr.${city} td#ss`).innerHTML = formattedTime1;
    }
  }
};

// Call the function to update weather data for each city when the page loads
updateweather();
