describe("Airport", function(){

  var airport, plane, weather, weatherSpy;

  beforeEach(function(){
    weather = { isStorm: function(){} };
    plane = {};
    spyOn(weather, 'isStorm').and.returnValue(false);
    // weather = new Weather();
    // weather = jasmine.createSpyObj('weather',['isStorm']);
    // weatherSpy =
    // console.log(weatherSpy);
    // weatherSpy = jasmine.createSpyObj('weatherSpy',['isStorm']);
    // weatherSpy = jasmine.createSpy('weatherSpy').and.callFake(function(){
    //   return false;
    // });
      // weatherSpy.isStorm.and.returnValue(false);
    // spyOn(weatherSpy, 'isStorm').and.callFake(function(){
    //   return false;
    // });
    airport = new Airport(weather);

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

    it("it tracks isStrom being called", function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(weather.isStorm).toHaveBeenCalled();
    });

    it("cannot takeoff if there is storm",function(){
      weather.isStorm.and.returnValue(true)
      airport.land(plane);
      expect(function(){airport.takeOff(plane);}).toThrow('cannot takeoff in a storm');
    });
  });

});
