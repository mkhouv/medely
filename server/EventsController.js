const Events = require('./EventsModel');
const mongoose = require('mongoose');

const EventsController = {

  getEvents(req, res, next) {
    Events.find({ date: req.params.date }, (err, events) => {
      if (err) {
        throw err;
      } else {
        res.json(events);
      }
    })
  },
  updateUser(req, res, next) {
    Events.findOneAndUpdate({ date: req.params.date }, req.body, (err, event) => {
      if (err) {
        throw err;
      } else {
        res.json(event);
      }
    });
  },

  addEvent(req, res, next) {
    Events.create(req.body, (err, event) => {
      if (err) {
        res.status(418).json(err);
      } else {
        res.status(200).json(event);
      }
      return;
    })
  },
  deleteEvent(req, res) {
    Events.deleteOne({ date: req.params.date }, (err, event) => {
      if (err) {
        res.status(418).send(err);
      } else {
        res.status(200).send();
      }
    })
  },
};

module.exports = EventsController;
