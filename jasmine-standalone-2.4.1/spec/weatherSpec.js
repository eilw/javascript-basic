describe('weather', function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });

  describe('random weather', function(){
    it('sets the weather to both stormy and not stormy', function(){
      var results = [];
      for (var i = 0; i < 100; i++) {
        results.push(weather.isStormy());
      }
      expect(results).toContain(true && false);
    });
  });
});
