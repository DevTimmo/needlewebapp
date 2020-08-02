//const { response } = require("express");


let url = new URL('http://51.81.32.218:4000/databaseTest');
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

function getUserGaugeInput(){

    // Captures user input from within the gauge ID from index.html
    const gauge = document.forms[0].gauge.value;

    // Pass the variable gauge into the url
    fetch(`http://51.81.32.218:4000/databaseTest?gauge=${gauge}`)
        .then(res => res.json())
        .then(data => {

            // Sets table equal to the the index.html id resultTable
            var table = document.getElementById("resultTable");

            // If the table has rows it will remove the nodes.
            while(table.hasChildNodes()){
                table.removeChild(table.lastChild);
            }

            // Iterates over each element in the data and puts it in a new column
            // and will put each set of columns in a new row with each iteration
            data.forEach(thing =>{
                // console.log(thing);
                
                var row = table.insertRow(0); // Insert a row to the table
                var cell1 = row.insertCell(-1); // Insert the first column
                cell1.appendChild(document.createTextNode(thing.gauge));

                var cell2 = row.insertCell(-1);
                cell2.className = "colorClassName";
                cell2.appendChild(document.createTextNode(" ")); // Creates the node
                cell2.style.backgroundColor = thing.color;  //Sets the color of the backgroun text to thing.color hex value
                
                var cell3 = row.insertCell(-1);
                cell3.appendChild(document.createTextNode("08290-" + thing.referenceID));
                
                var cell4 = row.insertCell(-1);
                cell4.appendChild(document.createTextNode(thing.length));

                var cell5 = row.insertCell(-1);
                cell5.appendChild(document.createTextNode(thing.volume + 'mL'));
            })
        })
}
