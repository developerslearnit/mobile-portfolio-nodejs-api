var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
	title: { type: String,required:true },
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', categorySchema);