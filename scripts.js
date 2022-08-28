// Openweathermap API appKey
var api = 'a12134e03f5366a89d3e1787025a21c4';
var cname = "citysearch"
var iconImg = document.getElementById('weather-icon');
var loc = document.querySelector('#location');
var tempC = document.querySelector('.c');
var tempF = document.querySelector('.f');
var desc = document.querySelector('.desc');
var sunriseDOM = document.querySelector('.sunrise');
var sunsetDOM = document.querySelector('.sunset');
var wind = document.querySelector('wind-speed')
//var csearch = "cincinnati"  

window.addEventListener('load', () => {
  var long;
  var lat;
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      var base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var { temp, humidity } = data.main;
          var place = data.name;
          var { description, icon } = data.weather[0];
          var { sunrise, sunset } = data.sys;
          var { speed } = data.wind;
          var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          var fahrenheit = (temp * 9) / 5 + 32;

          // Converting Epoch(Unix) time to GMT
          var sunriseGMT = new Date(sunrise * 1000);
          var sunsetGMT = new Date(sunset * 1000);
          var ws = speed
          var humi = humidity
          
          document.getElementById("newws").innerHTML=ws;
          document.getElementById("humi").innerHTML=humi;
          
         
          // Interacting with DOM to show data
          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          /*sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;*/
          /*sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;*/
          ws = speed.toString()
          humi = humidity.toString()
          
          });
    });
  }
});


var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

function newcity(long, lat) {
  //long = -84.0267033
  //lat = 39.4093456
 
 var base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
 

  fetch(base)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var { temp, humidity } = data.main;
    var place = data.name;
    var { description, icon } = data.weather[0];
    var { sunrise, sunset } = data.sys;
    var { speed } = data.wind;
    var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    var fahrenheit = (temp * 9) / 5 + 32;

    // Converting Epoch(Unix) time to GMT
    var sunriseGMT = new Date(sunrise * 1000);
    var sunsetGMT = new Date(sunset * 1000);
    var ws = speed
    var humi = humidity
    
    
    document.getElementById("newws").innerHTML=ws;
    document.getElementById("humi").innerHTML=humi;
    
   
    // Interacting with DOM to show data
    iconImg.src = iconUrl;
    loc.textContent = `${place}`;
    desc.textContent = `${description}`;
    tempC.textContent = `${temp.toFixed(2)} °C`;
    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
   // sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
    //sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
    ws = speed.toString()
    humi = humidity.toString()

  });

}

function bycity(csearch) {
  var value = document.getElementById("csearch").value
 console.log(value)
 console.log(api)
 
 var newlocation =  'http://api.positionstack.com/v1/forward?access_key=bad1b77df306b29df1dd5d73b4105a2c&query=${value}';


 var basecity = 'https://api.openweathermap.org/data/2.5/weather?q=${value}&callback=test&appid=a12134e03f5366a89d3e1787025a21c4&units=metric';
 

  fetch(basecity)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var { temp, humidity } = data.main;
    var place = data.name;
    var { description, icon } = data.weather[0];
    var { sunrise, sunset } = data.sys;
    var { speed } = data.wind;
    var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    var fahrenheit = (temp * 9) / 5 + 32;

    // Converting Epoch(Unix) time to GMT
    var sunriseGMT = new Date(sunrise * 1000);
    var sunsetGMT = new Date(sunset * 1000);
    var ws = speed
    var humi = humidity
        
    document.getElementById("newws").innerHTML=ws;
    document.getElementById("humi").innerHTML=humi;
       
    // Interacting with DOM to show data
    iconImg.src = iconUrl;
    loc.textContent = `${place}`;
    desc.textContent = `${description}`;
    tempC.textContent = `${temp.toFixed(2)} °C`;
    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
    //sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
    //sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
    ws = speed.toString()
    humi = humidity.toString()

  });

}










