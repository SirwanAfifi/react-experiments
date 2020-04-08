function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    console.log("Compute Optimum Location");
  };

  this.radius = radius;
  this.draw = function () {
    computeOptimumLocation(0.1);

    console.log("draw");
  };
}

const circle = new Circle(10);
circle.draw();
