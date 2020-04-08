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

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");

      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.draw();
