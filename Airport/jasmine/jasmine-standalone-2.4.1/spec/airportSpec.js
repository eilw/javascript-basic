describe("Airport", function(){

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = "plane"
  });

  it("the airport is empty when started up",function(){
    expect(airport.planes.length).toEqual(0);
  });

  describe("land",function(){
    it("the airport can instruct a plane to land",function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

  });

  describe("takeOff",function(){
    it("the airport can instruct a plane to takeoff",function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });

    it("the airport can instruct a specific plane to takeoff",function(){
      var specific_plane = "specific_plane"
      airport.land(specific_plane)
      airport.land(plane)
      airport.takeOff(specific_plane)
      expect(airport.planes).not.toContain(specific_plane);
    });
  });

});
