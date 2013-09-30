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

// var rerenderWithZipcode = function() {
//   $('#rerenderMap').submit(function( event ) {
//     event.preventDefault();
//     alert('whaaaaahh');
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
      { 'name': 'Logan Square', 'location': [41.912945, -87.642746], 'description': '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">BUILD</h1>'+
    '<div id="bodyContent">'+
    '<p><b>1443 W Division St</b></p>'+
    '<p>Chicago, IL 60642</p>'+
    '<p>BUILD’s mission is to engage at-risk youth in the schools and on the streets, so they can realize their educational and career potential and contribute to the stability, safety and well being of our communities. </p>'+
    '<p>now serves over 3,500 youth annually in 11 Chicago communities: West Town, Humboldt Park, Cabrini Green, Logan Square, Hermosa, Belmont Cragin, East Garfield Park, North Lawndale, Englewood, Brighton Park and Austin. BUILD also continues to serve teens from the Cook County Juvenile Temporary Detention Center (CCJTDC), helping them successfully reintegrate into their home communities and the public school system and stay away from crime and the court system. </p>'+
    '<p>For more information, visit <a href="http://www.peakchicago.org/">http://www.buildchicago.org/g</a>.</p>'+
  '</div>'+
'</div>'},
      { 'name': 'Loop', 'location': [41.85569, -87.626266], 'description': '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PEAK</h1>'+
      '<div id="bodyContent">'+
      '<p><b>1443 W Division St</b></p>'+
      '<p>Chicago, IL 60642</p>'+
      '<p>Partnershipt to Educate and Advance Kids (PEAK) is is a scholarship and mentoring program serving Chicago’s at-risk high school youth. We provide our students with a fully funded scholarship to attend Holy Trinity Catholic High School, totaling approximately $28,000 over the course of 4 years. Students in the program also work with a one-on-one gender-based mentor during their high school career.</p>'+
      '<p>For more information, visit <a href="http://www.peakchicago.org/">www.peakchicago.org</a>.</p>'+
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

  if($("#map-canvas").length > 0 ) {
    initialize();
  }
};

$(document).ready(getOrgsMap);
$(document).on('page:load', getOrgsMap);

// $(document).ready(rerenderWithZipcode);
// $(document).on('page:load', rerenderWithZipcode);

