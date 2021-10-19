/** Test : array / arrow func. */
// let nut = [1,2,3,4,5];
// const helloSomeone = name => `Hello, ${name}`;

/** Test : slice */
// let unboundSlice = Array.prototype.slice
// let slice = Function.prototype.call.bind(unboundSlice)
// function list() {
//     return slice(arguments)
// }
// function test() {
//   return slice(arguments)
// }
/** cases for test */
// let list1 = list(1, 2, 3) // [1, 2, 3]
// console.log(test()) // []
// console.log(list1) // [1, 2, 3]

/** Test : Use methods named 'Slice' and 'Reverse' */
// const fruit = ["mango", "orange", "apple", "cherry", "banana"];
// const student = ["Chanunporn", "Nutnaree", "Thanawat", "Chanathip", "Denphum"]
// const phonebrand = ["apple", "samsung", "oppo", "vivo", "xiaomi", "huawei", "oneplus"]

// Array.prototype.stt = function() {
//     console.log(student.slice(0, -2))
// }

// student.stt();
    
/** Test : Func. And Param */    
// let getScoringPass = function (scores) {
//     //bind and store "scores" argument to use in the nested "cuttingPoint" function
//     function cuttingPoint(cuttingScore) {
//         return scores.filter((score) => score >= cuttingScore);
//     }
//     return cuttingPoint;
// };

// //fn_cuttingPoint1 and fn_cuttingPoint2 are instance closure functions
// //that bind to each their outer parameter "scores"
// let fn_cuttingPoint1 = getScoringPass([50, 15, 32, 80, 100]);
// console.log(fn_cuttingPoint1(50)); //[ 50, 80, 100 ]
// let fn_cuttingPoint2 = getScoringPass([-10, -15, -53, -97, -32]);
// console.log(fn_cuttingPoint2(-30)); //[ -10, -15 ]
// let fn_cuttingPoint3 = getScoringPass([10, 15, 53, 97, 32]);
// console.log(fn_cuttingPoint3(30)); //[ 53, 97, 32 ]
// console.log(fn_cuttingPoint3(10)); //[ 10, 15, 53, 97, 32 ]

/** Error : Can't see result
function printStudents(argument=[]) {
    let result = " ";
    // iterate through arguments
    if(argument.length > 1) {
        for (let i = 1; i < argument.length; i++) {
            let separator = argument[0];
            result += argument[i] + separator;
        }
    } else if(argument == 1 || argument == 0) {
        result += "-Error-";
    }
    return result;
}

console.log(printStudents('p')); // Adam.John.Danai.
console.log(printStudents('.','Adam','John','Danai')); // Adam.John.Danai.

*/

/** default parameter */
// function who(name = 'unknown') {
//     return name;
// }
// console.log(who()); //unknown
// console.log(who('Umaporn')); //Umaporn
            
/** rest parameters */
// function sum(opsName, ...theNumbers) {
//     console.log(opsName); //'sum'
//     return theNumbers.reduce( (previous, current) => {return previous + current;} );
// }

// console.log(sum('sum', 1, 2, 3)); //6
// console.log("-------------------------------------");
// console.log(sum('total', 1, 2, 3, 4, 5)); //15
// console.log("-------------------------------------");
                    
/** Test : higher order func. */
// function outer(name) {
// //higher order function
//     let family = []; // ประกาศอาร์เรย์
//     family.unshift(name); // เพิ่มชื่อตรงหน้าตำแหน่งแรกของอาร์เรย์
//     const greeting = 'Welcome everyone in family'; // ประกาศข้อความ
//     function inner(newMember) {
//         console.log(greeting); // พรินต์ข้อความ
//         family.unshift(newMember); // เพิ่มชื่อตรงหน้าตำแหน่งแรกของอาร์เรย์เดิม
//         return family; // คืนค่าอาร์เรย์หลังเพิ่มชื่อใหม่
//     }
//     return inner; // return inner function
// }

// const myInner = outer('Umaporn');
// console.log("-------------------------------------");
// console.log(myInner('John'));
// console.log("-------------------------------------");
// console.log(myInner('SuSan'));
// console.log("-------------------------------------");
                            
/** spread parameter */
// function total(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// let nums = [5, 10, 15, 20, 25];
// console.log(total(...nums)); // 30 ; total only first three values of nums array

/** destructuring function arguments into parameters */
// function arrayAdd1(v1, v2) {
//     return [v1[0] + v2[0], v1[1] + v2[1]];
// }

// console.log(arrayAdd1([1, 2], [3, 4])); // [4,6]
    
// function arrayAdd2([x1, y1], [x2, y2]) {
//     // Unpack 2 arguments into 4 parameters
//     return [x1 + x2, y1 + y2];
// }

// console.log(arrayAdd2([1, 2], [3, 4])); // [4,6]
        
/** Test : create higher-order func. */
// const fruits = ["mango", "orange", "apple", "cherry", "banana"];
// const fruit = ["plum"];
// function getFruit(name) {
//     //higher order function
//     console.log("Welcome My Fruit Lover, "+`${name}`+"!!!");
//     console.log("From " + `${fruit}`);
//     fruit.unshift(name); // เพิ่มชื่อตรงหน้าตำแหน่งแรกของอาร์เรย์เดิม
//     console.log("---------------------------------");
    
//     function showNewFruit(newName) {
//         fruit.unshift(newName); // เพิ่มชื่อตรงหน้าตำแหน่งแรกของอาร์เรย์เดิม
//         console.log("Welcome New Fruit To " + `${fruit[0]}`+" From...");
//         for (let i = fruit.length; i > 1; i--) {
//             console.log(fruit[i-1]);
//         }
//         console.log("Now... These are our fruit family!");
//         return fruit; // คืนค่าอาร์เรย์หลังเพิ่มชื่อใหม่
//     }
//     return showNewFruit; // return inner function
// }
/** cases for test */
// let fruitPack = getFruit('papaya');
// console.log(fruitPack('berry'));
// console.log("---------------------------------");
// console.log(fruitPack('coconut'));
// console.log("---------------------------------");
                


/** Test : create higher-order func. and try to export */
// export function getFruit(name) {

//     let fruits = ["orange", "apple", "cherry", "banana"];
//     fruits.unshift(name);
            
//     function addFruit(newName) {
//         let i = 0 ;
//         console.log("Welcome New Fruit!");
//         if(newName.length >= fruits[0].length){
//             fruits.unshift(newName);
//         }
//         return fruits;
//     }
//     return addFruit;

// }
/** cases for test */
// let fruitGroup = getFruit('plum');
// console.log("---------------------------------");
// console.log(fruitGroup('berry'));
// console.log("---------------------------------");
// console.log(fruitGroup('coconut'));
// console.log("---------------------------------");
// let fruitG = getFruit('coconut');
// console.log("---------------------------------");
// console.log(fruitG('berry'));
// console.log("---------------------------------");
// console.log(fruitG('papaya'));
// console.log("---------------------------------");



