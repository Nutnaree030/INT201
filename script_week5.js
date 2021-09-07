/** Review :: Object */

// let person = {  } // new Object(); -> implicit (เบื้องหลัง-มองไม่เห็นโดยตรง)
// console.log(typeof person); // check condition and status of the above
// person.id = 1234;
// //console.log(typeof person.id);
// person.name = 'Kondee';
// //console.log(typeof person.name);
// person.email = 'hello@mail.com';
// //console.log(typeof person.email);
// console.log(person);
// delete person.email; // delete some sub-object - person.email
// console.log(person);

// class Person {
//     constructor(id, name){
//         this._id = id ; // backing field (_) -> Avoid Overflow (ช่วยให้ไม่เกิดการเรียก 'getter' method มากเกินไป)
//         this._name = name ;
//     }

//     //getter id
//     get id() {
//         return this._id ;
//     }
//     //getter name
//     get name() {
//         return this._name ;
//     }
    
//     //setter id
//     set id(id) {
//         return this._id = id ;
//     }
//     //setter name
//     set name(name) {
//         return this._name = name ;
//     }
    
//     // getPersonIDLength() {
//     //     let check = this._id ;
//     //     let length = check.length ;
//     //     return `Length of ID : ${length}` ;
//     // }
    
//     getPerson() {
//         let check = this._id ;
//         let length = check.length ;
//         if (length == 13) this._id = this._id ;
//         else if (length != 13) this._id = 'Unknown' ;

//         return `person id  : ${this._id} , person name : ${this._name}` ;
//     }

// }

// let p1 = new Person('1357','Platong');
// // console.log(p1);
// // console.log(p1.getPersonIDLength());
// console.log(p1.getPerson());

// let p2 = new Person('1357924681000','Plangean');
// // console.log(p2);
// // console.log(p2.getPersonIDLength());
// console.log(p2.getPerson());

// /** About Prototype Chain : ความต่อเนื่อง/เชื่อมโยงกัน(?)ของการประกาศค่าหรือออบเจ็กต์ต่าง ๆ */
// console.log(Person.prototype.isPrototypeOf(p1)) ; 
    // true
// console.log(Person.prototype.isPrototypeOf(p2)) ;
    // true
// console.log(Object.prototype.isPrototypeOf(Person)) ; 
    // true
// console.log(Object.prototype.isPrototypeOf(p1)) ; 
    // true
// console.log(Object.prototype.isPrototypeOf(p2)) ; 
    // true
// console.log(Object.prototype.isPrototypeOf(this._id)) ;
    // false :: this._id ไม่ถือเป็นส่วนหนึ่งของ object
    // this._id เป็นเพียง key/variable ที่ถูกสร้างมาเก็บ data ใน object ที่ชื่อว่า person เฉย ๆ 

/** Class : ตัวแปร/ออบเจ็กต์ไม่จำเป็นต้องเช็กเงื่อนไขในตัวของมันเอง
 * เพราะมีแพทเทิร์นการตรวจสอบในคลาสคอยช่วยอยู่แล้ว
 * และทำให้เวลาเราตามดูข้อกำหนดต่าง ๆ หรือทำการแก้ไข
 * เราจะทำได้ง่ายกว่า เห็นภาพรวมชัดกว่าการไล่เช็กทีละตัว ...ประมาณนี้(?)
 */

class Player {
    /** constructor(fname = 'Unknown', lname = 'Unknown') {
     *      this._fname = fname ;
     *      this._lname = lname ;
     *  } */

    constructor(fname, lname) {
        // check fname
        if(fname) {
            this._fname = fname ;
        } else {
            this._fname = 'Unknown' ;
        }
        // check lname
        if(lname) {
            this._lname = lname ;
        } else {
            this._lname = 'Unknown' ;
        }
    }

    get name() {
        let name = `player name : ${this._fname} ${this._lname}` ;
        return name ;
    }

    // set fname(firstname) {
    //     this._fname = firstname ;
    // }
    // set lname(lastname) {
    //     this._lname = lastname ;
    // }
    // set name(name) {
    //     name = `${this._fname} ${this._lname}` ;
    //     return name ;
    // }

}

let p0 = new Player ;
let p1 = new Player('Nut','S') ;
let p2 = new Player('Nut') ;
let p3 = new Player('','Nut') ;

// console.log(p0) ;
console.log(p0.name) ;

// console.log(p1) ;
console.log(p1.name) ;

// console.log(p2) ;
console.log(p2.name) ;
// console.log(p2.fname('Nutty')) ; // error
// console.log(p2.lname('N')) ; // error
// console.log(p2.name('Nut')) ; // error

// console.log(p3) ;
console.log(p3.name) ;