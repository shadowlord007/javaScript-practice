import {PI, getCircumferance, getArea, getVolume} from './mathUtils.js';


console.log(PI);

const circumferance = getCircumferance(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumferance.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);