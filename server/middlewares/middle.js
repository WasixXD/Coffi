const express = require('express')
const { create } = require('../database/functions')
const db = require('../config/mongo')
const { v4 } = require('uuid')

const middle = express.Router()

db.once('open', () => {
    console.log("Mongo connection stabilized")
})

middle.use(express.urlencoded({extended: true}))


middle.post("/order", async (req, res, next) => {
    let body = req.body
    let id = v4()
    body.id = id
    req.id = id


    const status = await create(body)
    if(status.error) {
        return res.status(400).send(status.error)
    }

    next()
    
})

module.exports = middle