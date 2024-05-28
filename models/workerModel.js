const connection = require('../db.config.js');

const Worker = function (worker) {
    this.id = worker.id;
    this.name = worker.name;
    this.age = worker.age;
    this.gender = worker.gender;
}


Worker.add = function (newWorker, result) {

    const q = `insert into workers(name,age,gender)values (?,?,?)`;
    connection.query(q, [newWorker.name, newWorker.age, newWorker.gender], (err, resu) => {
        console.log("error: ", err);
        if (err) result(err, null);

        console.log(resu);
        result(null, resu);
    })
}


Worker.getAll = function (result) {
    const q = 'select * from workers';
    connection.query(q, (err, resu) => {
        if (err) result(err);
        result(resu);
    })
}
module.exports = Worker;