//const { response } = require("express");


let url = new URL('http://localhost:4000/databaseTest');
let formData = {
    gauge: 25
};

let configObj = {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

console.log(configObj);

//obtaining information from the server
// function getFetch(){
//     fetch('http://localhost:4000/databaseTest')
//         //response.text() reads the entire response from the above url
//         .then(response => response.text)
//         .then(data => {
//             /*Logs the data to the console
//             To determine data type "console.log(typeof data)"*/
//             console.log(data);

//             /*Data is type string in this example. If it's not type string
//             you must parse the data to JSON as done below. */
//             var obj = JSON.stringify(data);
            
//             /*iterates over the JSON data and sets the html tag product to the
//             type field.*/

//             console.log(obj);

//             // return obj.map(fact => {
//             //     document.getElementById('product').innerText = fact.gauge;
//             //     console.log(fact.gauge);
//             // })
//         })
//         .catch(err => console.log(err));
//     }


// https://dev.to/mohammedasker/dealing-with-json-is-not-a-function-error-1apn
// This website helped me a lot 
function getEntireDatabase(){
    fetch('http://localhost:4000/databaseTest/', configObj, {mode: 'no-cors'})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var table = document.getElementById("resultTable");

            data.forEach(thing =>{
                console.log(thing);
                var row = table.insertRow(0);
                var cell1 = row.insertCell(-1);
                cell1.appendChild(document.createTextNode(thing.gauge));

                var cell2 = row.insertCell(-1);
                cell2.className = "colorClassName";
                cell2.appendChild(document.createTextNode(" "));
                cell2.style.backgroundColor = thing.color;
                
                var cell3 = row.insertCell(-1);
                cell3.appendChild(document.createTextNode("08290-" + thing.referenceID));
                
                var cell4 = row.insertCell(-1);
                cell4.appendChild(document.createTextNode(thing.length));
            })
        })
}

function getUserGaugeInput(){
    const gauge = document.forms[0].gauge.value;
    fetch(`http://localhost:4000/databaseTest?gauge=${gauge}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //console.log(document.forms[0].gauge.value);
            
            var table = document.getElementById("resultTable");

            data.forEach(thing =>{
                console.log(thing);
                var row = table.insertRow(0);
                var cell1 = row.insertCell(-1);
                cell1.appendChild(document.createTextNode(thing.gauge));

                var cell2 = row.insertCell(-1);
                cell2.className = "colorClassName";
                cell2.appendChild(document.createTextNode(" "));
                cell2.style.backgroundColor = thing.color;
                
                var cell3 = row.insertCell(-1);
                cell3.appendChild(document.createTextNode("08290-" + thing.referenceID));
                
                var cell4 = row.insertCell(-1);
                cell4.appendChild(document.createTextNode(thing.length));
            })
        })
}

function findProduct()
{
    var productGauge=document.forms[0].gauge.value;
    document.getElementById("product").innerHTML=client.query(`SELECT ${productGauge} FROM needle`)
}

// /*
// 1. use fetch api


// writing an api using express js. open source api for uses?
// const ApiChannelsRouter = require('express').Router()
// create a Path .route('/:id').get

// -> = which calls
// then html -> client js in browser -> express server -> database

// */