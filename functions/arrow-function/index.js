//////// Arrow FUnction ////////////////
// is used to simplify the function we use (parameter) and => some code syntex

const hi = (name, age) => {console.log(`Assalam-o-ALikum ${name}`)
                        console.log(`Your are ${age} year old `)};

hi("Awais", 25);


//// more Examples /////////
setTimeout( () => console.log("Assalam-o-ALikum"), 3000);


//// with map(), filter() and reduce() method ////////

const numbers = [1, 2, 3, 4, 5, 6, 7]

const squres = numbers.map( (element) => {
    return Math.pow(element, 2);
});

const cube = numbers.map( (element) => {
    return Math.pow(element, 3);
});

const evenNumber = numbers.filter( (element) => {
    return element % 2 === 0;
});

const oddNumber = numbers.filter( (element) => {
    return element % 2 !== 0;
});

const total = numbers.reduce( (accumulator, element) => {
    return accumulator + element;
});

console.log(total);