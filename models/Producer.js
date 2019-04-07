let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProducerSchema = new Schema({
    id: mongoose.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Producer', ProducerSchema);
