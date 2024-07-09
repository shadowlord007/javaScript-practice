
////// Example 1 /////////////////////
a = 5;
b = 10;

[a, b] = [b, a]

console.log(a);
console.log(b);


////// Example 2 /////////////////////

const color = ["red", "green", "blue", "black", "white"];

[color[0],  color[4]] = [color[4], color[0]]

console.log(color);



////// Example 3 assign to varibales /////////////////////

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extaColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extaColor);



////// Example 4 extract froom objct /////////////////////


const person1 = {
    firstName: "Awais",
    lastName: "Akram",
    age: 25,
    job: "web developer"

}

const person2 = {
    firstName: "Hamza",
    lastName: "Nisar",
    age: 27,
}

// const {firstName, lastName, age, job="unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);



////// Example 5 in fuction parameter /////////////////////

function displayPerson({firstName, lastName, age, job="unemployed"}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "Awais",
    lastName: "Akram",
    age: 25,
    job: "web developer"

}

const person4 = {
    firstName: "Hamza",
    lastName: "Nisar",
    age: 27,
}

displayPerson(person3);