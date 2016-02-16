function Weather() {
}

Weather.prototype.isStorm = function(){
  if (Math.random() > 0.75) {
    return true;
  };

};
