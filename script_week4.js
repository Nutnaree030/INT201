/**
 * obj :: ใช้เก็บข้อมูล คำสั่ง ชุดคำสั่งได้
 * 
 * for(initialize;test;increment)
 * for-of : for(variable of iterableObject)
 *  เหมาะกับ ***arrays [...], objects {...} -> สามารถรันคู่ property ได้
 * for-in : for(variable in object)
 *  เหมาะกับ object ใดๆ -> ใช้เข้าถึง key & value
 */

// ---My examples---
// let num = [1,2,3,4,5,6,7,8,9,0];
// for(let runNum of num){
//    console.log(runNum);
// }
// let myName = {firstName: "Nutnaree", lastName: "Seesawai"};
// for(let names in myName){
//    console.log(names);
//    console.log(myName[names]);
// }

/**
 * const ของ obj เปลี่ยนค่า value ได้ - attribute, value ; เพิ่มค่า,ปรับได้
 * เพิ่มค่า :
 *   ชื่อObj.ชื่อค่าใหม่ = ... 
 * เปลี่ยนค่า :
 *   ชื่อObj.['ชื่อค่าใหม่'] = ... 
 * ตรงข้ามกับ const ของ primitive value ทำให้เป็น final value
 * 
 */

// simp object
let student1 = {
    fName: "A",
    lName: "All",
    id: 1001
}

// // obj value is array 
let student2 = {
    fName: "A",
    lName: "All",
    id: 1002,
    favMusic: [ "Red", "I'm yours", "Best in me" ]
} 

for(let a of student2.favMusic){
    console.log("{ " + a + " }");
}
console.log(student2);
console.log(student2.favMusic[1]);
console.log(student2.favMusic[student2.favMusic.length-1]);

// aggregated obj
let student3 = {
    fName: "A",
    lName: "All",
    id: 1003,
    favTextbook: {
        bISBN: 01234567 ,
        bName: "JavaScript",
        bGenre: "Education",
        bCost: 600
    }
}

console.log(student3);
for(let data in student3){
    if(typeof(student3[data]) == "object"){
        for(let data2 in student3[data]) {
            console.log(`${data}` + `${data2}` + " : " + `${student3[data][data2]}`);
        }
    }

    if(typeof(student3[data]) != "object"){
        console.log(`${data} : ${student3[data]}`);
    }
}

/** Additional part */
let student01 = {"name":'Nil',"age":19};
let student02 = {"name":'Nut',"age":18};

let student = [student01,student02];

for(let info of student){
    console.log(info);

}
/** End additional part */

/** Shorthand Obj methods */
// After ES6
// let sqr = {
//     area () {return this.side ** 2 },
//     side: 10
// };
// sqr.area() // 100
/** End shorthand Obj methods */

/* Additional */
let firstStudent = {personID: 101010, personName: "New"};
let currentStudent = Object.create(firstStudent);
currentStudent.personID;
currentStudent.personName;

let myList = new Object ;
myList.name = "Novel1";
myList.cost = 1000;
// console.log(myList["cost"]);
// console.log(myList.name);

let myList2 = new Object ;
myList2.name = "Textbook";
myList2.cost = 500;

let myList3 = Object.create({name: "Notebook", cost: 17500});
// console.log(myList3.name);
// console.log(myList3.cost);

let allList = {myList,myList2}; 
/* Try to add myList3 into allList obj. */
// allList.myList3 = myList3; --- can't print in simple
allList['myList3'] = {name: "Notebook", cost: 17500}; 
// the above can use and print likes another objs in allList
console.log(allList);