const {Router}=require('express')

const route= Router()

const {getCliente,postCliente,putCliente,deleteCliente}=require('../controllers/cliente')

route.put('/',putCliente)

route.delete('/',deleteCliente)

route.get('/',getCliente)

route.post('/',postCliente)

module.exports=route