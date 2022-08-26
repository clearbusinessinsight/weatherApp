// OpenWeatherMap API appKey
var api = 'a12134e03f5366a89d3e1787025a21c4';

window.addEventListener('load', () => {});

  window.addEventListener('load', () => {
    let long;
    let lat;
    // Accesing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Storing Longitude and Latitude in variables
        long = position.coords.longitude;
        lat = position.coords.latitude;
      });
    }
  });