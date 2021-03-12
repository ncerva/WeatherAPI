var submitEl = document.querySelector("#button")
  submitEl.addEventListener("click", function(){
    search() 
    fiveday()
  })

  function search(){
      var City = document.querySelector("#city").value
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="+City+"&appid=10be653bbee48a26f2018cfba53318a6")
    
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
     //   console.log(data);
        displayweather(data)
      });
  }

function displayweather(data){
    var currentWeatherEl = document.querySelector("#currentweather")
    document.querySelector("#cityName")
    .textContent = data.name
    var wind = document.createElement("h5")
    wind.textContent = "wind speed: "+ data.wind.speed
    currentWeatherEl.appendChild(wind)
}

function fiveday(){
var City = document.querySelector('#city').value
fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q="+City+"&appid=10be653bbee48a26f2018cfba53318a6")
    
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
   
    displayforecast(data)
      });
  }
function displayforecast(data){
    var results = data.list 
    var forecastEl = document.querySelector("#forecast")
    for(var i =0; i< 40 ; i+= 8){
var divcard = document.createElement("div")
divcard.classList.add("forecastcard")
var temp = document.createElement("h5")
temp.textContent = results[i].main.temp
divcard.appendChild(temp)
forecastEl.appendChild(divcard)
    }
}
