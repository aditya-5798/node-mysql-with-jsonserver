"use strict";
const Item = require('../models/itemModel');

exports.getAllItems = function (req, resp) {

    Item.getAll(function (err, items) {
        console.log('controller funcction');
        if (err) return resp.status(500).send('Error occured during fetching items', err);
        console.log('res', items);
        return resp.send(items);
    });

}

// exports.findAll = function (req, res) {
//     Employee.findAll(function (err, employee) {
//         console.log('controller')
//         if (err)
//             res.send(err);
//         console.log('res', employee);
//         res.send(employee);
//     });
// };

exports.addNewItem = function (req, resp) {
    const newItem = new Item(req.body);

    // 400 = bad request
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return resp.status(400).send('One or more required fields are missing');
    }
    if (!newItem.item_name || !newItem.item_desc || !newItem.item_price) {
        return resp.status(400).send('One or more required fields are missing')
    } else {

        Item.add(newItem, (err, item) => {
            console.log(err);
            if (err) return resp.status(500).send('Error occured during saving item');
            return resp.status(200).send(item);
        })


    }
}

exports.getItemById = function (req, resp) {
    const item_id = Number(req.params.item_id);
    console.log(item_id);

    Item.getItemById(item_id, function (err, item) {
        if (err)
            resp.send(err);
        resp.send(item);
    })

    // (err, item) => {
    //     if (err) {
    //         console.log('error occured at controller function', err);
    //         return resp.status(500).send('Error occured during fetching items', err);
    //     } else {
    //         console.log(item);
    //         return resp.status(200).send(item)

    //     }
    // })
}


exports.deleteItemById = function (req, resp) {
    const id = Number(req.params.item_id);

    Item.deleteItem(id, function (err, res) {
        if (err) resp.send(err)
        resp.send(res);

    })
}


exports.updateItemByFetch = function (req, res) {
    const id = Number(req.params.item_id);


    Item.updateItem(id, req.body, function (err, resu) {
        if (err) res.send(err);
        res.send("item updated successfully", resu)
    })
}