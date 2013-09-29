var getOrgsMap = function() {
  google.maps.visualRefresh = true;

  function initialize() {
    var mapOptions = {
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);

        // var infowindow = new google.maps.InfoWindow({
        //   map: map,
        //   position: pos,
        //   content: 'Location found using HTML5.'
        // });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      // Center of continental U.S.A.
      position: new google.maps.LatLng(39.8282, 98.5795),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
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