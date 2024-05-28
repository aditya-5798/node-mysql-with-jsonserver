const connection = require('../db.config');


const Farmer = function (farmer) {
    this.id = farmer.id;
    this.name = farmer.name;
    this.age = farmer.age;
    this.village = farmer.village;

}


Farmer.addNewFarmer = function (newFarmer, result) {
    // const [name, age, village] = [newFarmer.name, newFarmer.age, newFarmer.village];
    // const q = "insert into farmers (name,age,village) values (?,?,?)";
    // connection.query(q, [name, age, village], (err, res) => {
    //     // console.log("error: sql error", err);
    //     if (err) result(err, null);
    //     console.log(res);
    //     result(res);
    // })

    const [name, age, village] = [newFarmer.name, newFarmer.age, newFarmer.village];
    const q = "INSERT INTO farmers (name, age, village) VALUES (?, ?, ?)";
    connection.query(q, [name, age, village], (err, res) => {
        if (err) {
            console.log("Error: SQL error", err);
            result(err, null);
        } else {
            console.log("Success: Record inserted successfully");
            result(null, res);
        }
    });
}



module.exports = Farmer;