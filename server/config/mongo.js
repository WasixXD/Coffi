const mongoose = require('mongoose')
require('dotenv').config()

 mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const db = mongoose.connection

module.exports = db

