$(function () {

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var data = { latitude: crd.latitude, longitude: crd.longitude }

  $.get('/legislators', data, function(response){
    console.log(response);
  });
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

});