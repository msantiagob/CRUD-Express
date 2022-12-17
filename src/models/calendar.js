const mongoose = require('mongoose');

const calendarSchema = mongoose.Schema({
  date: {
    type: String,
    require: true,
  },
  schedule: {
    type: String,
    require: true,
  },
  headline: {
    type: String,
    require: true,
  },
  partner: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Calendar', calendarSchema);
