const mongoose = require('mongoose')
require('dotenv').config()


//iniciar a conexão com o banco de dados
 mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const db = mongoose.connection

module.exports = db

