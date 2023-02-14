var rapidapikey = "c847c94837msh769cdaeccd7bcbdp1df16ajsn03d64a2f2860"
var weatherApi = "a7cf6d8b7818bef7a79d89c363469555"
var weatherIcon = document.querySelector("img");
var hideImg = document.getElementsByClassName("hide");
var resultEl = document.querySelector('#result');
var resultCo = document.querySelector('#result-contents');
var searchFormEl = document.querySelector('#search-form');

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

