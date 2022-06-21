// displays the High, Low, Current and Feels Like
// can add a zip code to your project
// API from openweathermap.org.
// change the weather data from Kelvin to Farenheit:
//          ℉=((K-273.15)*1.8)+32

//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// API for latt/long
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

{
  // get input
let cityInput = document.getElementById("cityInputForm");

  // handleEvent --> first set function for click
  async function handleSubmit(event) {
    console.log(event.target);
    event.preventDefault();
    let userCity = event.target.city.value;
    console.log(userCity);
    let w = await getWeatherData(userCity);
    // get info from input, send to display output
    displayWeatherCityInfo(w);
    event.target.value = "";
  }

  //addEventListener
  cityInput.addEventListener("submit", handleSubmit);
  console.log(cityInput);

  // get API data

  async function getWeatherData(city) {
    let weatherCityAPIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    console.log(weatherCityAPIurl);
    try {
      let weatherCityRequest = await fetch(weatherCityAPIurl);
      let weatherCityData = await weatherCityRequest.json();
      return weatherCityData;
    } catch (err) {
      console.log("Houston, we have a problem");
      console.log(err);
    }
  }

  function displayWeatherCityInfo(weatherCityObj) {
    let currentTemp = `${weatherCityObj["main"]["temp"]}`;
    let condition = `${weatherCityObj["weather"][0]["main"]}`;
    let icon = `${weatherCityObj["weather"][0]["icon"]}`;
    let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    let feelsLike = `${weatherCityObj["main"]["feels_like"]}`;
    let maxTemp = `${weatherCityObj["main"]["temp_max"]}`;
    let minTemp = `${weatherCityObj["main"]["temp_min"]}`;

    // get div to display info:
    const weatherDataDisplay = document.getElementById("current");

    let content = "";

    //make current conditions card:
    const currRow = document.createElement("div");
    currRow.className = "row justify-content-md-center";
    weatherDataDisplay.append(currRow);
    const currCol = document.createElement("div");
    currCol.className = "col col-md-auto text-center text-middle";
    currRow.append(currCol);
    const currCard = document.createElement("div");
    currCard.className = "card";
    const currCardBody = document.createElement("div");
    currCardBody.className = "card-body fw-bold fs-2";
    currCardBody.innerHTML = `Currently ${currentTemp}&deg; and ${condition} in ${weatherCityObj["name"]}`;
    currCol.append(currCardBody);
    const iconCol = document.createElement("div");
    iconCol.className = "col col-1";
    currRow.append(iconCol);
    const currentIcon = document.createElement("img");
    currentIcon.src = iconURL;
    iconCol.append(currentIcon);

    var weather = [
      ["Feels Like:", feelsLike],
      ["High:", maxTemp],
      ["Low:", minTemp],
    ];

    weather.forEach((w) => {
      content += `
      <div class = "row justify-content-md-center">
        <div class = "col col-4">
          <div id="weatherCard" class="card text-center border-0">
              <div class="card-body">
                  <h3 class="card-title fw-bold">${w[0]}</h3>
                  <p class="card-text fs-3">${w[1]}&deg</p>
              </div>
          </div>
        </div>
      </div>
    `;
    });

    document.querySelector("#temps").innerHTML = content;

    // make feels like card:
    // feelsCard = new WeatherCard(`Feels Like:`, feelsLike);

    // const feelsRow = document.createElement("div");
    // feelsRow.className = "row justify-content-md-center";
    // weatherDataDisplay.append(feelsRow);
    // const feelsCol = document.createElement("div");
    // feelsCol.className = "col col-md-auto text-center text-middle";
    // feelsRow.append(feelsCol);
    // feelsCol.append(feelsCard);

    // //make high temp card:
    // hiCard = new WeatherCard(`High:`, maxTemp);
    // const hiRow = document.createElement("div");
    // hiRow.className = "row justify-content-md-center";
    // weatherDataDisplay.append(hiRow);
    // const hiCol = document.createElement("div");
    // hiCol.className = "col col-md-auto text-center text-middle";
    // hiRow.append(hiCol);
    // hiCol.append(hiCard);

    // //make low temp card:
    // loCard = new WeatherCard(`Low:`, minTemp);
    // const loRow = document.createElement("div");
    // loRow.className = "row justify-content-md-center";
    // weatherDataDisplay.append(loRow);
    // const loCol = document.createElement("div");
    // loCol.className = "col col-md-auto text-center text-middle";
    // loRow.append(loCol);
    // loCol.append(loCard);

    // //make row to display high & low together:
    // const hiLoCardRow = document.createElement("div");
    // hiLoCardRow.className = "row justify-content-md-center";
    // weatherDataDisplay.append(hiLoCardRow);
    // const hiLoCol = document.createElement("div");
    // hiLoCol.className = "col-4 text-center";
    // hiLoCardRow.append(hiLoCol);

    // hiLoCol.append(hiCard);
    // hiLoCol.append(loCard);
  }
  // end of module
}

// console.log(weatherCityObj);
// let temp = weatherCityObj["main"]["temp"];
// //
// console.log();
// console.log(temp);
// let maxiTemp = weatherCityObj["main"]["temp_max"];
// console.log(maxiTemp);
// let miniTemp = weatherCityObj["main"]["temp_min"];
// console.log(miniTemp);
// let feelLike = weatherCityObj["main"]["feels_like"];
// console.log(feelLike);

// let conditions = weatherCityObj["weather"][0]["main"];
// console.log(conditions);
// let icon0 = weatherCityObj["weather"][0]["icon"];
// console.log(icon0);