const express = require('express')
const { getById, getAll } = require('../database/functions')
const api = express.Router()


//pegar um pedido por id, util para mostrar os pedidos do cliente
api.get("/order/", async (req, res) => {
    
    if(req.cookies) {
        let cookies = Object.keys(req.cookies)
        
        //pegar cada pedido
        let result = []
        for(let cookie of cookies) {
            let data = await getById(cookie)
            result.push(data)
        }
        
        //enviar
        return res.send(result)
    }
    return res.send([])
    
})

//pegar todos os pedidos, util para o admin
api.get("/order/all", async (req, res) => {
    const result = await getAll()
    res.send(result)
})

module.exports = api