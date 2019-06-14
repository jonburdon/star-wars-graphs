// Serialising the json data.
//Sends a json parsed object into the setData function - now we can use the data outside the onreadystateexchange function
//Use Timeout to collect the data

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    }
    };

// Give onreadystatechange function time to reach readystate of 4 before attempting to log data
// without this, the console would try to log the data immediately, when no data has been received.
//set to 500 milliseconds
setTimeout(function() {
    console.log(data);
}, 500);


// // Serialising the json data.
// //Sends a json parsed object into the setData function - now we can use the data outside the onreadystateexchange function
// //Timeouts or Callouts needed to get the data out of the setData function

// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://swapi.co/api/");
// xhr.send();

// function setData(jsonData) {
//     data = jsonData;
// }

// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         setData(JSON.parse(this.responseText));
//     }
// };




// // Get data and log it as a json object to the console.
// //Problem: the data will be sent to within this function. See above for solution

// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://swapi.co/api/");
// xhr.send();

// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(JSON.parse(this.responseText));
//     }
// };



// Code to just get the data and display as String - not json
// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://swapi.co/api/");
// xhr.send();

// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("data").innerHTML = this.responseText;
//     }
// };



