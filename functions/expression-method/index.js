///////// function Expression //////////////////////////
// pass function as a value and varibales

const greetings = function() {
    console.log("Greetings")
}

greetings();


/////////// pasisng function as values //////////

setTimeout(function() {
    console.log("I will run after 3 seconds")
}, 3000)

// more examples //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const squreNumber = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cubeNumber = numbers.map(function(element) {
    return Math.pow(element, 3);
})

const evenNumber = numbers.filter(function(element){
    return element % 2 === 0;
})

const oddNumber = numbers.filter(function(element){
    return element % 2 !== 0;
})

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(total);
