const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  date: {type: String, required: true},
  start: {type: String, required: true},
  end: {type: String, required: true},
  title: {type: String, required: true}
})


module.exports = mongoose.model('Events', eventsSchema);
