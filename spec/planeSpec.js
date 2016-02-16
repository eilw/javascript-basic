describe("Plane", function(){

  var plane, airport;

  beforeEach(function(){
    airport = {};
    plane = new Plane();
  });

  describe("initialising a new plane",function(){
    it("a plane is initialised flying",function(){
      expect(plane.isFlying).toEqual(true)
    });
  });

  describe("changing fly status",function(){
    it("cannot takeoff if flying",function(){
      expect(function(){plane.takeOff(airport);}).toThrow('Plane is in the air already');
    });

    it("taking off changes flight status ",function(){
      plane.isFlying = false;
      plane.takeOff(airport);
      expect(plane.isFlying).toEqual(true);
    });

    it("can only change flight status if instructed from an airport ",function(){
      plane.isFlying = false;
      plane.takeOff(airport);
      expect(plane.isFlying).toEqual(true);
    });

    xit("taking off changes flight status ",function(){
      plane.isFlying = false;
      plane.takeOff;
      expect(plane.isFlying).toEqual(true);
    });

  });

});
