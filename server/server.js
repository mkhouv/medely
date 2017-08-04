const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const uri = 'mongodb://admin:admin@ds129013.mlab.com:29013/medely';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const eventsController = require('./EventsController');

mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const PORT = 3333;

app.use(express.static(path.join(__dirname, '../')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:date', eventsController.getEvents);

app.post('/addEvent', eventsController.addEvent);

app.delete('/:date', eventsController.deleteEvent);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
