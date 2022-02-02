// /** About Obj. with inheritance and comparing */

// //object assignment example
// let per1 = { id: 1, name: 'Joe' };
// //per1 is an object variable,
// //store memory address that points to object properties
// let per2 = per1;
// doSomething(per2); //hoisting, use only var scope
// function doSomething(p) {
//   //p=per2  (memory address of per2 to p)
//   p.name = 'Mary'; //pers2.name='Mary'
// }
// console.log(per1);
// per2.id = 3;
// console.log(per1);

// //primitive assignment example
// let num1 = 10; //num1 is  a primitive variable, store value 10
// let num2 = num1; //num2=10
// doSomething(num2);
// function doSomething(num) {
//   //num=num2=10
//   num = 20; //num=20
// }
// console.log(num1); //num1=10
// console.log(num2); //num2=10

// /** Again for understanding */

// // primitive var :: แต่ละค่ามีความโดดเด่นเป็นตัวเอง ไม่ผูกพันกับค่าอื่น -> about literal
// let person = 'Nut' ;
// let age = 19 ;

// let money = 500 ;
// let purse = money ;
// purse++ ; 
// console.log(purse);
// console.log(money);
// function change(p) {
//     // x => p : copy value you put (x) to variable of this function (p)
//     // Then 2 vars are not relative together and forever 
//     // [Just ref value between vars only] 
//     p = 600 ;
//     // only p that change it value from 500 to 600 
// }
// change(money); // money : just is the ref of 'p' in change() for a while
// console.log(money);
// console.log(purse==money); // compare only value [primitive]
// console.log(purse===money);

// // object var :: เกาะกลุ่มกัน มีความสัมพันธ์กันตลอด -> about memory addresses
// let personInfo = {pName: 'Nut', pAge: 20};
// let nutnaree = personInfo ;

// function changeInfo(i) {
//     i.pName = 'Nil' ;
// }
// nutnaree.pAge = 19 ;
// console.log(personInfo);
// console.log(nutnaree);
// console.log(personInfo==nutnaree); // compare only address [obj.]
// console.log(personInfo===nutnaree);

// let array = ['A',2,4.5]; // keep address each var
// let getHello = function() {
//     return "Hello"
// }

// /** Object Comparing  */

// let student = { id: 1, name: "Joe" };
// let newStudent = { id: 2, name: "Joe" };
// let oldStudent = { id: 1, name: "Joe" };
// let alumniStudent = student;

// if (student == alumniStudent) {//true
//     console.log("student equals to alumni student by ==");
//     //student equals to alumni student by ==
// }if (student == oldStudent) {//false
//     console.log("student equals to old student by ==");
// }if (student == newStudent) {//false
//     console.log("student equals to new student by ==");

// }if (student === alumniStudent) {//true
//     console.log("student strictly equals to alumni student by ===");
//     //student strictly equals to alumni student.
// }if (student === newStudent) {//false
//     console.log("student strictly equals to new student by ===");
// }if (student === oldStudent) {//false
//     console.log("student strictly equals to old student by ===");
// }

// /* The Object.is() method determines...
// whether 2 values are the same value without type conversion. 
// Both the same object means...
// both object have same reference :) */
// if (Object.is(student,alumniStudent)) {//true
//     console.log("student equals to alumni student by Object.is()");
//     //student equals to alumni student by Object.is()
// }if (Object.is(student, newStudent)) {//false
//     console.log("student equals to new student by Object.is()");
// }if (Object.is(student, oldStudent)) {//false
//     console.log("student equals to old student by Object.is()");
// }

// /** Notes:
//  * About JSON
//  * It likes 'Obj.' in JavaScript but it add constrant with
//  *  - requires double quotes to be used around strings and property names
//  *  - contains only properties, no methods
//  * 
//  * Example:
//  *  {
//  *      "stdName": "Nutnaree",
//  *      "stdAge": 20,
//  *      "stdAddress": [
//  *          {
//  *              "stdPresentProvince": [
//  *                  "Bangkok","Nakhon Pathom"
//  *              ],
//  *              "stdNoAddress1": "114/2",
//  *              "stdNoAddress2": "160"

//  *          }
//  *          {
//  *              "stdPastProvince": "Ratchaburi",
//  *              "stdNoAddress3": false 
//  *          }
//  *      ]
//  *  }
//  * 
//  */

// /** About Array */

// let arr1 = [];
// // console.log(typeof arr1);
// arr1 = [1, 2, 3, 4, 5, 'I Love You']; //untyped & unsized
// // console.log(arr1.length);
// // console.log(arr1[0]);
// // console.log(arr1[arr1.length - 1]);
// console.log(arr1[ arr1[4] ]);

// let arr2 = [
//     {name: 'nut', no: 1},
//     {name: 'nil', no: 2}
// ]
// console.log(arr2[ arr1[0] ].name);

// let arr3 = [
//     [3,2,1,0],
//     [4,5,6,7]
// ]
// console.log(arr3[0][2]);
// console.log(arr2[ arr3[0][2] ]);

// let arr4 = [5,10,15, ...arr3] // use spread operator '...'
// // [ 5, 10, 15, [ 3, 2, 1, 0 ], [ 4, 5, 6, 7 ] ]
// console.log(arr4)

// Array.of() // => []; returns empty array with no arguments
// Array.of(1) // => [1]; create arrays with a single numeric argument
// Array.of(1,2,3) // => [1, 2, 3]

// let j = Array.of(1,'You');
// let k = Array.from(j); //k: 1,'You'
// let k2 = [...j]; //k: 1,'You'
// console.log(j)
// console.log(k)
// console.log(k2)

// let nut, nil, myNames, n, u, t, printi ;
// [nut, nil, ...myNames] = [0,1,2,3,4,5,6]
// // ...varName : รองรับ value ที่เหลือทั้งหมด ต้องอยู่ตัวสุดท้ายเท่านั้น!
// // ex. [n, u, ...printi, t] = [0,1,2,3,4,5,6] :: error
// console.log(nut);
// console.log(nil);
// console.log(myNames);

// let letters = [...'KMUTT'];
// let value = '';
// // console.log(letters.entries());

// for (let [index, letter] of letters.entries()) {
//     // console.log(`index: ${index}`);
//     console.log(`letter: ${letter}`);
//     // if (index % 2 === 0) value += letter; // letters at even indexes
// }

let you1 = {};
let you2 = {};
let you3 = {};
you1.name = 'N';
you1.no = 1;
you2.name = 'Nu';
you2.no = 2;
you3.name = 'Nut';
you3.no = 3;
let you11 = [ you1, you2, you3 ];
let you22 = [ you2 ];
let you33 = [ you3, you1 ];
let me = { you11, you22, you33 }

// console.log(me.you11.entries());
console.log(me.you11);
// console.log(me.you11.forEach(element => {
//     let n = element.no;
//     return n;
//     })
// );
// console.log(me.you11[1].name);
// console.log(me.you11[2].name);

if(me.you11.entries().next().value !== null) {
    let arr = me.you11.entries().next().value[1].no;
    // console.log(Array.isArray(arr));
    console.log(arr);
    // let a = arr[1].no;
    // console.log(a)
}