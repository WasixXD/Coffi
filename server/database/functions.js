const { Model, validation } = require('./Schema')

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



module.exports ={
    create
}