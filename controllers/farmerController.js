const Farmer = require('../models/farmerModel');


exports.addNewFarmer = function (req, resp) {
    const far = new Farmer(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return resp.status(400).send('One or more required fields are missing');
    }
    if (!far.name || !far.age || !far.village) {
        return resp.status(400).send('One or more required fields are missing')
    } else {
        Farmer.addNewFarmer(far, (err, farmer) => {
            console.log("controller");
            if (err) return resp.status(500).send('Error occured during saving item');
            return resp.status(200).send(farmer);
        })


    }

}