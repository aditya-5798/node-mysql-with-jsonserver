"use Strict";
const connection = require('../db.config.js');

const Item = function (item) {
    // this.item_id = item.item_id;
    this.item_name = item.item_name;
    this.item_desc = item.item_desc;
    this.item_price = item.item_price;

}

Item.add = function (newItem, result) {
    let data = [newItem.item_name, newItem.item_desc, newItem.item_price];

    let sql = 'INSERT INTO items(item_name, item_desc, item_price) VALUES(?, ?, ?)';

    connection.query(sql, data, (err, resu) => {
        console.log("error: sql error", err);
        if (err) result(err, null);

        console.log(resu);
        result(null, resu);
    });
};


Item.getAll = function (result) {
    // const q = "SELECT * FROM items";
    // connection.query(q, (err, resu) => {
    //     if (err) {
    //         console.log('sql error occured ', err);
    //         result(err);
    //     } else {
    //         console.log('items : ', resu);
    //         result(resu);

    //     }

    // })
    connection.query("Select * from items", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('items : ', res);
            result(null, res);
        }
    });

}


Item.getItemById = function (item_id, result) {
    const q = "select * from items where item_Id=?";
    connection.query(q, item_id, (err, resu) => {
        if (err) {
            console.log("db error", err);
            result(err)
        }
        result(resu);
    })
}


Item.deleteItem = function (item_id, result) {
    const q = "delete  from items where item_Id=?";
    connection.query(q, item_id, (err, resu) => {
        if (err) {
            console.log("db error", err);
            result(resu);
        }
        else {
            console.log(resu);
            result(resu);
        }
    })
}


Item.updateItem = function (item_id, updatedItem, result) {
    const { item_Name, item_desc, item_Price } = updatedItem;
    if (item_Name != '') {
        connection.query("update items set item_Name=? where item_Id=?", [item_Name, item_id], (err, res) => {
            if (err) result(err);
            result(res)
        })
    }
    if (item_desc != '') {
        connection.query("update items set item_desc=? where item_Id=?", [item_desc, item_id], (err, res) => {
            if (err) result(err);
            result(res)
        })
    }
    if (item_Price != '') {
        connection.query("update items set Item_Price=? where item_Id=?", [item_Price, item_id], (err, res) => {
            if (err) result(err);
            result(res)
        })
    }

}

module.exports = Item;