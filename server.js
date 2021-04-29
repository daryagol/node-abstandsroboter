// STARTING THE SERVER:
const hostname = '127.0.0.1';
const port = 3000;
const folderName = 'public'; // use files from this folder

// get the html file from this folder using express:
var express = require('express'); // use the express framework
var app = express();
app.use(express.static(folderName)); 


app.listen(port, function () {
  console.log("Example app listening at http://%s:%s", hostname, port)
});

// listen to post request:
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : false})); // true


app.post('/dist', (req, res) => {
    console.log('Got number:', req.body.distance);
    res.sendStatus(200);
    arduinoSerialPort.write(req.body.distance);    
});


// ARDUINO SERIAL PORT:
const SerialPort = require('serialport');
const arduinoSerialPort = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 });


