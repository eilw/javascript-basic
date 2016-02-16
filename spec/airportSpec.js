describe("Airport", function(){

  var airport, plane;

  beforeEach(function(){
    airport = new Airport();
    plane = "plane";
  });

  describe('planes array', function(){
    it("should have an empty array of planes", function() {

      expect(airport.planes).toEqual([]);

    });

  });


  describe('landing planes', function(){
    it("should land a plane", function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);

    });
  });


  describe('taking off planes', function(){

    it("should take off a plane", function(){

      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane)

    });

    it("should take off a specific plane",function(){
      var plane2 = "plane2"

      airport.land(plane2);
      airport.land(plane);
      airport.takeOff(plane2);
      expect(airport.planes).not.toContain(plane2)

    })
  });

});
