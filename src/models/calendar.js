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
  },
  partner: {
    headline: String,
  },
});

module.exports = mongoose.model('Calendar', calendarSchema);
