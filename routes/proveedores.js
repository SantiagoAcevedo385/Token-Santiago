const {Router}=require('express')

const route= Router()

const {getProveedor,postProveedores,putProveedor, deleteProveedor}=require('../controllers/proveedor')

route.get('/',getProveedor)

route.put('/',putProveedor)

route.post('/',postProveedores)

route.delete('/',deleteProveedor)

module.exports=route