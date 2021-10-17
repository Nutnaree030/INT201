// let nut = [1,2,3,4,5];
// const helloSomeone = name => `Hello, ${name}`;

// let unboundSlice = Array.prototype.slice
// let slice = Function.prototype.call.bind(unboundSlice)

// function list() {
//     return slice(arguments)
// }

// function test() {
//   return slice(arguments)
// }

// let list1 = list(1, 2, 3) // [1, 2, 3]

// console.log(test())
// console.log(list())
// console.log(list1)


// const fruit = ["mango", "orange", "apple", "cherry", "banana"];
// const student = ["Chanunporn", "Nutnaree", "Thanawat", "Chanathip", "Denphum"]
// const phonebrand = ["apple", "samsung", "oppo", "vivo", "xiaomi", "huawei", "oneplus"]


// Array.prototype.stt = function() {
    //     console.log(student.slice(0, -2))
    // }
    
    // student.stt();
    
    
    
    // let getScoringPass = function (scores) {
        //     //bind and store "scores" argument to use in the nested "cuttingPoint" function
        //     function cuttingPoint(cuttingScore) {
            //     return scores.filter((score) => score >= cuttingScore);
            //     }
            //     return cuttingPoint;
            //     };
            
//     //fn_cuttingPoint1 and fn_cuttingPoint2 are instance closure functions
//     //that bind to each their outer parameter "scores"
//     let fn_cuttingPoint1 = getScoringPass([50, 15, 32, 80, 100]);
//     console.log(fn_cuttingPoint1(50)); //[ 50, 80, 100 ]
//     let fn_cuttingPoint2 = getScoringPass([-10, -15, -53, -97, -32]);
//     console.log(fn_cuttingPoint2(-30)); //[ -10, -15 ]
//     let fn_cuttingPoint3 = getScoringPass([10, 15, 53, 97, 32]);
//     console.log(fn_cuttingPoint3(30)); //[ 53, 97, 32 ]
//     console.log(fn_cuttingPoint3(10)); //[ 10, 15, 53, 97, 32 ]

// function printStudents(arguments) {
    //     let result = '';
    //     // iterate through arguments
    //     let separator = arguments[0];
    //     for (i = 1; i < arguments.length; i++) {
        //     result += arguments[i] + separator;
        //     }
        //     return result;
        //     }
        // console.log(printStudents('.', 'Adam', 'John', 'Danai'));
        // // Adam.John.Danai.
        
        // //default parameter
        // function who(name = 'unknown') {
            // return name;
            // }
            // console.log(who()); //unknown
            // console.log(who('Umaporn')); //Umaporn
            
            //rest parameters
            // function sum(opsName, ...theNumbers) {
                //     console.log(opsName); //'sum'
                //     return theNumbers.reduce((previous, current) => {
                    //             return previous + current;
                    //         }
                    //     );
                    // }
                    // console.log(sum('sum', 1, 2, 3)); //6
                    // console.log(sum('total', 1, 2, 3, 4, 5)); //15
                    // console.log("-------------------------------------");
                    
                    // function outer(name) {
                        //     //higher order function
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
                            // console.log(myInner('John'));
                            // console.log(myInner('SuSan'));
                            // console.log("-------------------------------------");
                            
                            // function sum(num1, num2, num3) {
                                //     return num1 + num2 + num3;
                                //     }
                                //     let nums = [5, 10, 15, 20, 25];
                                //     //spread parameter
                                //     console.log(sum(...nums)); // total only first three values of nums array
                                
                                //destructuring function arguments into parameters
                                // function arrayAdd1(v1, v2) {
    //     return [v1[0] + v2[0], v1[1] + v2[1]];
    // }
    // console.log(arrayAdd1([1, 2], [3, 4])); // [4,6]
    
    // function arrayAdd2([x1, y1], [x2, y2]) {
        //     // Unpack 2 arguments into 4 parameters
        //     return [x1 + x2, y1 + y2];
        // }
        // console.log(arrayAdd2([1, 2], [3, 4])); // [4,6]
        
export function getFruit(name) {

    let fruits = ["orange", "apple", "cherry", "banana"];
    fruits.unshift(name);
            
    function addFruit(newName) {
        let i = 0 ;
        console.log("Welcome New Fruit!");
        if(newName.length >= fruits[0].length){
            fruits.unshift(newName);
        }
        return fruits;
    }
    return addFruit;

}

// let fruitGroup = getFruit('plum');
// console.log(fruitGroup('berry'));
// console.log("---------------------------------");
// console.log(fruitGroup('coconut'));
// console.log("---------------------------------");

// let fruitG = getFruit('coconut');
// console.log(fruitG('berry'));
// console.log("---------------------------------");
// console.log(fruitG('papaya'));
// console.log("---------------------------------");


        
// const fruit = ["mango", "orange", "apple", "cherry", "banana"];
//         function getFruit(name) {
//             //higher order function
//             // fruit.unshift(name); // เพิ่มชื่อตรงหน้าตำแหน่งแรกของอาร์เรย์
//             console.log("Welcome New Fruit!"+`${name}`); // พรินต์ข้อความ
//             console.log("From" + fruit.filter(i => i <= fruit.length)); // พรินต์ข้อความ
            
//             function showNewFruit(newName) {
//                 fruit.unshift(newName); // เพิ่มชื่อตรงหน้าตำแหน่งแรกของอาร์เรย์เดิม
//                 return fruit; // คืนค่าอาร์เรย์หลังเพิ่มชื่อใหม่
//             }
//             return showNewFruit; // return inner function
//         }
        
//         let fruitPack = getFruit('papaya');
//         console.log(fruitPack('berry'));
//         console.log(fruitPack('coconut'));
        
