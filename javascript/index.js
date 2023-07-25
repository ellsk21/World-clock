function updateTime() {
  // los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  // hawaii
  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiTimeElement = hawaiiElement.querySelector(".time");
  let hawaiiDateElement = hawaiiElement.querySelector(".date");
  let hawaiiTime = moment().tz("US/Hawaii");
  hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM Do YYYY");
  hawaiiTimeElement.innerHTML = hawaiiTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  // dubai
  let dubaiElement = document.querySelector("#dubai");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTime = moment().tz("Asia/Dubai");
  dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
  dubaiTimeElement.innerHTML = dubaiTime.format("h:mm:ss[<small>]A[</small>]");

  // madrid
  let madridElement = document.querySelector("#madrid");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTime = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div></div>
   <a href="index.html"> Back to cities<a/>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
