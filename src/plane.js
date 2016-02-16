function Plane(){
  this.isFlying = true
}

Plane.prototype.takeOff = function () {
  if(this.isFlying){
    throw 'Plane is in the air already'
  }
};
