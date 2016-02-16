describe("Weather", function(){

  var weather;

  beforeEach(function(){
    weather = new Weather();

    // spyOn(weather, "isStorm").and.returnValue(true);
  });

  describe('storm', function(){
    // it("if there is a storm should return true", function() {
    //   expect(weather.isStorm()).toEqual(true);
    // });

    it("can return both true and false",function(){
      var checker = []
      for(var i = 0; i<100; i++){
        checker.push(weather.isStorm());
      }
      expect(checker).toContain(true && undefined)
    });

  });
});
