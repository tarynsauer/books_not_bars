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

        $(document).ready(getZipcode);
        $(document).ready(findByZipcode);
        $(document).ready(copyToClipboard);
        $(document).on('page:load', getZipcode);
        $(document).on('page:load', findByZipcode);
        $(document).on('page:load', copyToClipboard);
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
    event.preventDefault();
    var data = $('#zipcode').val();
    $.get('/zipcode', { zipcode: data } , function(response){
      $('#contactInfo').html(response);
    });
  });
};

var findByZipcode = function() {
    $("#findByZipcode").click(function( event ) {
    event.preventDefault();
    $.get('/show', data, function(response){
        $('#contactInfo').html(response);

        $(document).ready(getZipcode);
        $(document).ready(findByZipcode);
        $(document).ready(copyToClipboard);
        $(document).on('page:load', getZipcode);
        $(document).on('page:load', findByZipcode);
        $(document).on('page:load', copyToClipboard);
      });
  });
};

var getPetition = function() {
    $("#signPetition").click(function( event ) {
     alert('test!!!!!');
    event.preventDefault();

  });
};

var copyToClipboard = function() {
  $('.copyClipboard').click(function(event){
    event.preventDefault();
    var formText = $(this).prev().val();
    console.log(formText);
  });
};

$(document).ready(getGeoCoordinates);
$(document).ready(getPetition);

$(document).on('page:load', getGeoCoordinates);
$(document).on('page:load', getPetition);