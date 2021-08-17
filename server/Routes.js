const express = require('express')
const middle = require('./middlewares/middle')
const path = require('path')

const router = express.Router()
router.use(express.static(path.resolve("views/")))

router.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('views/index.html'))
})


router.post("/order", middle, (req, res) => {
    res.send("criado")
})


module.exports =  router