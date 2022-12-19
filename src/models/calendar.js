const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  date: {
    type: String,
    require: true,
  },
  am6: {
    type: Object,
    require: true,
    occupied: {
      type: Boolean,
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
  },
  am9: {
    type: Object,
    require: true,
    occupied: {
      type: Boolean,
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
  },
  pm12: {
    type: Object,
    require: true,
    occupied: {
      type: Boolean,
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
  },
  pm3: {
    type: Object,
    require: true,
    occupied: {
      type: Boolean,
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
  },
  pm6: {
    type: Object,
    require: true,
    occupied: {
      type: Boolean,
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
  },
});

module.exports = mongoose.model('Calendar', calendarSchema);
