let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    id: mongoose.Types.ObjectId,
    title: String
});

module.exports = mongoose.model('Comment', CommentSchema);
