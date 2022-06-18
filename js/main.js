// displays the High, Low, Current and Feels Like
// can add a zip code to your project 
// API from openweathermap.org.
// change the weather data from Kelvin to Farenheit:
//          ℉=((K-273.15)*1.8)+32

//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// 8f519a092dcc33fa81b709ac8021deb1
console.log("when the going gets tough...");

// https://api.openweathermap.org/data/2.5/weather?q=Lakewood&appid=8f519a092dcc33fa81b709ac8021deb1


// API for latt/long
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const key = "8f519a092dcc33fa81b709ac8021deb1";
{
    async function getWeatherData(city) {
        let weatherCityAPIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
        try {
            let weatherCityRequest = await fetch(weatherCityAPIurl);
            let weatherCityData = await weatherCityRequest.json();
            console.log(`weatherCityData is ${weatherCityData}`);
            displayWeatherCityInfo(weatherCityData);
            return weatherCityData;
        } catch (err) {
            console.log('Houston, we have a problem')
            console.log(err)
        }
    }

getWeatherData('Lakewood');
    
    function displayWeatherCityInfo(weatherCityObj) {
      let currentTemp = `${weatherCityObj["main"]["temp"]}`;
      let condition = `${weatherCityObj["weather"][0]["main"]}`;
      let icon = `${weatherCityObj["weather"][0]["icon"]}`;
      let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      let feelsLike = `${weatherCityObj["main"]["feels_like"]}`;
      let maxTemp = `${weatherCityObj["main"]["temp_max"]}`;
      let minTemp = `${weatherCityObj["main"]["temp_min"]}`;

      const weatherDataDisplay = document.getElementById("new-data");

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
      currCardBody.innerHTML = `Currently ${currentTemp}&deg; in ${weatherCityObj["name"]}`;
      const current = document.createElement("h4");
      currCol.append(currCardBody);
      const iconCol = document.createElement("div");
      iconCol.className = "col col-1";
      currRow.append(iconCol);
      const currentIcon = document.createElement("img");
      currentIcon.src = iconURL;
      iconCol.append(currentIcon);

      const feelsCard = document.createElement("div");
      feelsCard.className = "card pt-3";
      const feelsCardTitle = document.createElement("h3");
      feelsCardTitle.className = "card-title";
      feelsCardTitle.innerHTML = "Feels Like:";
      const feelsCardBody = document.createElement("div");
      feelsCardBody.className = "card-body";
      const feelsText = document.createElement("h3");
      feelsText.className = "card-title";
      feelsText.innerHTML = `${feelsLike}&deg;`;
      const feelsRow = document.createElement("div");
      feelsRow.className = "row justify-content-md-center";
      weatherDataDisplay.append(feelsRow);
      const feelsCol = document.createElement("div");
      feelsCol.className = "col-4 text-center";
      feelsRow.append(feelsCol);
      feelsCol.append(feelsCard);
      feelsCard.append(feelsCardTitle);
      feelsCard.append(feelsCardBody);
      feelsCardBody.append(feelsText);

        const hiLoCardRow = document.createElement("div");
        hiLoCardRow.className = "row justify-content-md-center";
        weatherDataDisplay.append(hiLoCardRow);
        const hiLoCol = document.createElement("div");
        hiLoCol.className = "col-4 text-center";
        hiLoCardRow.append(hiLoCol);
        const hiLoCard = document.createElement("div");
        hiLoCard.className = "card pt-3";
        hiLoCol.append(hiLoCard);

        const hiLoRow = document.createElement('div');
        hiLoRow.className = "row justify-content-md-center";
        hiLoCard.append(hiLoRow);
        // const hiCol = document.createElement('div');
        // hiCol.className = 'col'
        // hiCol.append()

      const maxCard = document.createElement("div");
      maxCard.className = "card pt-3";
      const maxCardTitle = document.createElement("h3");
      maxCardTitle.className = "card-title";
      maxCardTitle.innerHTML = "High:";
      const maxCardBody = document.createElement("div");
      maxCardBody.className = "card-body";
      const maxText = document.createElement("h3");
      maxText.className = "card-title";
      maxText.innerHTML = `${maxTemp}&deg;`;
      const maxCol = document.createElement("div");
      maxCol.className = "col-4 text-center";
      hiLoRow.append(maxCol);
      maxCol.append(maxCard);
      maxCard.append(maxCardTitle);
      maxCard.append(maxCardBody);
      maxCardBody.append(maxText);

      const minCard = document.createElement("div");
      minCard.className = "card pt-3";
      const minCardTitle = document.createElement("h3");
      minCardTitle.className = "card-title";
      minCardTitle.innerHTML = "Low:";
      const minCardBody = document.createElement("div");
      minCardBody.className = "card-body";
      const minText = document.createElement("h3");
      minText.className = "card-title";
      minText.innerHTML = `${minTemp}&deg;`;
      const minCol = document.createElement("div");
      minCol.className = "col-4 text-center";
      hiLoRow.append(minCol);
      minCol.append(minCard);
      minCard.append(minCardTitle);
      minCard.append(minCardBody);
      minCardBody.append(minText);

      console.log(weatherCityObj);
      let temp = weatherCityObj["main"]["temp"];
      //
      console.log();
      console.log(temp);
      let maxiTemp = weatherCityObj["main"]["temp_max"];
      console.log(maxiTemp);
      let miniTemp = weatherCityObj["main"]["temp_min"];
      console.log(miniTemp);
      let feelLike = weatherCityObj["main"]["feels_like"];
      console.log(feelLike);

      let conditions = weatherCityObj["weather"][0]["main"];
      console.log(conditions);
      let icon0 = weatherCityObj["weather"][0]["icon"];
      console.log(icon0);
      // currentTemp = randomWeatherObj;
      // console.log(`current weather: ${currentTemp}`);
    }
// end of module    
}
