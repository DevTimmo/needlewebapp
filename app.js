

// Imports the express functionality into the variable express
const express = require('express');
// Imports the router functionality that is pulled from express into 
// the variable router
const router = require('express').Router()
// This constructs a client and pool used to query with our database
const { Client, Pool } = require('pg');
// This constructs a response object which imports express
const { response } = require('express');
// This is the connection to our localhost postgreSQL database
// admin = user
// password = password
// localhost:5432 = ip address and port
// /needleApp = name of the table we are connecting into
const connectionString = 'postgres://needlewebapp:Password@localhost:5432/needle';
// Creates a client object which connects to the database defined above
const client = new Client({
    connectionString: connectionString
});

//connects to the client
client.connect();
var app = express();
app.use(cors());
// Sets the port that we will be using to connect to the server
app.set('port', process.env.PORT || 4000);

// using the url /databaseTest 

app.get('/databaseTest', (req, res) => {
    console.log("error1");
    // Takes the url params of gauge and sets that equal to gaugeInput
    let gaugeInput = req.query.gauge;
    // Disables coors
    res.header("Access-Control-Allow-Origin",  "*")

    //The actual database query using the url param
    client.query(`SELECT * FROM syringe WHERE gauge=${gaugeInput}`, (error, results) =>{
        if(error){
            throw error;
        }
        return res.status(200).json(results.rows);
    })
});

// Logs that the server is running
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});


