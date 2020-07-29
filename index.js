
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
function getFetch(){
    fetch('http://localhost:4000/databaseTest')
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
                cell2.appendChild(document.createTextNode(thing.color));
                var cell3 = row.insertCell(-1);
                cell3.appendChild(document.createTextNode("08290-" + thing.referenceID));
                var cell4 = row.insertCell(-1);
                cell4.appendChild(document.createTextNode(thing.length));

                // //document.getElementById('gauge').innerText = thing.gauge;
                // cell1 = thing.gauge
                // //document.getElementById("productColor").style.backgroundColor = thing.color;
                // cell2 = thing.color
                // //document.getElementById('productNDC').innerText = "08290-" + thing.referenceID;
                // cell3 = "08290-" + thing.referenceID;
                // //document.getElementById('productLength').innerText = thing.length;
                // cell4 = thing.length;
                // row.append(cell1, cell2, cell3, cell4);
            })
        })
}



// first create a TABLE structure by adding few headers.
function createTable() {
    var table = document.getElementById("resultTable");

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = 25;
    cell2.innerHTML = 26;

}
















/*
function findProduct()
{
    var productGauge=document.forms[0].gauge.value;
    document.getElementById("product").innerHTML=client.query(`SELECT ${productGauge} FROM needle`)
}
*/
//This function definitely isn't optimized. Maybe we can use a hash table to store the hex codes? Just seems excessive to have 20 lines
//be dedicated to if else statement
function setColor()
{
    if(document.forms[0].gauge.value == 30){
        document.getElementById("productColor").style.backgroundColor = '#FFFF00';
    }
    else if(document.forms[0].gauge.value == 29){
        document.getElementById("productColor").style.backgroundColor = '#FF0000';
    }
    else if(document.forms[0].gauge.value == 28){
        document.getElementById("productColor").style.backgroundColor = '#00665a';
    }
    else if(document.forms[0].gauge.value == 27){
        document.getElementById("productColor").style.backgroundColor = '#999b9e';
    }
    else if(document.forms[0].gauge.value == 26){
        document.getElementById("productColor").style.backgroundColor = '#95533c';
    }
    else if(document.forms[0].gauge.value == 25){
        document.getElementById("productColor").style.backgroundColor = '#f5822b';
    }
    else if(document.forms[0].gauge.value == 24){
        document.getElementById("productColor").style.backgroundColor = '#1b1c85';
    }
    else if(document.forms[0].gauge.value == 23){
        document.getElementById("productColor").style.backgroundColor = '#005188';
    }
    else if(document.forms[0].gauge.value == 22){
        document.getElementById("productColor").style.backgroundColor = '#000000';
    }
    else if(document.forms[0].gauge.value == 21){
        document.getElementById("productColor").style.backgroundColor = '#006910';
    }
    else if(document.forms[0].gauge.value == 20){
        document.getElementById("productColor").style.backgroundColor = '#fff200';
    }
    else if(document.forms[0].gauge.value == 19){
        document.getElementById("productColor").style.backgroundColor = '#f0e0c6';
    }
    else if(document.forms[0].gauge.value == 18){
        document.getElementById("productColor").style.backgroundColor = '#f59eb3';
    }
    else{
        document.getElementById("productColor").style.backgroundColor = "";
    }
}
function setNDC(){}


/*
1. use fetch api


writing an api using express js. open source api for uses?
const ApiChannelsRouter = require('express').Router()
create a Path .route('/:id').get

-> = which calls
then html -> client js in browser -> express server -> database

*/