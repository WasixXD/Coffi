const mail = require('../config/sendGrid')
const express = require('express')
const { getById, getAll, updateById } = require('../database/functions')
const api = express.Router()





//pegar um pedido por id, util para mostrar os pedidos do cliente
api.get("/order/", async (req, res) => {
    
    if(req.cookies) {
        let cookies = Object.keys(req.cookies)
        
        //pegar cada pedido
        let result = []
        for(let cookie of cookies) {
            let [data] = await getById(cookie)
            result.push(data)
        }
        
        //enviar
        return res.send(result)
    }
    return res.send([])
})



api.get("/email/:id", async (req, res) => {
    const { id } = req.params
    const [order] = await getById(id)
    
    //const result = await mail.send()
    const msgTo = {
        from: "coffi.noReply@gmail.com",
        to: order.to,
        subject: `Coffi delivery - ${order.item}`,
        text: order.sub + "\n\nCoffi.",
    }

    const msgFrom = {
        from: "coffi.noReply@gmail.com",
        to: order.email,
        subject: `Coffi delivery - ${order.status}`,
        text: "The coffe has been delivered and the person no longer exists.\nThanks for the preference , Coffi."
    }

    const requester = await mail.send(msgFrom)
    const result = await mail.send(msgTo)
    
    res.send([result, requester])
    
})



//atualizar o status
api.put("/order/upd/:id", async (req, res) => {
    const { id } =  req.params

    const result = await updateById(id)

    res.send(result)

})

//pegar todos os pedidos, util para o admin
api.get("/order/all", async (req, res) => {
    const result = await getAll()
    res.send(result)
})

module.exports = api