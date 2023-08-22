var key = "340f0ef6e6f2e574a11b35b2305eb75e"
var searchInput = document.querySelector("#search-input")
var searchBtn = document.querySelector(".btn")
var currentTemp = document.querySelector(".current-temperature")
var currenthumidity = document.querySelector(".current-humidity")
var currentWind = document.querySelector(".current-wind")
var icon = document.querySelector(".icon")
var futuredate = document.querySelector("future-date-1")
var futuretemp
var futurehumidit
var futurewind
var 
searchBtn.addEventListener("click", function() {
    var history = JSON.parse(localStorage.getItem("history")) || []
    var city = searchInput.value
    fetchData(city)
    history.push(city)
    localStorage.setItem("history", JSON.stringify(history))
})

function fetchData(city) {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        currentTemp.innerHTML = "Temp: " + data.main.temp + "&#176F"
        currenthumidity.innerHTML = "Hum: " + data.main.humidity + "%"
        currentWind.innerHTML = "Wind: " + data.wind.speed + "MP/H"
        
        icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)   
    })                            
}



function fetchData(city) {
 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`)
 .then(function(res) {
    return res.json()
})
.then(function(data) {
    console.log(data)
    currentTemp.innerHTML = "Temp: " + data.main.temp + "&#176F"
    currenthumidity.innerHTML = "Hum: " + data.main.humidity + "%"
    currentWind.innerHTML = "Wind: " + data.wind.speed + "MP/H"


}



   
