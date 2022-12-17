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
    headline: String,
    require: true,
  },
  partner: {
    headline: String,
    require: true,
  },
});

module.exports = mongoose.model('Calendar', calendarSchema);
