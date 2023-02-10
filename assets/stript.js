var tripadvisorApi = "E8D9341F383847AAB98EE89426A15F8C"
var weatherApi = "a7cf6d8b7818bef7a79d89c363469555"
var weatherIcon = document.querySelector("img")
var hideImg = document.getElementsByClassName("hide")

function searchCity(cityName) {
  var cityName = document.getElementById("city-input").value
  var searchUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApi}&units=imperial`
  fetch(searchUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
          console.log(data)
          var description = data.weather[0].description
          var iconCode = data.weather[0].icon
          var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
          $('#wicon').attr("src", iconUrl);
          console.log(description)
          if (description === 'rain'){
           $("#hide").attr("id", "bkrnd-img")
          }
          
        })
       


}




document.getElementById("btn").addEventListener("click", searchCity)