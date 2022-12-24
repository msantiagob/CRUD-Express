const mongoose = require('mongoose');
const model = require('./model');
const santaRitaSchema = new mongoose.Schema(model);

module.exports = mongoose.model('santaRita', santaRitaSchema);
