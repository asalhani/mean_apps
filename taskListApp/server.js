var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

app.use(cors());

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', tasks);

app.listen(port, function(){
    console.log("Server started on port: " + port);
});