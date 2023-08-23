var key = "340f0ef6e6f2e574a11b35b2305eb75e"
var searchInput = document.querySelector("#search-input")
var searchBtn = document.querySelector(".btn")
var currentTemp = document.querySelector(".current-temperature")
var currenthumidity = document.querySelector(".current-humidity")
var currentWind = document.querySelector(".current-wind")
var icon = document.querySelector(".icon")
var futuredate = document.querySelector("future-date-1")
var futuretemp = document.querySelector("future-temp-1")
var futurehumidit = document.querySelector("future-humidity-1")
var futurewind = document.querySelector("future-wind-1")



searchBtn.addEventListener("click", function() {
    var history = JSON.parse(localStorage.getItem("history")) || []
    var city = searchInput.value
    var futuredate = searchInput.value
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


// function fetchData(city){
//     fetch('https://api.openweathermap.org/data/3.0/onecall?q=${city}&dt=1643803200&appid={key}&units=imperial')
//     .then(function(res) {
//         return res.json()
//     })

//     .then(function(data) {
//         console.log(data)
//         var firstForecast = data.list[0];
//         var temperature = firstForecast.main.temp;
    
//         futuretemp.innerHTML = "Temp: " + temperature + "&#176F";
//     })
// }

