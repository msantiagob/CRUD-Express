const mongoose = require('mongoose');
const model = require('./model');
const bomberosSchema = new mongoose.Schema(model);

module.exports = mongoose.model('bomberos', bomberosSchema);
