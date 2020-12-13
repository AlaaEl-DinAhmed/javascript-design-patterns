function getCarInfo(): any {
  console.log("getCarInfo() is called");
}

class Car {
  @getCarInfo()
  engine: string;
  color: string;
  constructor(engine: string, color: string) {
    this.engine = engine;
    this.color = color;
  }
}

const carOne = new Car("BMW", "red");

console.log(carOne);
