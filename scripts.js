// Openweathermap API appKey
var api = 'a12134e03f5366a89d3e1787025a21c4';

// Will be the name of the city that the user enters
var cname = "citysearch"
// Pulled from the api
var iconImg = document.getElementById('weather-icon');
// The location being displayed
var loc = document.querySelector('#location');
// Temperature in Celcius from the api
var tempC = document.querySelector('.c');
// Temperature in Farenheit from the api
var tempF = document.querySelector('.f');
// The description returned from the api
var desc = document.querySelector('.desc');
// Wind speed returned from the api
var wind = document.querySelector('wind-speed')
var csearch = ""

// Returns the date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "(" + m + "/" + d + "/" + y + ")";

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
          var { icon } = data.weather[0];
          var { speed } = data.wind;
          var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          var fahrenheit = (temp * 9) / 5 + 32;
          var ws = speed
          var humi = humidity
        
          document.getElementById("newws").innerHTML=ws;
          document.getElementById("humi").innerHTML=humi;

          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          /*desc.textContent = `${description}`;*/
          tempC.textContent = `${temp.toFixed(2)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          ws = speed.toString()

          console.log(data)
          
          forecast(lat, long)

          });
        });
   }
});


function getInputValue() {
  var scity =document.getElementById("csearch").value
  
  var basecity = `https://api.openweathermap.org/data/2.5/weather?q=${scity}&appid=a12134e03f5366a89d3e1787025a21c4&units=metric`;
  fetch(basecity)
 .then((response) => {
   return response.json();
 })
 .then((data) => {
   lat = data.coord.lat
   lon = data.coord.lon

     // Load the coordinates into function newcity to populate the page
   newcity(lon, lat)
   
 });

}

// -----------------------------------------------------------------------------------------------------------------------
function newcity(long, lat) {
   
 var base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
  fetch(base)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var { temp, humidity } = data.main;
    var place = data.name;
    var { description, icon } = data.weather[0];
    // var { sunrise, sunset } = data.sys;
    var { speed } = data.wind;
    var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    var fahrenheit = (temp * 9) / 5 + 32;
    var ws = speed
    var humi = humidity
        
    document.getElementById("newws").innerHTML=ws;
    document.getElementById("humi").innerHTML=humi;
    
    iconImg.src = iconUrl;
    loc.textContent = `${place}`;
    tempC.textContent = `${temp.toFixed(2)} °C`;
    tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
    ws = speed.toString()
    forecast(lat, long)
  });
   

}

// -------------------------------------------------------------------------------------------------------
function bycity() {
   
 
  //Get the coordinates of the city (csearch)
 var basecity = `https://api.openweathermap.org/data/2.5/weather?q=${scity}&appid=a12134e03f5366a89d3e1787025a21c4&units=metric`;
   fetch(basecity)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    lat = data.coord.lat
    lon = data.coord.lon
    // Load the coordinates into function newcity to populate the page
    newcity(lon, lat)
  });
}

//--------------------------------------------------------------------------------------------------------
function forecast(lat, long) {
  
var future = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${api}`;
  
    //var iconImg = document.getElementById('weather-image');


    fetch(future)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
          console.log(data.list)
                   
        for(let i = 0; i < 5; i++) {
          var date= new Date((data.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
          var iconcode= data.list[((i+1)*8)-1].weather[0].icon;
          var iconImg = `http://openweathermap.org/img/wn/${iconcode}@2x.png`;
              
          document.getElementById('image'+(i+1)).innerHTML = iconImg;
          iconImg.src = ('image'+(i+1));

          var tempK= data.list[((i+1)*8)-1].main.temp;
          var tempf=(((tempK-273.5)*1.80)+32).toFixed(2);
          var swind= data.list[((i+1)*8)-1].wind.speed;
          var humid= data.list[((i+1)*8)-1].main.humidity;
            
           document.getElementById('fdate'+(i+1)).innerHTML = date;
           document.getElementById('temp'+(i+1)).innerHTML = tempf;
           document.getElementById('wind'+(i+1)).innerHTML = swind;
           document.getElementById('humid'+(i+1)).innerHTML = humid;
           
          
          
        }
        
});

}





function uvstats(cityid, api) {



}







