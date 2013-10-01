//= require helpers/spec_helper
//= https://maps.googleapis.com/maps/api/js?key=<%= ENV["GOOGLE_MAPS_API_KEY"] %>&sensor=true

describe("makeMarkers", function(){
  it("returns an empty array if no markers are passed in", function(){
    expect(makeMarkers()).toEqual([]);
  });

  it("returns a marker object with an assigned description", function() {
    var markers = [{ 'name': 'Logan Square', 'location': [41.912945, -87.642746], 'description': '<div id="content">'+
'test description'},{ 'name': 'Loop', 'location': [41.85569, -87.626266], 'description': 'second test desc.'}
     ];
     expect(makeMarkers(markers)[0].name).toEqual("Logan Square");
  });
});
