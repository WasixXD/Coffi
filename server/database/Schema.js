const mongoose = require('mongoose')
const { v4 } = require('uuid')
const Joi = require('joi')


let Order = new mongoose.Schema({
    id:{
        type: String,
        default: v4()
    },
    author: String,
    email: String,
    item: String,
    to: String,
    sub: String,
})



const joiValidate = (obj) => {
    var schema = Joi.object({
        id: Joi.string().max(37).default(v4()),
        author: Joi.string().required().alphanum(),
        email: Joi.string().required().email(),
        item: Joi.string().min(5).max(40).required(),
        to: Joi.string().email().required(),
        sub: Joi.string().max(200),
    })

    return schema.validate(obj)
}

module.exports = {
    validation: joiValidate,
    Model: mongoose.model("Order", Order),
}