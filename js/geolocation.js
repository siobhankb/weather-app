{
  const key = "8f519a092dcc33fa81b709ac8021deb1";
  //get random lat/lon for page launch:
  function randomLocation() {
    let randomLatLon = {
      lat: (Math.floor(Math.random() * 180) - 90),
      lon: (Math.floor(Math.random() * 360) - 180),
    };
    return randomLatLon;
  }
    
//    let check1 = randomLocation();
//     console.log(`randomLocation returns: ${check1}`);

    async function getRandomPlaceName(lat, lon) {
        let randomPlaceAPIurl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${key}`;
        try {
        let randomPlaceRequest = await fetch(randomPlaceAPIurl);
            let randomPlaceData = await randomPlaceRequest.json();
            
        if (randomPlaceData === undefined) {
            console.log("hold on");
        } else {
            return randomPlaceData;
        }
        // try {
        //     console.log(randomPlaceData[0]["name"]);
        //     console.log(randomPlaceData[0]["country"]);
        // } catch (err) {

        //     console.log('everybody gets timbuktu')
        // }
        } catch (err) {
        console.log(err);
        }
    }
    //     let race_response = await fetch(raceAPIurl);
    //     let output = await race_response.json();
    async function getRandomWeatherData(lat, lon) {
        let weatherAPIurl = `https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        try {
          let weatherRequest = await fetch(weatherAPIurl);
            let weatherData = await weatherRequest.json();
            console.log(weatherData);
            return weatherData
        } catch (err) {
          console.log(err);
        }
    }

    const best_weather = [
        {'country': 'Columbia','city': "Medellin"},
        {'country': 'France', 'city': "Nice"},
        {'country':'Hawaii', 'city':"Oahu"},
        {'country':'Ecuador', 'city': "Loja"},
        {'country':'Kunming', 'city': "China"},
        {'country':'Brazil', 'city': "Sao Paolo"},
        {'country':'Australia', 'city': "Sydney"},
        {'country':'Spain', 'city': "Malaga"},
        {'country':'Mongolia', 'city': "Ulaanbaatar"}
    ];

    const best_cities = ["Medellin", "Nice", "Oahu", "Loja", "Kunming", "Sao Paolo", "Sydney", "Malaga", "Ulaanbaatar"];
    
    // let test_cities = best_cities[5];
    // console.log(test_cities)

    
    function getRandomWeather() {
        var randLatLon = randomLocation();
        var randLat = randLatLon["lat"];
        var randLon = randLatLon["lon"];
        var randomPlace = getRandomPlaceName(randLat, randLon);
        console.log(
          `getRandomWeather() => getRandomPlaceName => randomPlace is ${randomPlace}`
        );
        logRandomPlace(randomPlace);
        var randomWeather = getRandomWeatherData(randLat, randLon);
        let temp = randomWeather.coord.main;
        console.log(temp)
        console.log(`getRandomWeatherData returns ${randomWeather}`)
        logRandomWeather(randomWeather);
        //return randomPlace;
    }

    //   let check2 = getRandomWeather();
    //    console.log(`getRandomWeather returns: ${check2}`);

    // function getRandomWeather() {
    //     var randLatLon = randomLocation();
    //     var randLat = randLatLon["lat"];
    //     var randLon = randLatLon["lon"];
    //     var randomWeather = getRandomWeatherData(randLat, randLon);
    //     logRandomWeather(randomWeather)
    //     //return randomWeather;
    //     }
    
    // randomWeatherPlace;

    // city = randomPlace[0][name];
    // country = randPlaceObj[0][country];
    function logRandomPlace(randomPlace) {
        console.log(`city name: ${randomPlace}`);
    }
    function logRandomWeather(randomWeatherObj) {
    currentTemp = randomWeatherObj['coord']['weather'];
        console.log(`current weather: ${currentTemp}`);
    }

    let check3 = getRandomWeather();
    console.log(`getRandomWeather returns: ${check3}`);


  //end of module
}