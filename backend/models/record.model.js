const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    username: {type: String, required: true},
    Class: {type: String, required: true},
    enrollment_no: {type: String, required: true},
    address: {type: String, required: true},
    date: {type: Date, required: true}
},
{
    timestamps: true
});

const Record = mongoose.model('Record',recordSchema);
module.exports = Record;