require('dotenv').config()

const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.API)


module.exports = mail