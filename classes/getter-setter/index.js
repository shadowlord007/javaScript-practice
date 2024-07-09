///////// Getter and Setter in classes //////////////////////

// getting are for making object properties readable
// setter are for making object properties writeable

class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Widht must be a positive number")
        }
    }

    set height(newHeight){
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number")
        }
    }

    get width() {
        return this._width.toFixed(1);
    }
    get height() {
        return this._height.toFixed(1);
    }

    get area() {
        return `${(this._width * this._height).toFixed(1)}`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);




////// second examople /////////
class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName === 'string' && newFirstName.length > 0) {

            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a string")
        }
    }

    set lastName(newLastName) {
        if(typeof newLastName === 'string' && newLastName.length > 0) {

            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a string")
        }
    }

    set age(newAge) {
        if(typeof newAge === 'number' && newAge >= 0) {

            this._age = newAge;
        }
        else {
            console.error("Age must be a number")
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
    
    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }
}

const person = new Person("Awais", "Akram", 25);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

console.log(person.age);