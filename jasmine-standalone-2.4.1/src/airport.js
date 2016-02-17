function Airport() {
  this.planes = []
};

Airport.prototype.landPlane = function(plane){
  this.planes.push(plane);
};

Airport.prototype.planeTakeoff = function(plane){
  this.planes.pop();
};
