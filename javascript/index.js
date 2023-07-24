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

  // hawaii
  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiTimeElement = hawaiiElement.querySelector(".time");
  let hawaiiDateElement = hawaiiElement.querySelector(".date");
  let hawaiiTime = moment().tz("US/Hawaii");
  hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM Do YYYY");
  hawaiiTimeElement.innerHTML = hawaiiTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
