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
      $('#latitude2').val(latitude);
      $('#longitude2').val(longitude);
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
      $('.zipcode-form').hide();
      $('#findByZipcode').show();
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
    $('#findByZipcode').hide();
    $('.zipcode-form').first().show();
    $('.contactWrapper div.contactResultsContainer').remove();

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