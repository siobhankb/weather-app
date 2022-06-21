
class WeatherCard {
  constructor(titleString, weatherDataPoint) {
    const aCard = document.createElement("div");
    aCard.className = "card pt-3";
    aCardCol.append(aCard);
    const aCardTitle = document.createElement("h3");
    aCardTitle.className = "card-title";
    aCardTitle.innerHTML = titleString;
    aCard.append(aCardTitle);
    const aCardBody = document.createElement("div");
    aCardBody.className = "card-body";
    aCard.append(aCardBody);
    const aCardText = document.createElement("h3");
    aCardText.className = "card-title";
    aCardText.innerHTML = `${weatherDataPoint}&deg;`;
    aCardBody.append(aCardText);
  }
}

class WeatherCard {
  constructor(titleString, weatherDataPoint) {
    this.titleString = titleString;
    this.weatherDataPoint = weatherDataPoint;
  }
  element() {
    this.card = document.createElement("div");
    this.card.className = "card";
  }

  title() {
    this.aCardTitle = document.createElement("h3");
    this.aCardTitle.className = "card-title";
    this.aCardTitle.innerHTML = this.titleString;
    this.element.append(aCardTitle);
  }

  body() {
    this.aCardBody = document.createElement("div");
    this.aCardBody.className = "card-body";
    this.element.append(this.aCardBody);
  }

  text() {
    this.CardText = document.createElement("h3");
    this.CardText.className = "card-title";
    this.CardText.innerHTML = `${this.weatherDataPoint}&deg;`;
    this.CardBody.append(this.CardText);
  }
}

var weather = [
  ['Feels Like:', feelsLike],
  ['High:', maxTemp],
  ['Low:', minTemp]
];

let content = "";

items.forEach((w) => {
  content += `
    <div id="weatherCard" class="card">
        <div class="card-body">
            <h3 class="card-title">${w[0]}</h3>
            <p class="card-text fs-3 fw-bold">${w[1]}</p>
        </div>
    </div>
  `;
});

document.querySelector("#new-data").innerHTML = content;
