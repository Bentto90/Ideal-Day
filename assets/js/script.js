var rapidapikey = "c847c94837msh769cdaeccd7bcbdp1df16ajsn03d64a2f2860"
var weatherApi = "a7cf6d8b7818bef7a79d89c363469555"
var weatherIcon = document.querySelector("img");
var hideImg = document.getElementsByClassName("hide");
var resultEl = document.querySelector('#result');
var resultCo = document.querySelector('#result-contents');
var searchFormEl = document.querySelector('#search-form');
var resultEl = document.querySelector('#result');
var resultCo = document.querySelector('#result-contents');
var searchFormEl = document.querySelector('#search-form');
var tempText = document.getElementById("temp")
var weatherName = document.getElementById("city-name")
var weatherDescription = document.getElementById("weather")


function addHidden() {

      $("#rainy").removeClass()
      $("#cloudy").removeClass()
      $("#clear").removeClass()
      $("#snowy").removeClass()
    searchCity()
  }




function searchCity(cityName) {
  var cityName = document.getElementById("city-input").value
  var searchUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApi}&units=imperial`
  fetch(searchUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
          console.log(data)
          var mainWeather = data.weather[0].main
          var iconCode = data.weather[0].icon
          var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
          $('#wicon').attr("src", iconUrl);
          console.log(mainWeather)
          weatherName.innerText = data.name
          tempText.innerText = "Temp: " + data.main.temp + "°F"
          weatherDescription.innerText = data.weather[0].description
         
           if (mainWeather === 'Rain'){
            $("#rainy").attr("class", "bkrnd-img")
           }
           else if (mainWeather === 'Clear'){
            $("#clear").attr("class", "bkrnd-img")
           }
           else if (mainWeather === 'Clouds'){
            $("#cloudy").attr("class", "bkrnd-img")
           }
           else if (mainWeather === 'Snow'){
            $("#snowy").attr("class", "bkrnd-img")
           }
          
        })}


document.getElementById("btn").addEventListener("click", searchCity)


// jquery js
$( function() {
  $( ".column" ).sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $( ".portlet" )
    .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    .find( ".portlet-header" )
      .addClass( "ui-widget-header ui-corner-all" )
      .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $( ".portlet-toggle" ).on( "click", function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  });
} );
// end

document.getElementById("btn").addEventListener("click", addHidden)
