const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db.config.js')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5001;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});
// Require employee routes
const employeeRoutes = require('./routes/employeeRoute');
const studntRoutes = require('./routes/studentRoute.js');
const farmerRouter = require('./routes/farmerRoute.js')
const itemRoute = require('./routes/itemRoute.js')
// console.log(studntRoutes.path);
// using as middleware
app.use('/api/v1/employees', employeeRoutes)
app.use('/api/stu', studntRoutes)
app.use('/api/item', itemRoute)
app.use('/api/farmer', farmerRouter)
// listen for requests

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


