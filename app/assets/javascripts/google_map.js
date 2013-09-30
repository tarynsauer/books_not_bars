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
      { 'name': 'Loop', 'location': [41.85569, -87.626266], 'description': '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>'}
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