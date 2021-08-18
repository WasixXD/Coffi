const router = require('./Routes')
const express = require('express')
const cors = require('cors')
const api = require('./api/api')


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(api)

//enviar um 404
app.use((req, res) => {
    res.send("tem nada aqui")
})


app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})