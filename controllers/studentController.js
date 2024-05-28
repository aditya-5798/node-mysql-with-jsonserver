const Employee = require('../models/employeeModel');
const Student = require('../models/studentModel');

exports.addStudent = function (req, res) {
    const newStudent = new Student(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' })
    }
    else {
        Student.add(newStudent, (err, student) => {
            if (err) res.send(err);

            res.json({ error: false, message: "Student added successfully!", data: student });
        })
    }
}

exports.allStudent = function (req, res) {
    Student.getAll((err, student) => {
        console.log("controller");
        if (err) res.send(err)
        console.log(student);
        res.send(student)
    })
}


// module.exports =
//     addStudent,
//     allStudent
