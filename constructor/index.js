///////// Constructor ////////////////


function Car(make, model, year, color ){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevelort", "Camero", 2025, "blue");

console.log(car1);

car1.drive();
car2.drive();
