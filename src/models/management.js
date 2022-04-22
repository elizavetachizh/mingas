const { Schema, model } = require('mongoose');
const { string } = require('eclinter/lib/formatters');

const schema = new Schema({
  id: { type: String, required: true, unique: true },
  cardImg: { type: String, required: true },
  fullName: { type: String, required: true },
  position: { type: String, required: true },
  linkId: { type: String, required: true },
});

module.exports = model('Management', schema);
