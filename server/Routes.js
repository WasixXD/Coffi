const express = require('express')
const middle = require('./middlewares/middle')
const path = require('path')
const cookieParser = require('cookie-parser')


const router = express.Router()
router.use(express.static(path.resolve("views/")))
router.use(cookieParser())


router.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve('views/index.html'))
})


router.get("/admin", (req, res) => {
    res.status(200).sendFile(path.resolve("views/admin.html"))
})

router.get("/menu", (req, res) => {
    res.status(200).sendFile(path.resolve("views/menu.html"))
})

//enviar a pagina do cliente
router.get("/client", (req, res) => {
    
    res.sendFile(path.resolve("views/client.html"))
})

router.get("/request", (req, res) => {
    res.sendFile(path.resolve("views/request.html"))
})

//adicionar um pedido no banco
router.post("/order", middle, (req, res) => {    
    
    //criar o cookie com o id
    const id = req.id
    res.cookie(id, id, {maxAge: 48 * 60 * 60 * 1000})
    res.redirect("/client")
})

module.exports = router