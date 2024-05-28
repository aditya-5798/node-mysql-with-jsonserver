"use strict";
const dbConnect = require("../db.config.js");

const Student = function (stu) {
    this.id = stu.id;
    this.name = stu.name;
    this.age = stu.age;
    this.std = stu.age;
}

// class Student1 {
//     constructor(stu) {
//         this.id = stu.id;
//         this.name = stu.name;
//         this.age = stu.age;
//         this.std = stu.age;
//     }
// }

Student.add = function (newStu, result) {

    const q = 'select * from students where id=?';
    dbConnect.query(q, [Student.id], (err, result) => {
        if (!err && result.length == 0) {
            const qq = await`insert into students set ?`;
            dbConnect.query(qq, newStu, (err, res) => {
                if (err) {
                    console.log(err);
                    console.log("can't add student");
                    result('cannot add student')
                } else {
                    console.log(res);
                    result(res)
                }
            })
        }
        else {
            result("student already exists")
        }
    })
    return result;

}

Student.getAll = async function (result) {
    dbConnect.query('select * from students', (err, resu) => {
        if (err) {
            console.log(err);
            result(err);
        }
        else {
            console.log(resu);
            result(resu);
        }
    });

}

module.exports = Student;