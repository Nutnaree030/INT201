class Student {
    constructor(id, fnameth, fnameen, lnameth, lnameen){
        this._id = id ; // use _ for avoid Overflow after
        this._fnameth = fnameth ;
        this._fnameen = fnameen ;
        this._lnameth = lnameth ;
        this._lnameen = lnameen ;
    }

    get id() { return this._id ; } // show student id
    get name() { return this._fnameth ; } // show student thai firstname
    get name() { return this._fnameen ; } // show student eng firstname
    get name() { return this._lnameth ; } // show student thai lastname
    get name() { return this._lnameen ; } // show student eng lastname

    set id(id) { return this._id = id ; } // for edit student id after
    set fnameth(fnameth) { return this._fnameth = fnameth ; } // for edit student thai firstname after
    set fnameen(fnameen) { return this._fnameen = fnameen ; } // for edit student eng firstname after
    set lnameth(lnameth) { return this._lnameth = lnameth ; } // for edit student thai lastname after
    set lnameen(lnameen) { return this._lnameen = lnameen ; } // for edit student eng lastname after

    getStudent() { // สำหรับแสดงแถบข้อมูลนักศึกษา
        let check = this._id ;
        let length = check.length ;
        if (length == 11) this._id = this._id ;
        else if (length != 11) this._id = 'Unknown' ;
        return `${this._id}  ${this._fnameth} ${this._lnameth} (${this._fnameen} ${this._lnameen})` ;
    }
}


class Course {
    constructor(code = 'Unknown', name = 'Unknown', unit = 0, grade) {
      this._code = code ;
      this._name = name ;
      this._unit = unit ;
      let gradenum = 0 ;
      switch (grade) {
          case 'A' :
              gradenum = 4 ; 
          case 'B+' :
              gradenum = 3.5 ; 
          case 'B' :
              gradenum = 3 ; 
          case 'C+' :
              gradenum = 2.5 ; 
          case 'C' :
              gradenum = 2 ; 
          case 'D+' :
              gradenum = 1.5 ; 
          case 'D' :
              gradenum = 1 ; 
          case 'F' :
              gradenum = 0 ; 
          case 'Fa' :
              gradenum = 0 ; 
          case 'Fe' :
              gradenum = 0 ;
          default:
              gradenum = null;
      }
      this._grade = grade ;
    }

    getEachcourse() { // สำหรับแสดงแถบข้อมูลเกรดนักศึกษา
        let courseinfo = `${this._code} ${this._name} ${this._unit} ${this._grade}` ;
        return courseinfo ;
    }

    getUnitcourse() {
        let totunit ;
        totunit += unit ;
        return totunit;
    }
}

let s63130500030 = new Student('63130500030','ณัฏฐ์นรี','Nutnaree','สีไสว','Seesawai');

let int201_63130500030 = new Course('int201' ,'Server Side' ,2 , '');
let int202_63130500030 = new Course('int202' ,'Client Side' ,2 , '');
let int205_63130500030 = new Course('int205' ,'DBMS' ,3 , '');
let int207_63130500030 = new Course('int207' ,'Network' ,3 , '');
let int214_63130500030 = new Course('int214' ,'Statistics' ,3 , '');
let lng202_63130500030 = new Course('lng202' ,'Basic Reading' ,1 , '');
let gen231_63130500030 = new Course('gen231' ,'Miracle' ,3 , '');

let s63130500030grade = {semester1_2020: [] , semester2_2020: [] , 
    semester1_2021 : [int201_63130500030,int202_63130500030,int205_63130500030,
        int207_63130500030,int214_63130500030,
        gen231_63130500030,lng202_63130500030] , semester2_2020: [] } ;

/** เนื่องจากฟังก์ชันจาก requirement ไม่สามารถอ้างอิงถึงข้อมูลได้ จึงปรับเป็นรูปแบบพื้นฐานแทนการเรียกซ้อนกันหลายชั้น  */

console.log(s63130500030); // for show student infos by code sxxxxxxxxxxx (xxxxxxxxxxx = student id)
int201_63130500030._grade = 'A';
console.log(s63130500030grade); // for show student grade by code sxxxxxxxxxxxgrade (xxxxxxxxxxx = student id)
console.log(s63130500030grade.);
