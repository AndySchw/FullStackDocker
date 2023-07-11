const mongoose = require('mongoose');

const MedaillenSchema = new mongoose.Schema({
  name: String,
  gold: Number,
  silber: Number,
  bronze: Number,
  gesamt: Number
});

module.exports = mongoose.model('Medaillen', MedaillenSchema, 'countries');
