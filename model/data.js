const mongoose = require('mongoose')
const schema = mongoose.Schema;

const dataschema = new schema({
    fullname: String,
    email: String,
    message: String
})

const DATA = mongoose.model('data', dataschema);
module.exports = DATA;