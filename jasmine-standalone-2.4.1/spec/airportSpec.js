describe('airport', function(){
  var airport, plane, weather;

  beforeEach(function(){
    plane = {};
    weather = {isStormy: function() {} };
    spyOn(weather,'isStormy').and.returnValue(false);
    airport = new Airport(weather);
  });

  describe('landPlane', function(){
    it('lands planes', function(){
      airport.landPlane(plane);
      expect(airport.planes.length).toEqual(1);
    });
  });

  describe('planeTakeoff', function(){
    it('clears the plane for takeoff', function(){
      airport.landPlane(plane);
      airport.planeTakeoff(plane);
      expect(airport.planes.length).toEqual(0);
    });
  });

  describe('stormy weather', function(){
    it('a plane cannot takeoff in stormy weather', function(){
      airport.landPlane(plane);
      weather.isStormy.and.returnValue(true);
      expect(function(){airport.planeTakeoff(plane)}).toThrow('Cannot takeoff in stormy weather');
    });

    it('a plane cannot land in stormy weather', function(){
      weather.isStormy.and.returnValue(true);
      expect(function(){airport.landPlane(plane)}).toThrow('Cannot land in stormy weather');
    });
  });
});
