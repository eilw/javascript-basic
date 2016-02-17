function Airport(weather) {
  this.planes = [];
  this.weather = weather;
};

Airport.prototype.landPlane = function(plane){
  if(this.weather.isStormy()){
    throw 'Cannot land in stormy weather';
  };
  this.planes.push(plane);
};

Airport.prototype.planeTakeoff = function(plane){
  if(this.weather.isStormy()){
    throw 'Cannot takeoff in stormy weather';
  };
  this.planes.pop();
};
