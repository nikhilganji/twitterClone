var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
const Post = new Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
});

module.exports = mongoose.model('Post', Post);