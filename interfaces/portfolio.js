var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portfolioSchema = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	category:{ type: Schema.Types.ObjectId,ref:'Category'},
	title: { type: String },
	image_url: { type: String, default: '' },
	description: { type: String },
	web_url: { type: String, default: '' },
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);