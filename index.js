var express = require('express'),
     app = express(),
     bodyParser = require('body-parser'),
     cors = require('cors'),
     config = require('./configuration/app.config'),
     dbConnection = require('./db-connection/db.connection'),
     server = require('http').createServer(app);



app.set('port', (process.env.PORT || config.serverPort));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./routes/app-routes')(express, app);



server.listen(app.get('port'), function () {
     console.log('Node app is running on port', app.get('port'));
});