const { Model, validation } = require('./Schema')

//criar um pedido
async function create(obj) {
    try {
        
        const validate = validation(obj)
        if(validate.error) {
            return validate
        }
    
        const userOrder = new Model(obj)
        return  userOrder.save()
    } catch(err) {
        return err
    }
}

//pegar por id especifico
async function getById(id) {
    try {
        const result = await Model.find({id: id})
        return result
    } catch(error) {
        return error
    }

}

//pegar por todos
async function getAll() {
    try {
        const result = await Model.find().exec()
        return result
    } catch(error) {
        return error
    }
}

module.exports = {
    create,
    getById,
    getAll
}