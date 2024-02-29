//Abstraction

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.make} ${this.model} is starting the engine.`;
  }

  stop() {
    return `${this.make} ${this.model} is stopping the engine.`;
  }
}

const myCar = new Vehicle("Toyota", "Camry");
console.log(myCar.start()); // Output: Toyota Camry is starting the engine.
console.log(myCar.stop()); // Output: Toyota Camry is stopping the engine.
