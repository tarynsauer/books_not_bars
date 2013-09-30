var makeMarkers = function(markers) {
  var markers_array = [];
  if (markers) {
    for (var i = 0; i < markers.length; i++) {
      var details = markers[i];
      markers[i] = new google.maps.Marker({
        title: details.name,
        position: new google.maps.LatLng(
            details.location[0], details.location[1]),
        map: map,
        description: details.description
      });
      markers_array.push(markers[i]);
    }
    return markers_array;
  }
}

var makeInfoWindow = function(markers) {
  var infowindows = [];
  if (markers) {
    for (var i = 0; i < markers.length; i++) {
      var details = markers[i];
      var infowindow = new google.maps.InfoWindow({
        content: details.description,
      });
      setInfoWindow(infowindow, markers[i]);
    }
  }
}

var setInfoWindow = function(infowindow, marker) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

var codeAddress = function(zipCode) {
  geocoder.geocode( { 'address': zipCode}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      //Got result, center the map and put it out there
      map.setCenter(results[0].geometry.location);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

// var getZipcode = function() {
//   $('.rerenderMap #zipcode').submit(event) {
//     event.preventDefault();
//     alert('whaaaaahh');
//   }
//   });
// }

var getOrgsMap = function() {
  google.maps.visualRefresh = true;

  function initialize() {
    var myLatlng = new google.maps.LatLng(41.8833,87.8000);
    var mapOptions = {
      zoom: 10,
      mapTypeControl: false,
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
      { 'name': 'Logan Square', 'location': [41.912945, -87.642746], 'description': '<div class="infoWindow">1. This is an example description</div>'},
      { 'name': 'Loop', 'location': [41.85569, -87.626266], 'description': '<div class="infoWindow">2. Yeahhhhhhh!!!!!!!!!!!!!!</div>'}
      ];

    var markers_array = makeMarkers(markers);

    makeInfoWindow(markers_array);

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
      zoom: 4,
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
};

$(document).ready(getOrgsMap);
$(document).on('page:load', getOrgsMap);

$(document).ready(getZipcode);
$(document).on('page:load', getZipcode);