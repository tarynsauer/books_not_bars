var getGeoCoordinates = function() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      var latitude = crd.latitude;
      var longitude = crd.longitude;

      $('#latitude').val(latitude);
      $('#longitude').val(longitude);
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
};

var getZipcode = function() {
    $("#zipForm").submit(function( event ) {
    event.preventDefault();
    var data = $('#zipcode').val();
    $.get('/zipcode', { zipcode: data } , function(response){
      $('#contactInfo').html(response);
      $(document).ready(getZipcode);
    $(document).ready(findByZipcode);
    $(document).on('page:load', getZipcode);
    $(document).on('page:load', findByZipcode);
    });
  });
};

var findByZipcode = function() {
  $("#findByZipcode").click(function( event ) {
    event.preventDefault();
    $('.legislators-contact-info').hide();
    $('.zipcode-form').show();

    $(document).ready(getZipcode);
    $(document).ready(findByZipcode);
    $(document).on('page:load', getZipcode);
    $(document).on('page:load', findByZipcode);
  });
};

$(document).ready(getGeoCoordinates);
$(document).on('page:load', getGeoCoordinates);
$(document).ready(getZipcode);
$(document).ready(findByZipcode);
$(document).on('page:load', getZipcode);
$(document).on('page:load', findByZipcode);