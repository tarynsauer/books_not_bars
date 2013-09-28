var getGeoCoordinates = function() {
  $("#contactReps").click(function(event) {
    event.preventDefault();
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      var data = { latitude: crd.latitude, longitude: crd.longitude }

      $.get('/legislators', data, function(response){
        $('#contactInfo').html(response);
        $("#contactReps").hide();
      });
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
};

var getZipcode = function() {
    $("#zipForm").submit(function( event ) {
     alert('test!!!!!');

    event.preventDefault();

    $.get('/zipcode', data, function(response){
      $('#contactInfo').html(response);
      $("#contactReps").hide();
    });
  });
};

var getPetition = function() {
    $("#signPetition").click(function( event ) {
     alert('test!!!!!');
    event.preventDefault();

  });
};

$(document).ready(getGeoCoordinates);
$(document).ready(getZipcode);
$(document).ready(getPetition);

$(document).on('page:load', getGeoCoordinates);
$(document).on('page:load', getZipcode);
$(document).on('page:load', getPetition);