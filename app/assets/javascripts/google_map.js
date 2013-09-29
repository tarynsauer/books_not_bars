var getOrgsMap = function() {

  function initialize() {
    var mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(-33, 151),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map-canvas'),
                                  mapOptions);

    // var image = 'images/beachflag.png';
    // var myLatLng = new google.maps.LatLng(-33.890542, 151.274856);
    // var beachMarker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     icon: image
    // });

  }

  google.maps.event.addDomListener(window, 'load', initialize);
};

var showOrgsMap = function() {
  $('#showOrgs').click(function( event ) {
    event.preventDefault();
    $('#showOrgs').hide();
    $('#map-section').show();
    $(document).ready(getOrgsMap);
    $(document).on('page:load', getOrgsMap);
    google.maps.event.trigger(map,'resize');
  });
};

$(document).ready(getOrgsMap);
$(document).on('page:load', getOrgsMap);

$(document).ready(showOrgsMap);
$(document).on('page:load', showOrgsMap);