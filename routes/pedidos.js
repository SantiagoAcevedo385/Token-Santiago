const {Router} = require('express');

const route = Router();

const {getPedido, postPedido, putPedido, deletePedido}=require('../controllers/pedido');

route.put('/', putPedido)

route.delete('/', deletePedido)

route.get('/', getPedido)

route.post('/', postPedido)

module.exports = route;