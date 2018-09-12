import * as s from './Student';
import * as ms from './MathStudent';
import * as cr from './ClassRoom';


function greet(person){
    return "Hello, " + person;
}

let user = "David";
console.log(user + " has been called for.");
//document.body.innerHTML = greet(user)


let student1 = new s.Student();
//console.log(student1.Name + " : " + student1.StudentId);
console.log(student1.Serialize());

let student2 = new s.Student("Dan", 345);
//console.log(student2.Name + " : " + student2.StudentId);
console.log(student2.Serialize());

let myMathStudent = new ms.MathStudent("Matt", 678);
console.log(myMathStudent.Serialize());

let myClass: cr.ClassRoom  = {Seats: 5, StudentCount: 4}
//console.log("Class Room Stat: " + myClass.StudentCount + "/" + myClass.Seats)
let serializedClassRoom = {Seats: myClass.Seats, StudentCount: myClass.StudentCount};
console.log(serializedClassRoom);




//foo = 123;
//declare var foo: any;
//foo = 123;

// import * as data1 from './data/some.json';
// import data2 from "json!http://foo.com/data_returns_json/";




// class MathStudent extends Student{
//     constructor(name?: string, studentId?: number){
//         super(name, studentId);
//     }
//     Serialize(){
//         return super.Serialize();
//     }
// }

// class Student{
//     Name: string;
//     StudentId: number;
//
//     constructor(name?: string, uid?: number){
//         if (name)
//             this.Name = name;
//         else
//             this.Name = "David";
//         if (uid)
//             this.StudentId = uid;
//         else
//             this.StudentId = 123;
//     }
//
//     Serialize() {
//         return {name: this.Name, StudentId: this.StudentId};
//     }
// }

// interface ClassRoom{
//     Seats: number;
//     StudentCount: number;
// }
