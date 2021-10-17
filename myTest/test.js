import {getFruit} from "./leb.js";

let fruitGroup = getFruit('plum');
console.log(fruitGroup('berry'));
console.log("---------------------------------");
console.log(fruitGroup('coconut'));
console.log("---------------------------------");

let fruitG = getFruit('coconut');
console.log(fruitG('berry'));
console.log("---------------------------------");
console.log(fruitG('papaya'));
console.log("---------------------------------");
