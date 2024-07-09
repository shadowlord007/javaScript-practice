///////////////////////////////// forEach() method ////////////////////////////////////

numbers = [1,2,3,4,5,6,10,14]

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function triple(element, index, array) {
    array[index] = element * 3;
}

function squre(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}
function display(element){
    console.log(element);
}

// fruits example

fruits = ["Apple", "Orange", "banana", "mango"]

fruits.forEach(capitilize);
fruits.forEach(display);


function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitilize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element){
    console.log(element);
}


///////////////////// map() method///////////////////////////////////

numbers = [1,2,3,4,5,6,10,14]

const doubles = numbers.map(double);
const squres = numbers.map(squre);
const cubes = numbers.map(cube);

console.log(cubes);

function double(element){
    return element * 2;
}

function squre(element, index, array){
    return Math.pow(element, 2);
}

function cube(element, index, array){
    return Math.pow(element, 3);
}

fruits = ["Apple", "Orange", "banana", "mango"]

const uppers = fruits.map(upperCase);
const lowers = fruits.map(lowerCase);
const capitilizes = fruits.map(capitilize);

console.log(capitilizes);


function upperCase(element){
   return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

function capitilize(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}

date = ["2020-01-10", "2021-02-20", "2022-03-15", "2023-04-12"]

const dateFormatter = date.map(formatDates);
console.log(dateFormatter);
function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}



///////////////////// filter() method///////////////////////////////////

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const enenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

ages = [10, 40, 20, 25, 50, 60, 30, 12, 18, 16]

const adults = ages.filter(isAdult);
const child = ages.filter(isChild);

console.log(child);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18 ;
}


///////////////////// reduce() method ///////////////////////////////////

prices = [10, 40, 20, 25, 50, 60, 30, 12, 18, 16]

const totals = prices.reduce(sum);

console.log(totals);

function sum(accumulator, element){
    return accumulator + element;
}


grades = [40, 60, 75, 80, 50, 45]

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}


