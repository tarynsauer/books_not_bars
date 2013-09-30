var getOrgsMap = function() {
  google.maps.visualRefresh = true;

  function initialize() {
    var myLatlng = new google.maps.LatLng(41.8833,87.8000);
    var mapOptions = {
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);

    var markers = [
      { 'name': 'Logan Square', 'location': [41.912945, -87.642746], 'description': '1. This is an example description'},
      { 'name': 'Loop', 'location': [41.85569, -87.626266], 'description': '2. This is another example!!!'}
      ];

    // var infowindows = [];

    if (markers) {
      for (var i = 0; i < markers.length; i++) {
        var details = markers[i];
        // infowindows[i] = new google.maps.InfoWindow({
        //   content: details.description,
        //   maxWidth: 200
        // });
        markers[i] = new google.maps.Marker({
          title: details.name,
          position: new google.maps.LatLng(
              details.location[0], details.location[1]),
          map: map
        });
        // google.maps.event.addListener(markers[i], 'click', function() {
        //   var infowindow = infowindows[i];
        //   infowindow.open(map,markers[i]);
        // });
      }
    }

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

$(document).ready(getOrgsMap);
$(document).on('page:load', getOrgsMap);