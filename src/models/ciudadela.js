const mongoose = require('mongoose');
const model = require('./model');
const ciudadelaSchema = new mongoose.Schema(model);

module.exports = mongoose.model('ciudadela', ciudadelaSchema);
