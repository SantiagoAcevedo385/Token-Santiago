const {Router}=require('express')

const route=Router()

const{getVenta, postVenta, putVenta, deleteVenta}=require('../controllers/venta')

route.put('/', putVenta)
route.delete('/', deleteVenta)
route.get('/', getVenta)
route.post('/', postVenta)

module.exports=route