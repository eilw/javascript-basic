describe("Airport", function(){

  var airport, plane, weather, weatherSpy, DEFAULTCAPACITY;

  beforeEach(function(){
    weather = { isStorm: function(){} };
    plane = {};
    spyOn(weather, 'isStorm').and.returnValue(false);
    airport = new Airport(weather);
    DEFAULTCAPACITY = airport.DEFAULTCAPACITY

  });

  describe('planes array', function(){
    it("should have an empty array of planes", function() {
      expect(airport.planes).toEqual([]);
    });

    it("should have a capacity",function() {
      expect(airport.capacity).toEqual(DEFAULTCAPACITY);
    });

    it("should be able to change capacity for each airport",function(){
      airport.changeCapacity(40);
      expect(airport.capacity).toEqual(40);
    });

    it("shouldn't allow a new capacity smaller than the number of planes at airport", function(){
      airport.land(plane);
      airport.land(plane);
      expect(function(){airport.changeCapacity(1);}).toThrow('Cannot change capacity to lower than number of planes at airport');
    });
  });


  describe('landing planes', function(){
    it("should land a plane", function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

    it("cannot land if there is storm", function(){
      weather.isStorm.and.returnValue(true);
      expect(function(){airport.land(plane);}).toThrow('cannot land in a storm');
    });

    it("cannot land if airport is at capacity", function(){
      airport.capacity = 1
      airport.land(plane)
      expect(function(){airport.land(plane);}).toThrow('cannot land, airport at full capacity');
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

    it("it tracks isStrom being called", function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(weather.isStorm).toHaveBeenCalled();
    });

    it("cannot takeoff if there is storm",function(){
      airport.land(plane);
      weather.isStorm.and.returnValue(true);
      expect(function(){airport.takeOff(plane);}).toThrow('cannot takeoff in a storm');
    });

    it("a plane can only takeoff if it is in the airport",function(){
      airport2 = new Airport(weather);
      airport2.land(plane);
      expect(function(){airport.takeOff(plane);}).toThrow('Plane not in airport');
    });

  });

});
