////// Objects //////////////////

const person1 = {
    firstName: "Awais",
    lastName: "Akram",
    age: 25,
    isEmployed: true,
    sayGreeting: function() {console.log("Hi i am Muhmmad Awais Akram")},
    eat: function() {console.log("i am eating kabab")},

}

const person2 = {
    firstName: "Hamza",
    lastName: "Nisar",
    age: 27,
    isEmployed: true,
    sayGreeting: () => {console.log("Hi i am Hamza Nisar")},
    eat: function() {console.log("i am eating kheer")},

}


person1.sayGreeting();
person1.eat();
person2.sayGreeting();
person2.eat();

////// Objects //////////////////

const person3 = {
    name: "Awais",
    favfood: "kabab",
    age: 25,
    isEmployed: true,
    sayGreeting: function() {console.log(`Hi i am Muhammad ${this.name}`)},
    eat: function() {console.log(`my favrouit Food is ${this.favfood}`)},

}

const person4 = {
    name: "Hamza",
    favfood: "kheer",
    age: 27,
    isEmployed: true,
    sayGreeting: () => {console.log(`Hi i am ${this.name}`)},
    eat: function() {console.log(`my favrouit Food is ${this.favfood}`)},
}


person3.sayGreeting();
person3.eat();
person4.sayGreeting();
person4.eat();


