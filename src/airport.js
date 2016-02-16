function Airport(weather) {

  this.planes = [];
  this.weather = weather;

}

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStorm()){
    throw 'cannot takeoff in a storm';
  };
  this.planes.splice(this.planes.indexOf(plane), 1);
};
