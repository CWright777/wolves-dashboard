var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WolfSchema = new mongoose.Schema({
  name: String,
  color: String,
  size: String,
  created_at: { type: Date, default: Date.now }
})

WolfSchema.path('name').required(true, "Name cannot be blank");
WolfSchema.path('color').required(true, "Color cannot be blank");
WolfSchema.path('size').required(true, "Size cannot be blank");

module.exports = mongoose.model('Wolves',WolfSchema)