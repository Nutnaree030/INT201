// function expression : anonymus
const sum = function (n1,n2) {
    return n1 + n2;
};

console.log(sum(2,4)); // 6

// named function expression

// zigma
const findValue = function value(n) {
    if(n<=1) 
        return 1;
    else
        return n + value(n-1);
};
console.log(findValue(10)); // 55

// Test to see
const changeSum = function totAll(x,y) {
    if(x <= 1)
        return 1;
    else
        return y + totAll(x-1,x);
};
// console.log(changeSum(1,2)); // 1 (-) :: x = 1
// console.log(changeSum(2,3)); // 2 (-) :: y - totAll(1,x);
// console.log(changeSum(6,11)); // 10 (-) :: y - totAll(1,x);
// console.log(changeSum(1,2)); // 1 (+) :: x = 1
// console.log(changeSum(2,3)); // 4 (+) :: y + totAll(1,x);
// console.log(changeSum(6,11)); // 12 (+) :: y + totAll(1,x);
// console.log(changeSum(5,10)); // 23 :: y + totAll(x-1,x);
// console.log(changeSum(10,10)); // 63 :: y + totAll(x-1,x);

/** To see */
let mnp = 73000;
let bngmd = 10140;
() => (mnp * bngmd) % 2;
n => n - 1;
(m1,m2) => m1 - m2;

/** From active class :: Change traditional to func. expression
// From...
function nameFunction(param) {
    statement1;
    statement2;
    return value = param;
}
// To...
const nameFunction = param => {
    statement1;
    statement2;
    return value = param;
} 
*/

const helloSomeone = name => `Hello, ${name}`;
const area = (width,height) => width * height;
const evenNum = num => (num%2 === 0);
// const evenNumOrNot = num => (num%2 === 0)? 'Even' : 'Odd';

console.log(helloSomeone('Nut!'));
console.log(area(3,3));
console.log(evenNum(6));
// console.log(evenNumOrNot(1));

const doubleOnlyEvenNum = 
    num1 => (num1%2 === 0)? num1*num1 : 'Odd number' ;
console.log(doubleOnlyEvenNum(2));
console.log(doubleOnlyEvenNum(6));
console.log(doubleOnlyEvenNum(41));
