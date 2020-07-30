const express = require('express');
const router = require('express').Router()
const { Client, Pool } = require('pg');
const { response } = require('express');
const connectionString = 'postgres://admin:password@localhost:5432/needleApp';
const client = new Client({
    connectionString: connectionString
});

client.connect();
var app = express();
app.set('port', process.env.PORT || 4000);

// const queryDatabase = (req, res) =>{
//     //res.sendFile('C:/Users/Tim/Documents/needleWebApp/index.html');
//     res.header("Access-Control-Allow-Origin",  "*")
//     client.query(`SELECT * FROM needle WHERE gauge=${res}`, (error, results) =>{
//         if(error){
//             throw error;
//         }
//         return res.status(200).json(results.rows);
//     })
// }


// Puts the information below in the getResponse variable to be called later
const getResponse = (req, res) => {
    res.header("Access-Control-Allow-Origin",  "*")
    return res.json({ status: 200, data: {name: "Hello" }});
}

// https://stackoverflow.com/questions/53235193/how-to-pass-user-input-from-html-form-when-using-express-router
// Sending file through server
app.get("/", (req, res) =>{
    res.header("Access-Control-Allow-Origin",  "*")
    res.sendFile(__dirname + "/index.html");
});

//app.use('/api', router);

//app.route('/hello').get(getResponse);

app.get('/databaseTest', (req, res) => {
    let gaugeInput = req.query.gauge;
    res.header("Access-Control-Allow-Origin",  "*")
    client.query(`SELECT * FROM needle WHERE gauge=${gaugeInput}`, (error, results) =>{
        if(error){
            throw error;
        }
        return res.status(200).json(results.rows);
    })
});



app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});



// app.get('/', async (req, res) => {
//     res.sendFile('C:/Users/Tim/Documents/needleWebapp/index.html', {__dirname});
//     //var userInputGauge = findProduct();
//     //const result = await client.query(`SELECT ${userInputGauge} FROM needle`)
//     //res.send(result);
// })

// app.get('/test1', async(req, res) =>{
//     var userInputGauge = findProduct();
//     client.query(`SELECT ${userInputGauge} FROM needle`, function(err, result){
//     res.send(result);
//     })

// });

//This can be done either this way or by using the variable getResponse above
// router.get("/hello", (req, res) => {
//     console.log("query1");
    
//     //Turning off coors beacuse fuck coors
//     res.header("Access-Control-Allow-Origin",  "*")
//     return res.json({ status: 200, data: {name: "Hello" }});
  
//     });



