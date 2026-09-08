
let cityInput = document.querySelector("#cityInput")
let searchBtn =  document.querySelector("#searchBtn")
let city =  document.querySelector("#city")
let temperature = document.querySelector("#Temperature")
let Weather = document.querySelector("#weather");

let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let windDir = document.querySelector("#windDir");
let feelsLike = document.querySelector("#feelsLike");
let cloud = document.querySelector("#cloud");
let pressure = document.querySelector("#pressure");
let precip = document.querySelector("#precip");

let uv = document.querySelector("#uv");
let visibility = document.querySelector("#visibility");
let dewPoint = document.querySelector("#dewPoint");



let getweather = async function weather() {
  let location = cityInput.value
    let url = `https://api.weatherapi.com/v1/current.json?key=8901d86538774341ae0163103260906&q=${location}&aqi=no`
    let response = await fetch(url)
   

let data = await response.json()





 temperature.innerText = "TEMPERATURE = "+data.current.temp_c+"°C"
 wind.innerHTML = "WIND SPEED = "+data.current.wind_kph+"KPH"
 humidity.innerHTML = "HUMIDITY = "+data.current.humidity+"%"
 city.innerHTML = "CITY / STATE / VILLAGE = "+data.location.name
Weather.innerText = "WEATHER = " + data.current.condition.text
windDir.innerText ="WIND DIRECTION = " + data.current.wind_dir
pressure.innerText ="PRESSURE = " + data.current.pressure_mb + " mb"
cloud.innerText ="CLOUD = " + data.current.cloud + "%"

visibility.innerText ="VISIBILITY = " + data.current.vis_km + " km";
dewPoint.innerText ="DEW POINT = " + data.current.dewpoint_c + "°C"
uv.innerText ="UV INDEX = " + data.current.uv
precip.innerText ="PRECIPITATION = " + data.current.precip_mm +"mm"
feelsLike.innerText ="FEELS LIKE = " + data.current.feelslike_c +"°C"










}
searchBtn.addEventListener("click", getweather)
cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getweather();
    }
})