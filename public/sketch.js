let startTime = new Date().getTime(); // Time at the start of the program
let lastTime = startTime; // Time when the last request was sent to the server

function setup() {
}

function draw() {
    let currentTime = new Date().getTime(); // time right now
    if (currentTime - lastTime >= 1000) { // if more than 1 second has passed
        lastTime = currentTime; // update 
        let secondsPassed = Math.round((currentTime - startTime)/1000); // seconds that passed since program start
        console.log(secondsPassed); // print that out in the console...
        sendToServer(secondsPassed); // ...and send it to the server
    }
    
}

// Sends the given number to the server via a POST request 
// Be careful to use the same names "/dist" and "distance" in the server script. 
function sendToServer(distance) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/dist', true);
    //Send the proper header information along with the request
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here. Remove this if you are not doing anything.
        }
    }
    xhttp.send("distance=" + distance);
}



