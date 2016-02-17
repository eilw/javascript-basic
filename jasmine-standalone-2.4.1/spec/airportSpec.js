describe('airport', function(){
  var airport, plane;

  beforeEach(function(){
    airport = new Airport();
    plane = {};
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
});
